const getClientXFromDifferentEvents = (event: TouchEvent | MouseEvent | PointerEvent): number => {
  if (event.type.includes('touch') && typeof (event as TouchEvent)?.touches !== 'undefined') {
    const touchX = (event as TouchEvent).touches[0]?.clientX ?? (event as TouchEvent).changedTouches[0]?.clientX;
    if (touchX) return touchX;
  }
  return (event as MouseEvent | PointerEvent).clientX;
}

export default getClientXFromDifferentEvents;
