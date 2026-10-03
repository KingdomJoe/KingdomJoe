import * as React from 'react';
import { useGLTF } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';

import { applyArchvizStyle } from './archviz';

type ArchvizModelProps = ThreeElements['group'] & {
  url: string;
};

/**
 * Loads a CC0 Kenney GLB and re-styles it to the monochrome brand maquette.
 * Memoised per-url so the restyle only runs once; each instance clones the
 * styled scene so multiple placements stay independent.
 */
export function ArchvizModel({ url, ...props }: ArchvizModelProps) {
  const { scene } = useGLTF(url);

  const styled = React.useMemo(() => {
    const root = scene.clone(true);
    applyArchvizStyle(root);
    return root;
  }, [scene]);

  return <primitive object={styled} {...props} />;
}

useGLTF.preload('/models/house-suburban.glb');
useGLTF.preload('/models/tower-commercial.glb');
useGLTF.preload('/models/tree-detailed.glb');
