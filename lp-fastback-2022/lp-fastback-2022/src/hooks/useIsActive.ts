import { RefObject, useEffect, useState } from 'react';

const useIsActive = (ref: RefObject<Element>, offset = 0): boolean => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const observer = () => {
      if (ref.current) {
        const scrollElement = window;
        const element = ref.current as HTMLDivElement;
        const top = element.offsetTop - offset;
        const height = element.getBoundingClientRect().height;
        const elementY = scrollElement?.scrollY ?? Infinity;

        setIsActive(elementY >= top && elementY <= (top + height));
      }
    };
    const scrollElement = window;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', observer);
    }
    observer();

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', observer);
      }
    }
  }, [ref, offset]);

  return isActive;
}

export default useIsActive;
