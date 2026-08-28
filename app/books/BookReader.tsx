"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";

import HTMLFlipBook from "react-pageflip";

import "./book-reader.css";

type BookReaderProps = {
  pdfUrl: string;
  title: string;
};

type PdfPageProps = {
  image: string;
  pageNumber: number;
};

const PdfPage = forwardRef<HTMLDivElement, PdfPageProps>(
  ({ image, pageNumber }, ref) => {
    return (
      <div ref={ref} className="pdf-book-page">
        <img
          src={image}
          alt={`Page ${pageNumber}`}
          draggable={false}
        />

        <div className="page-number">
          {pageNumber}
        </div>
      </div>
    );
  }
);

PdfPage.displayName = "PdfPage";

export default function BookReader({
  pdfUrl,
  title,
}: BookReaderProps) {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const flipBookRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    const loadPdf = async () => {
      try {
        setLoading(true);
        setErrorMessage("");
        setPages([]);

        // Load PDF.js only in the browser.
        const pdfjsLib = await import(
          "pdfjs-dist/legacy/build/pdf.mjs"
        );

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/legacy/build/pdf.worker.min.mjs`;

        console.log("Loading PDF:", pdfUrl);

        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
        });

        const pdf = await loadingTask.promise;

        console.log(
          "PDF loaded successfully. Total pages:",
          pdf.numPages
        );

        const renderedPages: string[] = [];

        for (
          let pageNumber = 1;
          pageNumber <= pdf.numPages;
          pageNumber++
        ) {
          const page = await pdf.getPage(pageNumber);

          const viewport = page.getViewport({
            scale: 1.5,
          });

          const canvas = document.createElement("canvas");

          const context = canvas.getContext("2d");

          if (!context) {
            continue;
          }

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({
            canvasContext: context,
            viewport,
          }).promise;

          renderedPages.push(
            canvas.toDataURL(
              "image/jpeg",
              0.92
            )
          );
        }

        if (isMounted) {
          setPages(renderedPages);
          setCurrentPage(1);
        }
      } catch (error) {
        console.error("Error loading PDF:", error);

        if (isMounted) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Unknown error occurred"
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isMounted = false;
    };
  }, [pdfUrl]);

  const nextPage = () => {
    flipBookRef.current
      ?.pageFlip()
      ?.flipNext();
  };

  const previousPage = () => {
    flipBookRef.current
      ?.pageFlip()
      ?.flipPrev();
  };

  if (loading) {
    return (
      <section className="book-reader">
        <div className="book-loading">
          <div className="book-loading-spinner" />

          <p>நூல் திறக்கப்படுகிறது...</p>
        </div>
      </section>
    );
  }

  if (!pages.length) {
    return (
      <section className="book-reader">
        <div className="book-error">
          <h2>நூலை திறக்க முடியவில்லை</h2>

          <p>PDF file could not be loaded.</p>

          {errorMessage && (
            <code>{errorMessage}</code>
          )}

          <p className="pdf-path">
            PDF Path:
            <br />

            <strong>
              {pdfUrl}
            </strong>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="book-reader">
      <div className="book-reader-header">
        <p className="book-reader-label">
          தமிழண்ணல் நூலகம்
        </p>

        <h1>{title}</h1>

        <p>
          பக்கத்தை இழுத்து அல்லது கீழே உள்ள
          பொத்தான்களைப் பயன்படுத்தி படிக்கலாம்.
        </p>
      </div>

      <div className="flipbook-wrapper">
        <HTMLFlipBook
          ref={flipBookRef}
          width={320}
          height={460}
          size="stretch"
          minWidth={280}
          maxWidth={600}
          minHeight={400}
          maxHeight={850}
          showCover={true}
          mobileScrollSupport={false}
          useMouseEvents={true}
          swipeDistance={30}
          onFlip={(event) => {
            setCurrentPage(event.data + 1);
          }}
          className="thamizhannal-flipbook"
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={900}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {pages.map((image, index) => (
            <PdfPage
              key={index}
              image={image}
              pageNumber={index + 1}
            />
          ))}
        </HTMLFlipBook>
      </div>

      <div className="book-reader-controls">
        <button
          type="button"
          onClick={previousPage}
          disabled={currentPage <= 1}
        >
          ← முந்தைய பக்கம்
        </button>

        <div className="book-page-counter">
          <span>{currentPage}</span>

          <span className="counter-divider">
            /
          </span>

          <span>{pages.length}</span>
        </div>

        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage >= pages.length}
        >
          அடுத்த பக்கம் →
        </button>
      </div>
    </section>
  );
}