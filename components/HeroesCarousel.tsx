"use client";

import { useEffect } from "react";
import "swiper/css/bundle";
import styles from "@/app/home.module.css";

export interface HeroSlide {
  img: string;
  oath: string;
}

interface Props {
  heroes: HeroSlide[];
}

/**
 * Showcase carousel for the realm's heroes. Each slide pairs a character with
 * an oath fragment — fitting for Oathbound and free of class-specific claims
 * while the game is in development. Swiper is imported dynamically (no SSR).
 */
export default function HeroesCarousel({ heroes }: Props) {
  useEffect(() => {
    let instance: { destroy?: () => void } | undefined;
    import("swiper/bundle").then(({ Swiper }) => {
      instance = new Swiper(".heroes-carousel", {
        slidesPerView: 1.15,
        spaceBetween: 16,
        loop: true,
        grabCursor: true,
        centeredSlides: false,
        breakpoints: {
          560: { slidesPerView: 2, spaceBetween: 18 },
          900: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 22 },
        },
        autoplay: { delay: 3200, disableOnInteraction: false },
      });
    });
    return () => { instance?.destroy?.(); };
  }, []);

  return (
    <div className={styles.heroesCarouselWrap}>
      <div className="swiper heroes-carousel">
        <div className="swiper-wrapper">
          {heroes.map((h, i) => (
            <div key={i} className="swiper-slide">
              <article className={styles.heroCard}>
                <img src={h.img} alt="An Oathbound hero" loading="lazy" />
                <div className={styles.heroCardOverlay} />
                <div className={styles.heroCardBody}>
                  <span className={styles.heroCardMark}>&#10022;</span>
                  <p className={styles.heroCardOath}>&ldquo;{h.oath}&rdquo;</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
