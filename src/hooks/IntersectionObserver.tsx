import { useEffect } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
  targets: (HTMLDivElement | null)[];
}

export const useIntersectionObserver = ({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  onIntersect,
  targets,
}: UseIntersectionObserverProps) => {

  useEffect(() => {
    if (!targets || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(entry, observerInstance);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    targets.forEach(target => {
      if (target) observer.observe(target);
    });

    return () => {
      targets.forEach(target => {
        if (target) observer.unobserve(target);
      });
    };
  }, [targets, root, rootMargin, threshold, onIntersect]);
};
