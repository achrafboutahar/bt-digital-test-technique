import React, { useState, useRef, ReactNode } from "react";
import "./style.css";

export interface GenericSwiperProps<T = unknown> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  slideClassName?: string;
  dotsClassName?: string;
  dotClassName?: string;
  activeDotClassName?: string;
  transitionDuration?: number;
  swipeThreshold?: number;
  showDots?: boolean;
  initialSlide?: number;
  onSlideChange?: (index: number) => void;
  slidePadding?: string;
  loop?: boolean;
}

export function GenericSwiper<T = unknown>({
  items,
  renderItem,
  className = "",
  slideClassName = "",
  dotsClassName = "",
  dotClassName = "",
  activeDotClassName = "",
  transitionDuration = 300,
  swipeThreshold = 50,
  showDots = true,
  initialSlide = 0,
  onSlideChange,
  slidePadding = "0 16px",
  loop = false,
}: GenericSwiperProps<T>) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > swipeThreshold) {
      // Swipe left
      if (loop) {
        goToSlide((currentSlide + 1) % items.length);
      } else if (currentSlide < items.length - 1) {
        goToSlide(currentSlide + 1);
      }
    } else if (diff < -swipeThreshold) {
      // Swipe right
      if (loop) {
        goToSlide((currentSlide - 1 + items.length) % items.length);
      } else if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    }

    touchStartX.current = null;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    onSlideChange?.(index);
  };

  const handleDotClick = (index: number) => {
    goToSlide(index);
  };

  return (
    <div className={`generic-swiper ${className}`}>
      <div
        className="generic-swiper-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="generic-swiper-container"
          style={{
            display: "flex",
            transition: `transform ${transitionDuration}ms ease-in-out`,
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`generic-swiper-slide ${slideClassName}`}
              style={{
                width: "100%",
                flexShrink: 0,
                padding: slidePadding,
                userSelect: "none",
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {showDots && items.length > 1 && (
        <div className={`generic-swiper-dots ${dotsClassName}`}>
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`generic-swiper-dot ${dotClassName} ${
                currentSlide === index ? `active ${activeDotClassName}` : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
