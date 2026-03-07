"use client";
import useEmblaCarousel from 'embla-carousel-react'

export default function SlidingPicture() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                                        <img
                                            src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/home_page_1.png"
                                            alt="HERMES home page screenshot"
                                            width={1280}
                                            height={720}
                                            loading="lazy"
                                            decoding="async"
                                        />
                </div>
                <div className="embla__slide">
                                        <img
                                            src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/home_page_5.png"
                                            alt="HERMES home page details screenshot"
                                            width={1280}
                                            height={720}
                                            loading="lazy"
                                            decoding="async"
                                        />
                </div>
                <div className="embla__slide">
                                        <img
                                            src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/classification_page.png"
                                            alt="HERMES classification page screenshot"
                                            width={1280}
                                            height={720}
                                            loading="lazy"
                                            decoding="async"
                                        />
                </div>
                <div className="embla__slide">
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