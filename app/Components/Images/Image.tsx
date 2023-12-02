import { useRef, useState, useEffect } from "react";

interface IProps {
  src: string;
}
export default function Image({ src }: IProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }

    const imgEl = imgRef.current;
    imgEl && imgEl.addEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    return () => {
      imgEl && imgEl.removeEventListener(LOAD_IMG_EVENT_TYPE, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 0,
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  return <img ref={imgRef} loading="lazy" src={isLoad ? src : "/Images/loading_img.png"} className="mo tn adq aij aqe bxy cvd" alt="" />;
}

let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";

function onIntersection(entries: IntersectionObserverEntry[], io: IntersectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
}
