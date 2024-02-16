"use client";

import { useEffect, useRef } from "react";
import { usePointer } from "../contexts/ContextHooks";

const CursorTwo = () => {
  const { pointerIn } = usePointer();

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentPoint = { x: 0, y: 0 };
    const targetPoint = { x: 0, y: 0 };

    function lerp() {
      const dx = targetPoint.x - currentPoint.x;
      const dy = targetPoint.y - currentPoint.y;

      currentPoint.x += dx * 0.072;
      currentPoint.y += dy * 0.072;

      cursorRef.current?.style.setProperty("--x", `${currentPoint.x}`);
      cursorRef.current?.style.setProperty("--y", `${currentPoint.y}`);

      requestAnimationFrame(lerp);
    }

    function mouseMoveHandler() {
      document.addEventListener("pointermove", (event) => {
        const { clientX, clientY } = event;

        targetPoint.x = clientX;
        targetPoint.y = clientY;
      });
    }

    lerp();
    mouseMoveHandler();
  }, []);

  return !pointerIn ? (
    <>
      <div ref={cursorRef} className={"dot-2"}></div>
    </>
  ) : null;
};

export default CursorTwo;
