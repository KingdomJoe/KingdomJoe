import * as THREE from 'three';

/**
 * Converts the saturated Kenney palette-atlas texture into a refined
 * monochrome "architectural maquette" gradient (ink -> warm white with a cool
 * cast). Doing this at load keeps the site strictly on-brand (black / white /
 * blue) while preserving the model's form, shading and window detail.
 */
export function toMonochromeTexture(source: THREE.Texture): THREE.CanvasTexture {
  const image = (source as unknown as { image: CanvasImageSource }).image;

  const canvas = document.createElement('canvas');
  const w = (canvas.width = 256);
  const h = (canvas.height = 256);
  const ctx = canvas.getContext('2d')!;

  // Draw original palette atlas
  ctx.drawImage(image, 0, 0, w, h);

  // 1. Desaturate fully and lift brightness -> clean study model
  ctx.globalCompositeOperation = 'source-over';
  ctx.filter = 'grayscale(1) brightness(1.08) contrast(1.03)';
  ctx.drawImage(canvas, 0, 0);
  ctx.filter = 'none';

  // 2. Cool blue cast so the maquette reads on-brand rather than beige.
  // A translucent blue fill over the opaque atlas acts as a uniform tint.
  ctx.fillStyle = 'rgba(147,197,253,0.16)';
  ctx.fillRect(0, 0, w, h);

  ctx.globalCompositeOperation = 'source-over';

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.flipY = source.flipY;
  return tex;
}

/** Luminance-derived grey for flat (non-textured) materials. */
export function toMonochromeColor(color: THREE.Color): THREE.Color {
  const l = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
  // Lift toward white for a porcelain-study feel, clamp for legibility.
  const g = Math.min(1, 0.35 + l * 0.65);
  return new THREE.Color(g, g, g);
}

/** Walks a loaded GLTF scene and restyles it to the monochrome brand look. */
export function applyArchvizStyle(root: THREE.Object3D): THREE.Object3D {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;

    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of mats) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mat = m as any;
      if (!mat || (!mat.isMeshStandardMaterial && !mat.isMeshBasicMaterial)) continue;
      // Materials are shared across clones of the same GLB — restyle once.
      if (mat.userData?.archviz) continue;
      if (mat.userData) mat.userData.archviz = true;

      if (mat.map) {
        mat.map = toMonochromeTexture(mat.map);
        mat.needsUpdate = true;
      } else if (mat.color) {
        mat.color = toMonochromeColor(mat.color);
        mat.needsUpdate = true;
      }

      if (typeof mat.metalness === 'number') mat.metalness = Math.min(mat.metalness, 0.08);
      if (typeof mat.roughness === 'number') mat.roughness = Math.max(mat.roughness, 0.62);
    }
  });

  // Gentle shadow casting
  root.traverse((obj) => {
    (obj as THREE.Mesh).castShadow = true;
    (obj as THREE.Mesh).receiveShadow = true;
  });

  return root;
}
