"use client";

import { PropsWithChildren } from "react";
import { usePointer } from "../contexts/ContextHooks";

const Btn = (props: PropsWithChildren) => {
  const { setPointerIn } = usePointer();

  return (
    <div
      role="button"
      tabIndex={0}
      onPointerEnter={() => setPointerIn(true)}
      onPointerLeave={() => setPointerIn(false)}
      className="btn-container"
    >
      {props.children}
    </div>
  );
};

export default Btn;
