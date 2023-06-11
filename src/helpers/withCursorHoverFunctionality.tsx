import { ComponentType, useCallback } from "react";
import { useCursorMagnify } from "src/hooks/useCursorMagnify";

export const withCursorHoverFunctionality = <P extends {}>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    const { setMagnify } = useCursorMagnify();

    const handleMouseOver = useCallback(() => setMagnify(true), []);
    const handleMouseLeave = useCallback(() => setMagnify(false), []);

    return (
      <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
