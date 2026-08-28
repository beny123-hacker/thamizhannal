"use client";

import { useState } from "react";
import Image from "next/image";
import BookReader from "./BookReader";

type Book = {
  id: number;
  title: string;
  englishTitle: string;
  author: string;
  description: string;
  cover: string;
  pdf: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "சோதனை நூல்",
    englishTitle: "Test Book",
    author: "தமிழண்ணல்",
    description:
      "தமிழண்ணல் அவர்களின் நூல்களை டிஜிட்டல் வடிவில் படிக்க உருவாக்கப்பட்ட நூலகம்.",
    cover: "/books/covers/test-book.jpg",
    pdf: "/books/pdf/test-book.pdf",
  },
];

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  if (selectedBook) {
    return (
      <div className="min-h-screen bg-[#f4efe3]">
        <div className="border-b border-[#cdbfa7] bg-[#ebe3d2]">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
                Digital Library
              </p>

              <h1 className="mt-1 font-serif text-2xl font-extrabold text-[#273943]">
                {selectedBook.title}
              </h1>
            </div>

            <button
              type="button"
              onClick={() => setSelectedBook(null)}
              className="border border-[#8b3f3f] px-4 py-2 text-xs font-bold text-[#8b3f3f] transition hover:bg-[#8b3f3f] hover:text-white"
            >
              ← நூல்கள் பட்டியலுக்கு
            </button>
          </div>
        </div>

        <BookReader
          pdfUrl={selectedBook.pdf}
          title={selectedBook.title}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4efe3]">
      {/* HERO */}
      <section className="border-b border-[#cdbfa7] bg-[#ebe3d2]">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#8a6636]">
            Digital Library
          </p>

          <h1 className="mt-4 font-serif text-4xl font-extrabold text-[#273943] md:text-5xl">
            நூல்கள்
          </h1>

          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b3f3f]">
            Books & Publications
          </p>

          <div className="mx-auto mt-4 h-1 w-16 bg-[#8b3f3f]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-[#62594f]">
            மூதறிஞர் தமிழண்ணல் அவர்களின் நூல்கள் மற்றும் ஆய்வுகளை
            டிஜிட்டல் வடிவில் படிக்கலாம்.
          </p>
        </div>
      </section>

      {/* BOOK LIST */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              நூலகம்
            </span>

            <div className="h-px flex-1 bg-[#c8b99e]" />
          </div>

          <h2 className="mt-3 font-serif text-3xl font-extrabold text-[#273943]">
            கிடைக்கக்கூடிய நூல்கள்
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.id}
              className="group overflow-hidden border border-[#c9bba3] bg-[#f8f3e8] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#d8cdb9]">
               <Image
                src={book.cover}
                alt={book.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="eager"
                className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8a6636]">
                  {book.englishTitle}
                </p>

                <h3 className="mt-2 font-serif text-2xl font-extrabold text-[#273943]">
                  {book.title}
                </h3>

                <p className="mt-1 text-xs font-bold text-[#8b3f3f]">
                  {book.author}
                </p>

                <p className="mt-4 text-sm font-medium leading-6 text-[#62594f]">
                  {book.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedBook(book)}
                  className="mt-5 w-full border border-[#273943] bg-[#273943] px-4 py-3 text-xs font-bold text-[#f5eddd] transition hover:bg-[#8b3f3f]"
                >
                  நூலைப் படிக்க →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}