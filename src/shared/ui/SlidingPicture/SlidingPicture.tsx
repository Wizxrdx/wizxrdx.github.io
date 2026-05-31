"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./SlidingPicture.module.css";

type SlidingPictureProps = {
  className?: string;
  images?: string[];
};

export default function SlidingPicture({ className, images }: SlidingPictureProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const classes = [styles.root, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images?.map((src, index) => (
            <div className={styles.embla__slide} key={index}>
              <img src={src} alt={`Slide ${index + 1}`} width={1280} height={720} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
