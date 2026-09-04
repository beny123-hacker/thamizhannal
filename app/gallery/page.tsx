"use client";

import { useEffect, useState } from "react";
import "./page.css";

type GalleryImage = {
  id: number;
  file: string;
  caption?: string;
};

type GalleryCategory = {
  id: number;
  titleTamil: string;
  titleEnglish: string;
  folder: string;
  images: GalleryImage[];
};

const SUPABASE_BASE_URL =
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal";

const GALLERY_FOLDER = "gallery";

/* =====================================================
   IMAGE URL
===================================================== */

const getImageUrl = (folder: string, file: string) => {
  return `${SUPABASE_BASE_URL}/${GALLERY_FOLDER}/${encodeURIComponent(
    folder
  )}/${encodeURIComponent(file)}`;
};

/* =====================================================
   GALLERY CATEGORIES
===================================================== */

const galleryCategories: GalleryCategory[] = [
  {
    id: 1,
    titleTamil: "ஆரம்பகால வாழ்வு",
    titleEnglish: "Early Life",
    folder: "Early life",
    images: [
      { id: 1, file: "1.jpg", caption: "திரு.வி.க, மு.வ, தமிழண்ணல் — வாழ்நாள் முழுவதும் போற்றிய ஆசான்களுடன்" },
      { id: 2, file: "2.jpg", caption: "இளமைப் பருவம் — கவிஞர் முடியரசனுடன் சில காட்சிகள்" },
      { id: 3, file: "3.jpg", caption: "" },
    ],
  },

  {
    id: 2,
    titleTamil: "கல்லூரி வாழ்வு",
    titleEnglish: "College Life",
    folder: "College life",
    images: [
      { id: 1, file: "1.jpg", caption: "தியாகராசர் கல்லூரி பருவம்" },
      { id: 2, file: "2.jpg", caption: "தியாகராசர் கல்லூரி — அறிஞர் மு.வ அவர்களின் கடிதத்துடன்" },
      { id: 3, file: "3.jpg", caption: "" },
      { id: 4, file: "4.jpg", caption: "" },
    ],
  },

  {
    id: 3,
    titleTamil: "சப்பான் பயணம்",
    titleEnglish: "Japan Journey",
    folder: "Travel to japan",
    images: [
      { id: 1, file: "1.jpg", caption: "சப்பான் பயணம் — தமிழ் மாணவர் டகனோபு டகஹஷி குடும்பத்துடன்" },
      { id: 2, file: "2.jpg", caption: "" },
      { id: 3, file: "3.jpg", caption: "" },
    ],
  },

  {
    id: 4,
    titleTamil: "விருதுகள்",
    titleEnglish: "Awards",
    folder: "Awards",
    images: [
      { id: 1, file: "1.jpg", caption: "கலைஞர் அவர்களிடமிருந்து பொற்கிழி விருது" },
      { id: 2, file: "2.jpg", caption: "நல்லாசிரியர் விருது" },
      { id: 3, file: "3.jpg", caption: "தமிழ்க்குடிமகன், சோமலே, சிறுவர் கவிஞர் அழ.வள்ளியப்பா ஆகியோருடன் மேடையில்" },
      { id: 4, file: "4.jpg", caption: "திரு.வி.க. விருது — கலைஞர், அன்பழகன், தமிழ்க்குடிமகன் ஆகியோருடன்" },
      { id: 5, file: "5.jpg", caption: "திரு.வி.க. விருது" },
    ],
  },

  {
    id: 5,
    titleTamil: "மணி விழா",
    titleEnglish: "Mani Vizha",
    folder: "Bell festival",
    images: [
      { id: 1, file: "1.jpg", caption: "மணி விழா கொண்டாட்டம்" },
      { id: 2, file: "2.jpg", caption: "" },
      { id: 3, file: "3.jpg", caption: "" },
      { id: 4, file: "4.jpg", caption: "ம.கோ.ரா. விருது வழங்கும் நிகழ்ச்சி" },
    ],
  },

  {
    id: 6,
    titleTamil: "அமெரிக்கா பயணம்",
    titleEnglish: "Journey to America",
    folder: "Travel to america",
    images: [
      { id: 1, file: "1.jpg", caption: "" },
      { id: 2, file: "2.jpg", caption: "" },
      { id: 3, file: "3.jpg", caption: "" },
      { id: 4, file: "4.jpg", caption: "" },
    ],
  },

  {
    id: 7,
    titleTamil: "தமிழ்வழிக் கல்வி",
    titleEnglish: "Tamil Medium Education",
    folder: "Tamil medium education",
    images: [
      { id: 1, file: "1.jpg", caption: "" },
      { id: 2, file: "2.jpg", caption: "" },
      { id: 3, file: "3.jpg", caption: "" },
      { id: 4, file: "4.jpg", caption: "" },
      { id: 5, file: "5.jpg", caption: "" },
      { id: 6, file: "6.jpg", caption: "" },
    ],
  },

  {
    id: 8,
    titleTamil: "சான்றோர் பேரவை",
    titleEnglish: "Scholars' Forum",
    folder: "Council of scholars",
    images: [
      { id: 1, file: "1.jpg", caption: "" },
    ],
  },

  {
    id: 9,
    titleTamil: "நூல் வெளியீடுகள்",
    titleEnglish: "Book Releases",
    folder: "Book publications",
    images: [
      { id: 1, file: "1.jpg", caption: "நீதிபதி அ.ர. லட்சுமண், மணிமொழியன், அமைச்சர் களிமுத்து, பேரா. ரா.மோகன் ஆகியோருடன்" },
      { id: 2, file: "2.jpg", caption: "" },
      { id: 3, file: "3.jpg", caption: "" },
      { id: 4, file: "4.jpg", caption: "" },
      { id: 5, file: "5.jpg", caption: "கலைஞரின் தொல்காப்பிய பூங்கா நூல் வெளியீடு" },
      { id: 6, file: "6.jpg", caption: "" },
      { id: 7, file: "7.jpg", caption: "குடியரசுத் தலைவர் அப்துல் கலாம், அறிஞர் இளங்குமரன் ஆகியோருடன் சங்க இலக்கிய நூல்கள் வெளியீடு" },
      { id: 8, file: "8.jpg", caption: "12 நூல்கள் வெளியீடு" },
      { id: 9, file: "9.jpg", caption: "12 நூல்கள் வெளியீடு" },
      { id: 10, file: "10.jpg", caption: "சுயசரிதை 'மனதுக்கு மனம்' நூல் வெளியீடு" },
      { id: 11, file: "11.jpg", caption: "" },
    ],
  },

  {
    id: 10,
    titleTamil: "உயர் விருதுகள்",
    titleEnglish: "High Honours",
    folder: "High Awards",
    images: [
      { id: 1, file: "1.jpg", caption: "இராமசாமி நினைவுப் பல்கலைக்கழகம் — பாரிவேந்தர் பைந்தமிழ் விருது" },
      { id: 2, file: "2.jpg", caption: "இந்திய குடியரசுத் தலைவரிடமிருந்து தொல்காப்பியர் விருது" },
      { id: 3, file: "3.jpg", caption: "" },
      { id: 4, file: "4.jpg", caption: "" },
      { id: 5, file: "5.jpg", caption: "" },
    ],
  },

  {
    id: 11,
    titleTamil: "உலக தமிழ் விருது",
    titleEnglish: "World Tamil Award",
    folder: "World tamil awards",
    images: [
      { id: 1, file: "1.jpg", caption: "உலகத் தமிழ் மன்றம் — உலகத் தமிழ் விருது" },
      { id: 2, file: "2.jpg", caption: "" },
      { id: 3, file: "3.jpg", caption: "" },
      { id: 4, file: "4.jpg", caption: "" },
    ],
  },
];

/* =====================================================
   FLATTEN IMAGES FOR MODAL NAVIGATION
===================================================== */

type FlatImage = {
  categoryTamil: string;
  categoryEnglish: string;
  folder: string;
  image: GalleryImage;
};

const allImages: FlatImage[] = galleryCategories.flatMap((category) =>
  category.images.map((image) => ({
    categoryTamil: category.titleTamil,
    categoryEnglish: category.titleEnglish,
    folder: category.folder,
    image,
  }))
);

/* =====================================================
   PAGE
===================================================== */

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? allImages[selectedIndex] : null;

  const openImage = (folder: string, imageId: number) => {
    const index = allImages.findIndex(
      (item) =>
        item.folder === folder &&
        item.image.id === imageId
    );

    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === allImages.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? allImages.length - 1
        : selectedIndex - 1
    );
  };

  /* =====================================================
     KEYBOARD NAVIGATION
  ===================================================== */

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
    <main className="gallery-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="gallery-hero">
        <div className="gallery-hero-content">

          <p className="gallery-kicker">
            PHOTO GALLERY
          </p>

          <h1>
            வாழ்க்கைப் பயணம்
          </h1>

          <div className="gallery-divider" />

          <p className="gallery-english-title">
            Life in Pictures
          </p>

          <p className="gallery-credit">
            நன்றி: திரு. சுப்பு கணேசன் (ஒளிப்படங்கள்)
          </p>

          <p className="gallery-instruction">
            படங்களை சொடுக்கி பெரிதாகப் பாருங்கள்.
            <span>
              (Click any photo to enlarge)
            </span>
          </p>

        </div>
      </section>


      {/* =================================================
          CATEGORIES
      ================================================= */}

      <section className="gallery-content">

        {galleryCategories.map((category) => (

          <section
            key={category.id}
            className="gallery-category"
          >

            <div className="gallery-category-header">

              <h2>
                {category.titleTamil}
              </h2>

              <p>
                {category.titleEnglish}
              </p>

            </div>


            <div className="gallery-grid">

              {category.images.map((image) => {

                const imageUrl = getImageUrl(
                  category.folder,
                  image.file
                );

                return (

                  <button
                    key={image.id}
                    type="button"
                    className="gallery-card"
                    onClick={() =>
                      openImage(
                        category.folder,
                        image.id
                      )
                    }
                  >

                    <div className="gallery-image-wrapper">

                      <img
                        src={imageUrl}
                        alt={
                          image.caption ||
                          `${category.titleEnglish} ${image.id}`
                        }
                        className="gallery-image"
                        loading="lazy"
                      />


                      {/* Show overlay only when caption exists */}

                      {image.caption && (
                        <div className="gallery-image-caption">

                          <span>
                            {image.caption}
                          </span>

                        </div>
                      )}


                      <div className="gallery-image-hover">
                        <span>
                          பெரிதாக்க ↗
                        </span>
                      </div>

                    </div>

                  </button>

                );
              })}

            </div>

          </section>

        ))}

      </section>


      {/* =================================================
          IMAGE MODAL
      ================================================= */}

      {selectedImage &&
        selectedIndex !== null && (

          <div
            className="gallery-modal"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={
              selectedImage.image.caption ||
              selectedImage.categoryEnglish
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              className="gallery-modal-close"
              onClick={closeModal}
              aria-label="Close image"
            >
              ×
            </button>


            {/* PREVIOUS */}

            <button
              type="button"
              className="
                gallery-modal-nav
                gallery-modal-prev
              "
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              aria-label="Previous image"
            >
              ←
            </button>


            {/* MODAL CONTENT */}

            <div
              className="gallery-modal-content"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <div className="gallery-modal-image-wrapper">

                <img
                  src={getImageUrl(
                    selectedImage.folder,
                    selectedImage.image.file
                  )}
                  alt={
                    selectedImage.image.caption ||
                    selectedImage.categoryEnglish
                  }
                  className="gallery-modal-image"
                />

              </div>


              <div className="gallery-modal-caption">

                <p className="gallery-modal-number">

                  {selectedIndex + 1}
                  {" / "}
                  {allImages.length}

                </p>


                <p className="gallery-modal-category">

                  {selectedImage.categoryTamil}

                </p>


                {selectedImage.image.caption && (

                  <h2>

                    {
                      selectedImage.image.caption
                    }

                  </h2>

                )}

              </div>

            </div>


            {/* NEXT */}

            <button
              type="button"
              className="
                gallery-modal-nav
                gallery-modal-next
              "
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