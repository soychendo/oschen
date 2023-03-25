import { useEffect } from "react";

const useDraggable = (targetRef) => {
  useEffect(() => {
    const target = targetRef.current;

    let prevX, prevY, newX, newY, docuLeft, docuTop;

    const handleMove = (e) => {
      e.preventDefault();
      const moveEvent = e.type === "mousemove" ? e : e.touches[0];
      newX = prevX - moveEvent.clientX;
      newY = prevY - moveEvent.clientY;

      docuLeft = window.getComputedStyle(target).getPropertyValue("left").split("px")[0] * 1;
      docuTop = window.getComputedStyle(target).getPropertyValue("top").split("px")[0] * 1;

      target.style.left = docuLeft - newX + "px";
      target.style.top = docuTop - newY + "px";

      prevX = moveEvent.clientX;
      prevY = moveEvent.clientY;
    };

    const handleDown = (e) => {
      const startEvent = e.type === "mousedown" ? e : e.touches[0];
      prevX = startEvent.clientX;
      prevY = startEvent.clientY;

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove, { passive: false });
    };

    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };

    target.addEventListener("mousedown", handleDown);
    target.addEventListener("touchstart", handleDown, { passive: false } );
    target.addEventListener("mouseup", handleUp);
    target.addEventListener("touchend", handleUp);

    return () => {
      target.removeEventListener("mousedown", handleDown);
      target.removeEventListener("touchstart", handleDown);
      target.removeEventListener("mouseup", handleUp);
      target.removeEventListener("touchend", handleUp);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [targetRef]);
};

export default useDraggable;