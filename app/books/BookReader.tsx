"use client";

import {
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";

import HTMLFlipBook from "react-pageflip";

import "./book-reader.css";

type PdfPageProps = {
  image: string;
  pageNumber: number;
};

type NavigationBook = {
  title: string;
};

type BookReaderProps = {
  pdfUrl: string;
  title: string;
  englishTitle: string;
  author: string;
  cover: string;

  previousBook?: NavigationBook | null;
  nextBook?: NavigationBook | null;

  onPrevious?: () => void;
  onNext?: () => void;
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
  englishTitle,
  author,
  cover,
  previousBook,
  nextBook,
  onPrevious,
  onNext,
}: BookReaderProps) {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const flipBookRef = useRef<any>(null);

  // Sync fullscreen state with native browser events (including ESC key exit)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const activeElement =
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement;
      setIsFullscreen(Boolean(activeElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        const el = containerRef.current as any;
        if (el?.requestFullscreen) {
          try {
            await el.requestFullscreen();
          } catch {
            // Graceful fallback for environments with restricted fullscreen API (e.g. iOS Safari)
            setIsFullscreen(true);
          }
        } else if (el?.webkitRequestFullscreen) {
          try {
            await el.webkitRequestFullscreen();
          } catch {
            setIsFullscreen(true);
          }
        } else {
          setIsFullscreen(true);
        }
      } else {
        const doc = document as any;
        if (doc.fullscreenElement || doc.webkitFullscreenElement) {
          if (doc.exitFullscreen) {
            await doc.exitFullscreen();
          } else if (doc.webkitExitFullscreen) {
            await doc.webkitExitFullscreen();
          }
        }
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
      setIsFullscreen((prev) => !prev);
    }
  };

  // Support ESC key to exit fullscreen in all environments
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  useEffect(() => {
    let isMounted = true;

    const loadPdf = async () => {
      try {
        setLoading(true);
        setErrorMessage("");
        setPages([]);
        setCurrentPage(1);

        const pdfjsLib = await import(
          "pdfjs-dist/legacy/build/pdf.mjs"
        );

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/legacy/build/pdf.worker.min.mjs`;

        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
        });

        const pdf = await loadingTask.promise;

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

          await (page.render as any)({
            canvasContext: context,
            viewport,
            canvas,
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

  // Robust Scroll Lock & Anchor during page flips
  const scrollLockRef = useRef<{
    active: boolean;
    targetY: number;
    timerId: any;
    rafId: any;
  }>({
    active: false,
    targetY: 0,
    timerId: null,
    rafId: null,
  });

  const lockScrollPosition = () => {
    if (isFullscreen) return;
    const currentY = window.scrollY;

    if (scrollLockRef.current.timerId) {
      clearTimeout(scrollLockRef.current.timerId);
    }
    if (scrollLockRef.current.rafId) {
      cancelAnimationFrame(scrollLockRef.current.rafId);
    }

    scrollLockRef.current.active = true;
    scrollLockRef.current.targetY = currentY;

    const startTime = performance.now();
    const DURATION = 1200; // Covers 900ms flippingTime + state update + DOM settlement

    const maintainLock = () => {
      if (!scrollLockRef.current.active) return;
      const elapsed = performance.now() - startTime;

      if (Math.abs(window.scrollY - scrollLockRef.current.targetY) > 1) {
        window.scrollTo({
          top: scrollLockRef.current.targetY,
          behavior: "instant" as ScrollBehavior,
        });
      }

      if (elapsed < DURATION) {
        scrollLockRef.current.rafId = requestAnimationFrame(maintainLock);
      } else {
        scrollLockRef.current.active = false;
      }
    };

    scrollLockRef.current.rafId = requestAnimationFrame(maintainLock);

    scrollLockRef.current.timerId = setTimeout(() => {
      scrollLockRef.current.active = false;
    }, DURATION + 100);
  };

  const nextPage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    lockScrollPosition();
    flipBookRef.current
      ?.pageFlip()
      ?.flipNext();
  };

  const previousPage = (e?: React.MouseEvent) => {
    e?.preventDefault();
    lockScrollPosition();
    flipBookRef.current
      ?.pageFlip()
      ?.flipPrev();
  };

  return (
    <section
      ref={containerRef}
      className={`book-reader ${isFullscreen ? "is-fullscreen" : ""}`}
    >
      {/* FULLSCREEN TOPBAR (Active only in fullscreen mode) */}
      {isFullscreen && (
        <div className="book-reader-fullscreen-topbar">
          <div className="fullscreen-topbar-title">
            <span className="fullscreen-book-title">{title}</span>
            {englishTitle && (
              <span className="fullscreen-book-subtitle">{englishTitle}</span>
            )}
          </div>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="fullscreen-topbar-close"
            aria-label="வெளியேறு முழுத்திரை"
          >
            ✕ வெளியேறு முழுத்திரை
          </button>
        </div>
      )}

      {/* BOOK READER HEADER (Hidden in fullscreen mode via CSS) */}
      <div className="book-reader-header">
        <p className="book-reader-label">
          தமிழண்ணல் நூலகம்
        </p>

        <p>
          பக்கத்தை இழுத்து அல்லது கீழே உள்ள
          பொத்தான்களைப் பயன்படுத்தி படிக்கலாம்.
        </p>
      </div>

      {/* BOOK AREA */}
      <div className="book-reader-content">

        {loading && (
          <div className="book-loading">
            <div className="book-loading-spinner" />

            <p>
              நூல் திறக்கப்படுகிறது...
            </p>
          </div>
        )}

        {!loading && !pages.length && (
          <div className="book-error">
            <h2>
              நூலை திறக்க முடியவில்லை
            </h2>

            <p>
              PDF file could not be loaded.
            </p>

            {errorMessage && (
              <code>
                {errorMessage}
              </code>
            )}
          </div>
        )}

        {!loading && pages.length > 0 && (
          <>
            {/* FLIP BOOK */}
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
                clickEventForward={true}
                swipeDistance={30}
                renderOnlyPageLengthChange={true}
                onFlip={(event) => {
                  if (!scrollLockRef.current.active && !isFullscreen) {
                    lockScrollPosition();
                  }
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

            {/* PAGE CONTROLS */}
            <div className="book-reader-controls">
              <button
                type="button"
                onClick={previousPage}
                onMouseDown={(e) => e.preventDefault()}
                disabled={currentPage <= 1}
                aria-label="முந்தைய பக்கம்"
              >
                ← முந்தைய பக்கம்
              </button>

              <div className="book-page-counter">
                <span>
                  {currentPage}
                </span>

                <span className="counter-divider">
                  /
                </span>

                <span>
                  {pages.length}
                </span>
              </div>

              <button
                type="button"
                onClick={nextPage}
                onMouseDown={(e) => e.preventDefault()}
                disabled={currentPage >= pages.length}
                aria-label="அடுத்த பக்கம்"
              >
                அடுத்த பக்கம் →
              </button>

              {!isFullscreen && (
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  onMouseDown={(e) => e.preventDefault()}
                  className="fullscreen-toggle-button"
                  aria-label="முழுத்திரையில் பார்க்க"
                >
                  ⛶ முழுத்திரையில் பார்க்க
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {/* PERMANENT PREVIOUS / NEXT BOOK NAVIGATION */}
      <div className="mt-10 border-t border-[#c9bba3] pt-8">
        <div className="grid gap-4 sm:grid-cols-2">

          {/* PREVIOUS BOOK */}
          <button
            type="button"
            onClick={onPrevious}
            disabled={!previousBook}
            className={`group flex min-h-[100px] w-full items-center gap-4 border p-4 text-left transition duration-300 ${
              previousBook
                ? "border-[#c9bba3] bg-[#f8f3e8] hover:border-[#8b3f3f] hover:bg-[#ebe3d2]"
                : "cursor-not-allowed border-[#d8cdb9] bg-[#eee8dc] opacity-60"
            }`}
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center border text-lg font-bold transition ${
                previousBook
                  ? "border-[#8b3f3f] text-[#8b3f3f] group-hover:bg-[#8b3f3f] group-hover:text-white"
                  : "border-[#b9afa0] text-[#9c9285]"
              }`}
            >
              ←
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a6636]">
                முந்தைய நூல்
              </p>

              <p className="mt-2 line-clamp-2 font-serif text-sm font-extrabold leading-5 text-[#273943]">
                {previousBook
                  ? previousBook.title
                  : "முந்தைய நூல் இல்லை"}
              </p>
            </div>
          </button>

          {/* NEXT BOOK */}
          <button
            type="button"
            onClick={onNext}
            disabled={!nextBook}
            className={`group flex min-h-[100px] w-full items-center justify-between gap-4 border p-4 text-right transition duration-300 ${
              nextBook
                ? "border-[#c9bba3] bg-[#f8f3e8] hover:border-[#8b3f3f] hover:bg-[#ebe3d2]"
                : "cursor-not-allowed border-[#d8cdb9] bg-[#eee8dc] opacity-60"
            }`}
          >
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a6636]">
                அடுத்த நூல்
              </p>

              <p className="mt-2 line-clamp-2 font-serif text-sm font-extrabold leading-5 text-[#273943]">
                {nextBook
                  ? nextBook.title
                  : "அடுத்த நூல் இல்லை"}
              </p>
            </div>

            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center border text-lg font-bold transition ${
                nextBook
                  ? "border-[#8b3f3f] text-[#8b3f3f] group-hover:bg-[#8b3f3f] group-hover:text-white"
                  : "border-[#b9afa0] text-[#9c9285]"
              }`}
            >
              →
            </div>
          </button>

        </div>
      </div>

    </section>
  );
}