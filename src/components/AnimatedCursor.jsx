import React, { useEffect, useRef, useState, useCallback } from "react";

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function AnimatedCursor({
  color = "220, 90, 90",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current.style.top = clientY + "px";
    cursorInnerRef.current.style.left = clientX + "px";
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback((time) => {
    if (previousTimeRef.current !== undefined) {
      coords.x += (endX.current - coords.x) / 8;
      coords.y += (endY.current - coords.y) / 8;
      cursorOuterRef.current.style.top = coords.y + "px";
      cursorOuterRef.current.style.left = coords.x + "px";
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mouseenter", onMouseEnter);
  useEventListener("mouseleave", onMouseLeave);

  useEffect(() => {
    if (isActive) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale})`;
    } else {
      cursorInnerRef.current.style.transform = "scale(1)";
      cursorOuterRef.current.style.transform = "scale(1)";
    }
  }, [isActive, innerScale, outerScale]);

  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef.current.style.opacity = 1;
    } else {
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef.current.style.opacity = 0;
    }
  }, [isVisible]);

  return (
    <>
      <div
        ref={cursorOuterRef}
        style={{
          position: "fixed",
          borderRadius: "50%",
          width: outerSize,
          height: outerSize,
          backgroundColor: `rgba(${color}, ${outerAlpha})`,
          pointerEvents: "none",
          transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
          zIndex: 999,
        }}
      />
      <div
        ref={cursorInnerRef}
        style={{
          position: "fixed",
          borderRadius: "50%",
          width: innerSize,
          height: innerSize,
          backgroundColor: `rgba(${color}, 1)`,
          pointerEvents: "none",
          transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
          zIndex: 999,
        }}
      />
    </>
  );
}

export default AnimatedCursor;
