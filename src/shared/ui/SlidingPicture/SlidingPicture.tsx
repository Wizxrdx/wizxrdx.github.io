"use client";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./SlidingPicture.module.css";

type SlidingPictureProps = {
  className?: string;
};

export default function SlidingPicture({ className }: SlidingPictureProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const classes = [styles.root, className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <img
              src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/home_page_1.png"
              alt="HERMES home page screenshot"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/home_page_5.png"
              alt="HERMES home page details screenshot"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/classification_page.png"
              alt="HERMES classification page screenshot"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.embla__slide}>
            <img
              src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/data_page.png"
              alt="HERMES data page screenshot"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
