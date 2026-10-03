import { Component, type ReactNode } from 'react';
import { Building2 } from 'lucide-react';

interface Props {
  children: ReactNode;
}
interface State {
  failed: boolean;
}

/** Static mark shown when the 3D layer cannot run. */
export function ModelFallback() {
  return (
    <div className="grid size-full place-items-center bg-dotgrid">
      <div className="flex flex-col items-center gap-3 text-muted">
        <span className="grid size-16 place-items-center rounded-2xl bg-brand-soft text-brand">
          <Building2 className="size-7" />
        </span>
        <p className="text-sm">Interactive model unavailable on this device.</p>
      </div>
    </div>
  );
}

/**
 * If the 3D layer crashes after mount, fall back to the static mark instead of
 * a blank white hole in the layout.
 */
export class WebGLBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <ModelFallback /> : this.props.children;
  }
}

/** Cheap capability probe so we don't mount the Canvas without WebGL. */
export function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}
