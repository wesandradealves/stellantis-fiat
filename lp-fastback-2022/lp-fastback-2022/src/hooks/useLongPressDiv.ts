import { useCallback, useRef, useState } from "react";

type MouseDiv = React.MouseEvent<HTMLDivElement, MouseEvent>;
type TouchDiv = React.TouchEvent<HTMLDivElement>;

interface ReturnType {
  onMouseDown: (e: MouseDiv) => void;
  onTouchStart: (e: TouchDiv) => void;
  onMouseUp: (e: MouseDiv) => void;
  onMouseLeave: (e: MouseDiv) => void;
  onTouchEnd: (e: TouchDiv) => void;
  onTouchCancel: (e: TouchDiv) => void;
}

type Events = MouseDiv | TouchDiv;

type LongPressType = (
  actions: {
    onLongPress: (e: Events) => void,
    onClear: (e: Events) => void,
    onClick?: (e: Events) => void,
  },
  options?: {
    shouldPreventDefault?: boolean;
    delay?: number;
  }
) => ReturnType;

const useLongPressDiv: LongPressType = (
  actions,
  {
    shouldPreventDefault = true,
    delay = 600,
  } = {}
) => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const {
    onLongPress,
    onClear,
    onClick,
  } = actions;
  const timeout = useRef<NodeJS.Timeout>();
  const target = useRef<HTMLDivElement>();

  const start = useCallback(
    (event) => {
      if (shouldPreventDefault && event.target) {
        event.target.addEventListener("touchend", preventDefault, {
          passive: false
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress(event);
        setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback(
    (e, shouldTriggerClick = true) => {
      onClear(e);
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && !!onClick && onClick(e);
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered, onClear]
  );

  return {
    onMouseDown: (e: MouseDiv) => start(e),
    onTouchStart: (e: TouchDiv) => start(e),
    onMouseUp: (e: MouseDiv) => clear(e),
    onMouseLeave: (e: MouseDiv) => clear(e),
    onTouchEnd: (e: TouchDiv) => clear(e),
    onTouchCancel: (e: TouchDiv) => clear(e),
  };
};

const isTouchEvent = (event: TouchEvent | MouseEvent): boolean => {
  return "touches" in event;
};

const preventDefault = (event: TouchEvent | MouseEvent) => {
  if (!isTouchEvent(event)) return;

  if ((event as TouchEvent).touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongPressDiv;
