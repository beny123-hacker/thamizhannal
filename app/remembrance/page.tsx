"use client";

import { useEffect, useState } from "react";
import "./page.css";

type RemembranceImage = {
  id: number;
  title: string;
  subtitle: string;
  file: string;
};

const SUPABASE_BASE_URL =
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal";

const REMEMBRANCE_FOLDER = "remembrance";

const getImageUrl = (fileName: string) => {
  return `${SUPABASE_BASE_URL}/${REMEMBRANCE_FOLDER}/${encodeURIComponent(
    fileName
  )}`;
};

const remembranceImages: RemembranceImage[] = [
  {
    id: 1,
    title: "2018 ஆகஸ்ட் — செய்தி",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "2018 august.jpg",
  },
  {
    id: 2,
    title: "பிறந்தநாள் கொண்டாட்டம்",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "birthday party.jpg",
  },
  {
    id: 3,
    title: "89ஆவது பிறந்தநாள் விழா — அழைப்பிதழ்",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "89th birthday.jpg",
  },
  {
    id: 4,
    title: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 1)",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "2016 february part 1.jpg",
  },
  {
    id: 5,
    title: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 2)",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "2016 february part 2.jpg",
  },
  {
    id: 6,
    title: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 3)",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "2016 february part 3.jpg",
  },
  {
    id: 7,
    title: "2016 பிப்ரவரி 11 — அழைப்பிதழ் (பக்கம் 4)",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "2016 february part 4.jpg",
  },
  {
    id: 8,
    title: "நினைவுப் படம்",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "remembrance photo.jpg",
  },
  {
    id: 9,
    title: "2016 ஜனவரி 29",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "2016 january 29.jpg",
  },
  {
    id: 10,
    title: "2016 ஜனவரி 30",
    subtitle: "பெரிதாக்க சொடுக்கவும் ↗",
    file: "2016 january 30.jpg",
  },
];

export default function RemembrancePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? remembranceImages[selectedIndex] : null;

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === remembranceImages.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? remembranceImages.length - 1
        : selectedIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="remembrance-page">
      {/* HERO */}
      <section className="remembrance-hero">
        <div className="remembrance-hero-overlay" />

        <div className="remembrance-hero-content">
          <p className="remembrance-kicker">REMEMBRANCE</p>

          <h1>நினைவேந்தல்</h1>

          <div className="remembrance-divider" />

          <p className="remembrance-english-title">
            In Memory of Thamizhannal
          </p>

          <h2>மூதறிஞர் இராம. பெரியகருப்பன் (தமிழண்ணல்)</h2>

          <p className="remembrance-dates">
            12 ஆகஸ்ட் 1928 — 29 டிசம்பர் 2015
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="remembrance-gallery-section">
        <div className="remembrance-gallery-header">
          <p className="remembrance-kicker">MEMORIES</p>

          <h2>நினைவுகளின் தொகுப்பு</h2>

          <p>
            தமிழண்ணலின் வாழ்க்கை, நினைவுகள் மற்றும் அவரை நினைவுகூரும்
            நிகழ்வுகளின் புகைப்படத் தொகுப்பு.
          </p>
        </div>

        <div className="remembrance-gallery">
          {remembranceImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="remembrance-card"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="remembrance-image-wrapper">
                <img
                  src={getImageUrl(image.file)}
                  alt={image.title}
                  className="remembrance-image"
                  loading="lazy"
                />

                <div className="remembrance-image-overlay">
                  <span>பெரிதாக்க ↗</span>
                </div>
              </div>

              <div className="remembrance-card-content">
                <h3>{image.title}</h3>
                <p>{image.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="remembrance-quote">
        <div className="remembrance-quote-inner">
          <span className="quote-mark">“</span>

          <p>
            தமிழால் வாழ்ந்தவர், தமிழுக்காக வாழ்ந்தவர், தமிழ் என்று வாழ்ந்தவர்.
          </p>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="remembrance-modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <button
            type="button"
            className="remembrance-modal-close"
            onClick={closeModal}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            type="button"
            className="remembrance-modal-nav remembrance-modal-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="remembrance-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="remembrance-modal-image-wrapper">
              <img
                src={getImageUrl(selectedImage.file)}
                alt={selectedImage.title}
                className="remembrance-modal-image"
              />
            </div>

            <div className="remembrance-modal-caption">
              <p className="remembrance-modal-number">
                {selectedIndex + 1} / {remembranceImages.length}
              </p>

              <h2>{selectedImage.title}</h2>
            </div>
          </div>

          <button
            type="button"
            className="remembrance-modal-nav remembrance-modal-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}