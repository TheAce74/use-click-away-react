import { useEffect, useMemo, useRef } from "react";

/**
 * Registers a listener to the document to help you click away to close dropdowns/containers
 * @module react-use-click-away
 * @param {function} callback - The callback param expects the function that will be called on click-away
 * @param {array} excludeClasses - The optional excludeClasses param expects an array of classNames representing elements which can be clicked and won't close the dropdowns/containers
 **/
function useClickAway<T extends HTMLElement>(
  callback: () => void,
  excludeClasses?: string[]
) {
  const clickAwayRef = useRef<T | null>(null);

  const memoizedExcludeClasses = useMemo(
    () => excludeClasses,
    [excludeClasses]
  );

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        clickAwayRef.current &&
        !clickAwayRef.current.contains(target) &&
        !memoizedExcludeClasses?.includes(target.className) &&
        !memoizedExcludeClasses?.some((item) => target.closest(`.${item}`))
      ) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [clickAwayRef, callback, memoizedExcludeClasses]);

  return { clickAwayRef };
}

export { useClickAway };
