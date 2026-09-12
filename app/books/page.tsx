"use client";

import { useState } from "react";
import Image from "next/image";
import BookReader from "./BookReader";

type Book = {
  id: number;
  category: string;
  title: string;
  englishTitle: string;
  author: string;
  cover: string;
  pdf: string;
};

type Category = {
  name: string;
  count: number;
  books: Book[];
};

const AUTHOR = "மூதறிஞர் இராம. பெரியகருப்பன் (தமிழண்ணல்)";

const books: Book[] = [
  // =========================================================
  // 1. இலக்கியம் - 26
  // =========================================================
  {
    id: 1,
    category: "இலக்கியம்",
    title: "பரிசில் வாழ்க்கை",
    englishTitle: "Life of Gifts",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/1. பரிசில் வாழ்க்கை.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/பரிசில் வாழ்க்கை.pdf",
  },
  {
    id: 2,
    category: "இலக்கியம்",
    title: "சங்க இலக்கிய ஒப்பீடு",
    englishTitle: "Sangam Literature — Comparative Study",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/2. சங்க இலக்கிய ஒப்பீடு - இலக்கியக் வகைகள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/சங்க இலக்கிய ஒப்பீடு.pdf",
  },
  {
    id: 3,
    category: "இலக்கியம்",
    title: "சங்க இலக்கியத் தொன்மை அகச்சான்றுகள்",
    englishTitle: "Ancient Evidence in Sangam Literature",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/3. சங்க இலக்கிய தொன்மை அகச்சான்றுகள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/சங்க இலக்கியத் தொன்மை அகச்சான்றுகள்.pdf",
  },
  {
    id: 4,
    category: "இலக்கியம்",
    title: "சங்க மரபு",
    englishTitle: "Sangam Tradition",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/4. சங்க மரபு.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/சங்க மரபு.pdf",
  },
  {
    id: 5,
    category: "இலக்கியம்",
    title: "அகநானூற்றுக் காட்சிகள்",
    englishTitle: "Scenes from Agananooru",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/5. அகநானூற்றுக் காட்சிகள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/அகநானூற்றுக் காட்சிகள்.pdf",
  },
  {
    id: 6,
    category: "இலக்கியம்",
    title: "குறிஞ்சிப் பாட்டு",
    englishTitle: "Kurinjippattu — Literary Analysis",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/6. குறிஞ்சிப்பாட்டு - இலக்கியத் திறனாய்வு விளக்கம்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/குறிஞ்சிப் பாட்டு.pdf",
  },
  {
    id: 7,
    category: "இலக்கியம்",
    title: "குறுந்தொகை அரும்புகள்",
    englishTitle: "Kurunthogai — Buds",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/7. குறுந்தொகை அரும்புகள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/குறுந்தொகை அரும்புகள்.pdf",
  },
  {
  id: 8,
  category: "இலக்கியம்",
  title: "குறுந்தொகை அறிமுகம்",
  englishTitle: "Kurunthogai Introduction – Emotional Paintings",
  author: AUTHOR ,
  cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/literature/Kurunthogai Introduction Emotional Paintings.jpg",
  pdf: "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/literature/Kurunthogai Introduction Emotional Paintings.pdf",
},
  {
    id: 9,
    category: "இலக்கியம்",
    title: "குறுந்தொகை விருந்து",
    englishTitle: "Kurunthogai Feast — Ruby Gems of the Heart",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/literature/Kurunthogai%20Feast%20Ruby%20Gems%20of%20the%20Heart.jpg",
  pdf: "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/literature/Kurunthogai Feast Ruby Gems of the Heart.pdf",
  },
  {
    id: 10,
    category: "இலக்கியம்",
    title: "குறுந்தொகைச் செல்வம்",
    englishTitle: "Kurunthogai Wealth — Tamil Values of Life",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/literature/Kurunthogai%20Wealth%20Tamil%20Values%20of%20Life.jpg",

pdf: "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/literature/Kurunthogai Wealth Tamil Values of Life.pdf",
  },
  {
    id: 11,
    category: "இலக்கியம்",
    title: "நற்றிணை மலர்கள்",
    englishTitle: "Natrinai Flowers",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/11. நற்றிணை மலர்கள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/நற்றிணை மலர்கள்.pdf",
  },
  {
    id: 12,
    category: "இலக்கியம்",
    title: "புறநாநூற்றுக் குறும்படங்கள்",
    englishTitle: "Short Films of Purananuru",
    author: AUTHOR,
    cover:
      "/books/covers/1. இலக்கியம்/12. புறநாநூற்றுக் குறும்படங்கள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/புறநாநூற்றுக் குறும்படங்கள்.pdf",
  },
  {
    id: 13,
    category: "இலக்கியம்",
    title: "கபிலர் பாடல்களில் காட்சி உருவகம்",
    englishTitle: "Visual Metaphor in Kapilar's Songs",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/literature/Visual%20Metaphor%20in%20Kapilar%27s%20Songs.jpg",

pdf: "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/literature/Visual Metaphor in Kapilar's Songs.pdf",
  },
  {
    id: 14,
    category: "இலக்கியம்",
    title: "ஒப்பிலக்கிய அறிமுகம்",
    englishTitle: "Introduction to Comparative Literature",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/14. ஒப்பிலக்கிய அறிமுகம்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/ஒப்பிலக்கிய அறிமுகம்.pdf",
  },
  {
    id: 15,
    category: "இலக்கியம்",
    title: "ஒப்பிலக்கியப் பார்வையில் சங்க இலக்கிய ஒளிச் சுடர்கள்",
    englishTitle: "Sangam Literature through a Comparative Lens",
    author: AUTHOR,
    cover:
      "/books/covers/1. இலக்கியம்/15. ஒப்பிலக்கியப் பார்வையில் சங்க இலக்கிய ஒளிச் சுடர்கள்.jpg",
    pdf:
      "/books/pdf/1.இலக்கியம்/ஒப்பிலக்கியப் பார்வையில் சங்க இலக்கிய ஒளிச் சுடர்கள்.pdf",
  },
  {
    id: 16,
    category: "இலக்கியம்",
    title: "பெருங்கதை அறிமுகம்",
    englishTitle: "Introduction to Perungathai",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/16. பெருங்கதை அறிமுகம்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/பெருங்கதை அறிமுகம்.pdf",
  },
  {
    id: 17,
    category: "இலக்கியம்",
    title: "ஓளவையார்",
    englishTitle: "Avvaiyar",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/17. ஒவையார்-1.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/ஓளவையார்.pdf",
  },
  {
    id: 18,
    category: "இலக்கியம்",
    title: "கம்ப நாடகம்",
    englishTitle: "Kamba Naadagam",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/18. கம்ப நாடகம்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/கம்ப நாடகம்.pdf",
  },
  {
    id: 19,
    category: "இலக்கியம்",
    title: "முடியரசன் கவிதைகள்",
    englishTitle: "Mudiyarasan's Poems",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/19. முடியரசன் கவிதைகள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/முடியரசன் கவிதைகள்.pdf",
  },
  {
    id: 20,
    category: "இலக்கியம்",
    title: "இனிக்கும் இலக்கியம்",
    englishTitle: "Sweet Literature",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/20. இனிக்கும் இலக்கியம்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/இனிக்கும் இலக்கியம்.pdf",
  },
  {
    id: 21,
    category: "இலக்கியம்",
    title: "இலக்கியத்தில் இன்பச் சுவை",
    englishTitle: "The Pleasurable Taste in Literature",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/21. இலக்கியத்தில் இன்பச் சுவை.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/இலக்கியத்தில் இன்பச் சுவை.pdf",
  },
  {
    id: 22,
    category: "இலக்கியம்",
    title: "செம்மொழிப் படைப்பியல்",
    englishTitle: "Classical Language Creativity",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/22. செம்மொழிப் படைப்பியல்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/செம்மொழிப் படைப்பியல்.pdf",
  },
  {
    id: 23,
    category: "இலக்கியம்",
    title: "செவ்விலக்கியச் சிந்தனைகள்",
    englishTitle: "Classical Literary Thoughts",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/23. செவ்விலக்கியச் சிந்தனைகள்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/செவ்விலக்கியச் சிந்தனைகள்.pdf",
  },
  {
    id: 24,
    category: "இலக்கியம்",
    title: "திருமுறைகள் உணர்த்தும் மறைபொருள் உண்மைகள்",
    englishTitle: "Hidden Truths in Thirumurai",
    author: AUTHOR,
    cover:
      "/books/covers/1. இலக்கியம்/24. திருமுறைகள் உணர்த்தும் மறைபொருள் உண்மைகள்.jpg",
    pdf:
      "/books/pdf/1.இலக்கியம்/திருமுறைகள் உணர்த்தும் மறைபொருள் உண்மைகள்.pdf",
  },
  {
    id: 25,
    category: "இலக்கியம்",
    title: "புதிய நோக்கில் திருவாசகம்",
    englishTitle: "Thiruvaasagam — A Fresh Perspective",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/25. புதிய நோக்கில் திருவாசகம்.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/புதிய நோக்கில் திருவாசகம்.pdf",
  },
  {
    id: 26,
    category: "இலக்கியம்",
    title: "உலகத் தமிழிலக்கிய வரலாறு",
    englishTitle: "History of World Tamil Literature",
    author: AUTHOR,
    cover: "/books/covers/1. இலக்கியம்/26. உலகத் தமிழ் இலக்கிய வரலாறு.jpg",
    pdf: "/books/pdf/1.இலக்கியம்/உலகத் தமிழிலக்கிய வரலாறு.pdf",
  },

  // =========================================================
  // 2. தொல்காப்பியம் - 13
  // =========================================================
  {
    id: 27,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியர்",
    englishTitle: "Tholkappiyar",
    author: AUTHOR,
    cover: "/books/covers/2. தொல்காப்பியம்/1. தொல்காப்பியர்.jpg",
    pdf: "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியர்.pdf",
  },
  {
    id: 28,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியம் எழுத்ததிகாரம்",
    englishTitle: "Tholkappiyam — Ezhuthathigaram",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/2. தொல்காப்பியம் எழுத்ததிகாரம்.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியம் எழுத்ததிகாரம்.pdf",
  },
  {
    id: 29,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியம் சொல்லதிகாரம்",
    englishTitle: "Tholkappiyam — Sollathigaram",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/3. தொல்காப்பியம் சொல்லதிகாரம்.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியம் சொல்லதிகாரம்.pdf",
  },
  {
    id: 30,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 1",
    englishTitle: "Tholkappiyam — Porulathigaram Vol. 1",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/4. தொல்காப்பியம் பொருளதிகாரம் தொகுதி 1.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 1.pdf",
  },
  {
    id: 31,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 2",
    englishTitle: "Tholkappiyam — Porulathigaram Vol. 2",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/5. தொல்காப்பியம் பொருளதிகாரம் தொகுதி 2.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 2.pdf",
  },
  {
    id: 32,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 3",
    englishTitle: "Tholkappiyam — Porulathigaram Vol. 3 (Meippattiyal)",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/6. தொல்காப்பியம் மெய்ப்பாட்டியல் உவமையியல் - தொகுதி 3.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 3.pdf",
  },
  {
    id: 33,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 4",
    englishTitle: "Tholkappiyam — Porulathigaram Vol. 4 (Seyyuliyal)",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/7. தொல்காப்பியம் செய்யுளியல் மரபியல் - தொகுதி 4.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியம் பொருளதிகாரம் - தொகுதி 4.pdf",
  },
  {
    id: 34,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியரின் இலக்கியக் கொள்கைகள் - பாகம் 1",
    englishTitle: "Tholkappiyar's Literary Principles — Part 1",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/8. தொல்காப்பியரின் இலக்கியக் கொள்கைகள் - பாகம் 1.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியரின் இலக்கியக் கொள்கைகள் - பாகம் 1.pdf",
  },
  {
    id: 35,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியரின் இலக்கியக் கொள்கைகள் - பாகம் 2",
    englishTitle: "Tholkappiyar's Literary Principles — Part 2",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/9. தொல்காப்பியரின் இலக்கியக் கொள்கைகள் - பாகம் 2.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியரின் இலக்கியக் கொள்கைகள் - பாகம் 2.pdf",
  },
  {
    id: 36,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பிய இலக்கிய இயல்",
    englishTitle: "Tholkappiya Literary Nature",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/10. தொல்காப்பிய இலக்கிய இயல்.jpg",
    pdf: "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பிய இலக்கிய இயல்.pdf",
  },
  {
    id: 37,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியச் சொற் சுவைகள்",
    englishTitle: "Word Tastes of Tholkappiyam",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/Tholkappiyam/Word Tastes of Tholkappiyam.jpg",
pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/Tholkappiyam/Word Tastes of Tholkappiyam.pdf",
  },
  {
    id: 38,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியத் தோற்றம்",
    englishTitle: "The Origins of Tholkappiyam",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/Tholkappiyam/The Origins of Tholkappiyam.jpg",
pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/Tholkappiyam/The Origins of Tholkappiyam.pdf",
  },
  {
    id: 39,
    category: "தொல்காப்பியம்",
    title: "தொல்காப்பியர் விளக்கும் திருமணப் பொருத்தம்",
    englishTitle: "Marriage Compatibility as Explained by Tholkappiyar",
    author: AUTHOR,
    cover:
      "/books/covers/2. தொல்காப்பியம்/13. தொல்காப்பியர் விளக்கும் திருமணப் பொருத்தம்.jpg",
    pdf:
      "/books/pdf/2.தொல்காப்பியம்/தொல்காப்பியர் விளக்கும் திருமணப் பொருத்தம்.pdf",
  },

  // =========================================================
  // 3. திருக்குறள் - 8
  // =========================================================
  {
    id: 40,
    category: "திருக்குறள்",
    title: "திருவள்ளுவர் அருளிய திருக்குறள்",
    englishTitle: "Thirukkural by Thiruvalluvar",
    author: AUTHOR,
    cover:
      "/books/covers/3. திருக்குறள்/1. திருவள்ளுவர் அருளிய திருக்குறள்.jpg",
    pdf:
      "/books/pdf/3.திருக்குறள்/திருவள்ளுவர் அருளிய திருக்குறள்.pdf",
  },
  {
    id: 41,
    category: "திருக்குறள்",
    title: "திருக்குறள் நுண்ணுரை",
    englishTitle: "Thirukkural — Subtle Commentary",
    author: AUTHOR,
    cover: "/books/covers/3. திருக்குறள்/2. திருக்குறள் நுண்ணுரை.jpg",
    pdf: "/books/pdf/3.திருக்குறள்/திருக்குறள் நுண்ணுரை.pdf",
  },
  {
    id: 42,
    category: "திருக்குறள்",
    title: "திருக்குறள் கற்கும் நெறிமுறைகள்",
    englishTitle: "Methods of Studying Thirukkural",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/Thirukkural/Methods of Studying Thirukkural.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/Thirukkural/Methods of Studying Thirukkural.pdf",
  },
  {
    id: 43,
    category: "திருக்குறள்",
    title: "தேடவைக்கும் திருவள்ளுவர்",
    englishTitle: "Thiruvalluvar — Who Makes You Seek",
    author: AUTHOR,
    cover:
      "/books/covers/3. திருக்குறள்/4. தேடவைக்கும் திருவள்ளுவர்.jpg",
    pdf: "/books/pdf/3.திருக்குறள்/தேடவைக்கும் திருவள்ளுவர்.pdf",
  },
  {
    id: 44,
    category: "திருக்குறள்",
    title: "வள்ளுவர் நெறியில் வாழ்வது எப்போது",
    englishTitle: "When Can We Live by Valluvar's Way?",
    author: AUTHOR,
    cover:
      "/books/covers/3. திருக்குறள்/5. வள்ளுவர் நெறியில் வாழ்வது எப்போது.jpg",
    pdf:
      "/books/pdf/3.திருக்குறள்/வள்ளுவர் நெறியில் வாழ்வது எப்போது.pdf",
  },
  {
    id: 45,
    category: "திருக்குறள்",
    title: "வாழ்க்கை வெற்றிக்கு வள்ளுவம்",
    englishTitle: "Valluvar for Life’s Success",
    author: AUTHOR,
    cover:
      "/books/covers/3. திருக்குறள்/6. வாழ்க்கை வெற்றிக்கு வள்ளுவம்.jpg",
    pdf: "/books/pdf/3.திருக்குறள்/வாழ்க்கை வெற்றிக்கு வள்ளுவம்.pdf",
  },
  {
    id: 46,
    category: "திருக்குறள்",
    title: "வாழ்க்கைக்கு ஒளிதரும் வள்ளுவம்",
    englishTitle: "Valluvar — Light for Life",
    author: AUTHOR,
    cover:
      "/books/covers/3. திருக்குறள்/7. வாழ்க்கைக்கு ஒளிதரும் வள்ளுவம்.jpg",
    pdf: "/books/pdf/3.திருக்குறள்/வாழ்க்கைக்கு ஒளிதரும் வள்ளுவம்.pdf",
  },
  {
    id: 47,
    category: "திருக்குறள்",
    title: "இளைஞர் வாழ்வில் திருக்குறள்",
    englishTitle: "Thirukkural in Youth Life",
    author: AUTHOR,
    cover:
      "/books/covers/3. திருக்குறள்/8. இளைஞர் வாழ்வில் திருக்குறள்.jpg",
    pdf: "/books/pdf/3.திருக்குறள்/இளைஞர் வாழ்வில் திருக்குறள்.pdf",
  },

  // =========================================================
  // 4. இலக்கணம் - 2
  // =========================================================
  {
    id: 48,
    category: "இலக்கணம்",
    title: "நன்னூல் எழுத்ததிகாரம்",
    englishTitle: "Nannool — Ezhuthathigaram",
    author: AUTHOR,
   cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/Grammar/Nannool Ezhuthathigaram.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/Grammar/Nannool Ezhuthathigaram.pdf",
  },
  {
    id: 49,
    category: "இலக்கணம்",
    title: "நன்னூல் சொல்லதிகாரம்",
    englishTitle: "Nannool — Sollathigaram",
    author: AUTHOR,
    cover:
      "/books/covers/4. இலக்கணம்/2. நன்னூல் சொல்லதிகாரம்.jpg",
    pdf: "/books/pdf/4.இலக்கணம்/நன்னூல் சொல்லதிகாரம்.pdf",
  },

  // =========================================================
  // 5. உரை - 2
  // =========================================================
  {
    id: 50,
    category: "உரை",
    title: "தண்டியலங்காரம்",
    englishTitle: "Thandiyalankaram",
    author: AUTHOR,
    cover: "/books/covers/5. உரை/1. தண்டியலங்காரம்.jpg",
    pdf: "/books/pdf/5.உரை/தண்டியலங்காரம்.pdf",
  },
  {
    id: 51,
    category: "உரை",
    title: "தமிழ் நான்மறை விளக்கம்",
    englishTitle: "Explanation of Tamil Four Vedas",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/urai/Explanation of Tamil Four Vedas.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/urai/Explanation of Tamil Four Vedas.pdf",
  },

  // =========================================================
  // 6. மொழியியல் - 17
  // =========================================================
  {
    id: 52,
    category: "மொழியியல்",
    title: "சொல் புதிது சுவை புதிது",
    englishTitle: "New Words, New Taste",
    author: AUTHOR,
    cover: "/books/covers/6. மொழியியல்/1. சொல் புதிது சுவை புதிது.jpg",
    pdf: "/books/pdf/6.மொழியியல்/சொல் புதிது சுவை புதிது.pdf",
  },
  {
    id: 53,
    category: "மொழியியல்",
    title: "தமிழில் அடிக்கடி நேரும் பிழைகளும் திருத்தமும்",
    englishTitle: "Common Tamil Errors and Their Corrections",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/2. தமிழில் அடிக்கடி நேரும் பிழைகளும் திருத்தமும்.jpg",
    pdf:
      "/books/pdf/6.மொழியியல்/தமிழில் அடிக்கடி நேரும் பிழைகளும் திருத்தமும்.pdf",
  },
  {
    id: 54,
    category: "மொழியியல்",
    title: "தமிழுக்கு ஆகமங்கள் தடையாகுமா",
    englishTitle: "Will Agamas Be an Obstacle for Tamil?",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/3. தமிழுக்கு ஆகமங்கள் தடையாகுமா.jpg",
    pdf: "/books/pdf/6.மொழியியல்/தமிழுக்கு ஆகமங்கள் தடையாகுமா.pdf",
  },
  {
    id: 55,
    category: "மொழியியல்",
    title: "பேசுவதுபோல் எழுதலாமா",
    englishTitle: "Can We Write as We Speak?",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/4. பேசுவதுபோல் எழுதலாமா - பேச்சுத் தமிழை இகழலாமா.jpg",
    pdf: "/books/pdf/6.மொழியியல்/பேசுவதுபோல் எழுதலாமா.pdf",
  },
  {
    id: 56,
    category: "மொழியியல்",
    title: "பிழை திருத்தும் மனப்பழக்கம்",
    englishTitle: "The Habit of Correcting Errors",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/5. பிழை திருத்தும் மனப்பழக்கம்.jpg",
    pdf: "/books/pdf/6.மொழியியல்/பிழை திருத்தும் மனப்பழக்கம்.pdf",
  },
  {
    id: 57,
    category: "மொழியியல்",
    title: "உரை விளக்கு",
    englishTitle: "The Commentary Lamp",
    author: AUTHOR,
    cover: "/books/covers/6. மொழியியல்/6. உரை விளக்கு.jpg",
    pdf: "/books/pdf/6.மொழியியல்/உரை விளக்கு.pdf",
  },
  {
    id: 58,
    category: "மொழியியல்",
    title: "தமிழ் உயிருள்ள மொழி",
    englishTitle: "Tamil is a Living Language",
    author: AUTHOR,
    cover: "/books/covers/6. மொழியியல்/7. தமிழ் உயிருள்ள மொழி.jpg",
    pdf: "/books/pdf/6.மொழியியல்/தமிழ் உயிருள்ள மொழி.pdf",
  },
  {
    id: 59,
    category: "மொழியியல்",
    title: "தமிழ்த் தவம்",
    englishTitle: "Tamil Devotion",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/8. தமிழ்த் தவம் - ஆக்கப் பணிகள் ஆயிரத்திற்கு ஓர் அறிமுகம்.jpg",
    pdf: "/books/pdf/6.மொழியியல்/தமிழ்த் தவம்.pdf",
  },
  {
    id: 60,
    category: "மொழியியல்",
    title: "உங்கள் தமிழைத் தெரிந்துகொள்ளுங்கள்",
    englishTitle: "Know Your Tamil",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/Moliyiyal/Know Your Tamil.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/Moliyiyal/Know Your Tamil.pdf",
  },
  {
    id: 61,
    category: "மொழியியல்",
    title: "உங்கள் தமிழைத் தெரிந்து கொள்ளுங்கள் (சுருக்கமான வடிவம்)",
    englishTitle: "Know Your Tamil (Abridged)",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/10. உங்கள் தமிழைத் தெரிந்து கொள்ளுங்கள் (சுருக்கமான வடிவம்).jpg",
    pdf:
      "/books/pdf/6.மொழியியல்/உங்கள் தமிழைத் தெரிந்து கொள்ளுங்கள் (சுருக்கமான வடிவம்).pdf",
  },
  {
    id: 62,
    category: "மொழியியல்",
    title: "இனிய தமிழ் மொழியின் இயல்புகள்",
    englishTitle: "The Nature of Sweet Tamil Language",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/11. இனிய தமிழ் மொழியின் இயல்புகள்.jpg",
    pdf:
      "/books/pdf/6.மொழியியல்/இனிய தமிழ் மொழியின் இயல்புகள்.pdf",
  },
  {
    id: 63,
    category: "மொழியியல்",
    title: "இனிய தமிழ் மொழியின் இருவகை வழக்குகள்",
    englishTitle: "Two Types of Usage in Tamil",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/12. இனிய தமிழ் மொழியின் இருவகை வழக்குகள்.jpg",
    pdf:
      "/books/pdf/6.மொழியியல்/இனிய தமிழ் மொழியின் இருவகை வழக்குகள்.pdf",
  },
  {
    id: 64,
    category: "மொழியியல்",
    title: "தமிழ் ஒரு கட்டமைப்புள்ள மொழி",
    englishTitle: "Tamil — A Structured Language",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/13. தமிழ் ஒரு கட்டமைப்புள்ள மொழி.jpg",
    pdf: "/books/pdf/6.மொழியியல்/தமிழ் ஒரு கட்டமைப்புள்ள மொழி.pdf",
  },
  {
    id: 65,
    category: "மொழியியல்",
    title: "தமிழை அறிவோம்! தமிழராய் வாழ்வோம்!",
    englishTitle: "Know Tamil! Live as Tamils!",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/14. தமிழை அறிவோம் தமிழராய் வாழ்வோம்.jpg",
    pdf:
      "/books/pdf/6.மொழியியல்/தமிழை அறிவோம்! தமிழராய் வாழ்வோம்!.pdf",
  },
  {
    id: 66,
    category: "மொழியியல்",
    title: "தமிழ்வழிக் கல்விச் சிந்தனைகள்",
    englishTitle: "Thoughts on Tamil-Medium Education",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/15. தமிழ்வழிக் கல்விச் சிந்தனைகள்.jpg",
    pdf: "/books/pdf/6.மொழியியல்/தமிழ்வழிக் கல்விச் சிந்தனைகள்.pdf",
  },
  {
    id: 67,
    category: "மொழியியல்",
    title: "மழலையர் தமிழக் கல்வியும் தமிழ் வழி உயர் கல்வியும்",
    englishTitle: "Early Tamil Education and Tamil-Medium Higher Education",
    author: AUTHOR,
    cover:
      "/books/covers/6. மொழியியல்/16. மழலையர் தமிழ்க் கல்வியும் தமிழ் வழி உயர் கல்வியும்.jpg",
    pdf:
      "/books/pdf/6.மொழியியல்/மழலையர் தமிழக் கல்வியும் தமிழ் வழி உயர் கல்வியும்.pdf",
  },
  {
    id: 68,
    category: "மொழியியல்",
    title: "மாணிக்கத் தமிழ்",
    englishTitle: "Ruby Tamil",
    author: AUTHOR,
    cover: "/books/covers/6. மொழியியல்/17. மாணிக்கத் தமிழ்.jpg",
    pdf: "/books/pdf/6.மொழியியல்/மாணிக்கத் தமிழ்.pdf",
  },

  // =========================================================
  // 7. ஆய்வு - 5
  // =========================================================
  {
    id: 69,
    category: "ஆய்வு",
    title: "தமிழர் சமயமும் சமஸ்கிருதமும்",
    englishTitle: "Tamil Religion and Sanskrit",
    author: AUTHOR,
    cover:
      "/books/covers/7. ஆய்வு/1. தமிழர் சமயமும் சமஸ்கிருதமும்.jpg",
    pdf: "/books/pdf/7.ஆய்வு/தமிழர் சமயமும் சமஸ்கிருதமும்.pdf",
  },
  {
    id: 70,
    category: "ஆய்வு",
    title: "தமிழரின் வினைக் கோட்பாடு",
    englishTitle: "The Theory of Karma among Tamils",
    author: AUTHOR,
    cover: "/books/covers/7. ஆய்வு/2. தமிழரின் வினைக் கோட்பாடு.jpg",
    pdf: "/books/pdf/7.ஆய்வு/தமிழரின் வினைக் கோட்பாடு.pdf",
  },
  {
    id: 71,
    category: "ஆய்வு",
    title: "சிவ வழிபாட்டின் தோற்றமும் வளர்ச்சியும்",
    englishTitle: "Origin and Growth of Shiva Worship",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/Research/Origin and Growth of Shiva Worship.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/Research/Origin and Growth of Shiva Worship.pdf",
  },
  {
    id: 72,
    category: "ஆய்வு",
    title: "இரா. நாகசாமியின் பழுதடைந்த கண்ணாடியும் பார்வைக் கோளாறுகளும்",
    englishTitle: "Dr. Nagasamy's Faulty Lens and Vision",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/Research/Dr. Nagasamy's Faulty Lens and Vision.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/Research/Dr. Nagasamy's Faulty Lens and Vision.pdf",
  },
  {
    id: 73,
    category: "ஆய்வு",
    title: "The tainted spectacles and faulty vision of Dr. Nagasamy",
    englishTitle: "The Tainted Spectacles and Faulty Vision of Dr. Nagasamy",
    author: AUTHOR,
    cover:
      "/books/covers/7. ஆய்வு/5. The tainted spectacles and faulty vision of Dr. Nagasamy.jpg",
    pdf:
      "/books/pdf/7.ஆய்வு/The tainted spectacles and faulty vision of Dr. Nagasamy.pdf",
  },

  // =========================================================
  // 8. தமிழண்ணல் - 4
  // =========================================================
  {
    id: 74,
    category: "தமிழண்ணல்",
    title: "அண்ணல் தமிழ்",
    englishTitle: "Annal Tamil",
    author: AUTHOR,
    cover: "/books/covers/8. தமிழண்ணல்/1. அண்ணல் தமிழ்.jpg",
    pdf: "/books/pdf/8.தமிழண்ணல்/அண்ணல் தமிழ்.pdf",
  },
  {
    id: 75,
    category: "தமிழண்ணல்",
    title: "தமிழண்ணல் தமிழுக்குத் தந்த சீர்வரிசை",
    englishTitle: "Thamizhannal's Contributions to Tamil",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/thamizhannal/Thamizhannal's Contributions to Tamil.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/thamizhannal/Thamizhannal's Contributions to Tamil.pdf",
  },
  {
    id: 76,
    category: "தமிழண்ணல்",
    title: "தமிழண்ணல் மணிவிழா மலர்",
    englishTitle: "Thamizhannal Ruby Jubilee Souvenir",
    author: AUTHOR,
    cover:
      "/books/covers/8. தமிழண்ணல்/3. தமிழண்ணல் மணிவிழா மலர்.jpg",
    pdf: "/books/pdf/8.தமிழண்ணல்/தமிழண்ணல் மணிவிழா மலர்.pdf",
  },
  {
    id: 77,
    category: "தமிழண்ணல்",
    title: "மனத்துக்கு மனம்",
    englishTitle: "Mind to Mind",
    author: AUTHOR,
    cover: "/books/covers/8. தமிழண்ணல்/4. மனத்துக்கு மனம்.jpg",
    pdf: "/books/pdf/8.தமிழண்ணல்/மனத்துக்கு மனம்.pdf",
  },

  // =========================================================
  // 9. தமிழர் - 3
  // =========================================================
  {
    id: 78,
    category: "தமிழர்",
    title: "தமிழனின் தாழ்வு மனப்பான்மை",
    englishTitle: "The Inferiority Complex of Tamils",
    author: AUTHOR,
    cover:
      "/books/covers/9. தமிழர்/1. தமிழனின் தாழ்வு மனப்பான்மை.jpg",
    pdf: "/books/pdf/9.தமிழர்/தமிழனின் தாழ்வு மனப்பான்மை.pdf",
  },
  {
    id: 79,
    category: "தமிழர்",
    title: "ஊடகங்களால் உரைப் பற்றும் நெருப்பு",
    englishTitle: "The Fire that Media Spreads",
    author: AUTHOR,
    cover:
      "/books/covers/9. தமிழர்/2. ஊடகங்களால் உரைப் பற்றும் நெருப்பு.jpg",
    pdf: "/books/pdf/9.தமிழர்/ஊடகங்களால் ஊரைப் பற்றும் நெருப்பு.pdf",
  },
  {
    id: 80,
    category: "தமிழர்",
    title: "பொது நலத்தில் குப்பை கொட்டும் இந்தியர்கள்",
    englishTitle: "Indians Who Dump 'Garbage' in Public Spaces",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/tamilar/Indians Who Dump 'Garbage' in Public Spaces.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/tamilar/Indians Who Dump 'Garbage' in Public Spaces.pdf",
  },

  // =========================================================
  // 10. புதினம் - 2
  // =========================================================
  {
    id: 81,
    category: "புதினம்",
    title: "வாழ்வரசி",
    englishTitle: "Vaazhvarasi",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/puthinam/Vaazhvarasi.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/puthinam/Vaazhvarasi.pdf",
  },
  {
    id: 82,
    category: "புதினம்",
    title: "நச்சுவளையம்",
    englishTitle: "The Poisonous Web",
    author: AUTHOR,
    cover: "/books/covers/10. புதினம்/2. நச்சுவளையம்.jpg",
    pdf: "/books/pdf/10.புதினம்/நச்சுவளையம்.pdf",
  },

  // =========================================================
  // 11. மற்றவை - 4
  // =========================================================
  {
    id: 83,
    category: "மற்றவை",
    title: "தாலாட்டு",
    englishTitle: "Lullaby",
    author: AUTHOR,
    cover: "/books/covers/11. மற்றவை/1. தாலாட்டு.jpg",
    pdf: "/books/pdf/11.மற்றவை/தாலாட்டு.pdf",
  },
  {
    id: 84,
    category: "மற்றவை",
    title: "உள்ளங்கள் ஒன்றிடும் அன்றில் பறவைகள்",
    englishTitle: "Birds That Unite Hearts",
    author: AUTHOR,
    cover:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/covers/others/Birds That Unite Hearts.jpg",

pdf:
  "https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/books/pdf/others/Birds That Unite Hearts.pdf",
  },
  {
    id: 85,
    category: "மற்றவை",
    title: "மனித நேயம்",
    englishTitle: "Humanity",
    author: AUTHOR,
    cover: "/books/covers/11. மற்றவை/3. மனித நேயம்.jpg",
    pdf: "/books/pdf/11.மற்றவை/மனித நேயம்.pdf",
  },
  {
    id: 86,
    category: "மற்றவை",
    title: "எழுச்சித்தரும் எண்ணச்சிறகுகள்",
    englishTitle: "Wings of Uplifting Thoughts",
    author: AUTHOR,
    cover:
      "/books/covers/11. மற்றவை/4. எழுச்சிதரும் எண்ணச்சிறகுகள்.jpg",
    pdf:
      "/books/pdf/11.மற்றவை/எழுச்சித்தரும் எண்ணச்சிறகுகள்.pdf",
  },
];

const categoryOrder = [
  "இலக்கியம்",
  "தொல்காப்பியம்",
  "திருக்குறள்",
  "இலக்கணம்",
  "உரை",
  "மொழியியல்",
  "ஆய்வு",
  "தமிழண்ணல்",
  "தமிழர்",
  "புதினம்",
  "மற்றவை",
];

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("அனைத்தும்");

  const filteredBooks =
    selectedCategory === "அனைத்தும்"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  const selectedBookIndex = selectedBook
    ? books.findIndex((book) => book.id === selectedBook.id)
    : -1;

  const previousBook =
    selectedBookIndex > 0
      ? books[selectedBookIndex - 1]
      : null;

  const nextBook =
    selectedBookIndex >= 0 &&
    selectedBookIndex < books.length - 1
      ? books[selectedBookIndex + 1]
      : null;

  const handlePreviousBook = () => {
    if (previousBook) {
      setSelectedBook(previousBook);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextBook = () => {
    if (nextBook) {
      setSelectedBook(nextBook);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (selectedBook) {
    return (
      <div className="relative min-h-screen bg-[#f4efe3]">
        {/* Full-Page Parchment Texture Layer */}
        <div className="parchment-texture-layer" />

        <section className="relative z-10 border-b border-[#cdbfa7]/80 bg-[#ebe3d2]/70 backdrop-blur-xs">
          <div className="mx-auto max-w-6xl px-5 py-8">
            <button
  type="button"
  onClick={() => setSelectedBook(null)}
  className="mb-7 inline-flex items-center border border-[#8b3f3f] bg-[#f8f3e8] px-5 py-3 text-sm font-bold text-[#8b3f3f] transition duration-300 hover:bg-[#8b3f3f] hover:text-white"
>
  ← நூல்களுக்கு திரும்ப
</button>

            <div className="grid items-center gap-8 md:grid-cols-[180px_1fr]">
              <div className="relative mx-auto aspect-[3/4] w-40 overflow-hidden border border-[#bda986] bg-[#d8cdb9] shadow-lg md:w-full">
                <Image
                  src={selectedBook.cover}
                  alt={selectedBook.title}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-bold text-[#8a6636]">
                  {selectedBook.category}
                </p>

                <h1 className="mt-2 font-serif text-3xl font-extrabold text-[#273943] md:text-5xl">
                  {selectedBook.title}
                </h1>

                <p className="mt-3 text-base font-medium text-[#766d62]">
                  {selectedBook.englishTitle}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#8b3f3f]">
                  ஆசிரியர்: {selectedBook.author}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={selectedBook.pdf}
                    download
                    className="border border-[#8b3f3f] bg-[#8b3f3f] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#273943]"
                  >
                    ⬇ பதிவிறக்கம்
                  </a>

                  <a
                    href={selectedBook.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#273943] px-5 py-3 text-sm font-bold text-[#273943] transition hover:bg-[#273943] hover:text-white"
                  >
                    புதிய சாளரத்தில் திறக்க ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BookReader
          pdfUrl={selectedBook.pdf}
          title={selectedBook.title}
          englishTitle={selectedBook.englishTitle}
          author={selectedBook.author}
          cover={selectedBook.cover}
          previousBook={previousBook}
          nextBook={nextBook}
          onPrevious={handlePreviousBook}
          onNext={handleNextBook}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f4efe3]">
      {/* Full-Page Parchment Texture Layer covering entire page */}
      <div className="parchment-texture-layer" />

      {/* HERO */}
      <section className="relative z-10 overflow-hidden border-b border-[#ded2bd] bg-gradient-to-b from-[#ebe3d2]/60 via-[#f0e9dc]/40 to-transparent">
        {/* Layer 2: Warm ambient light orbs */}
        <div className="pointer-events-none absolute -right-10 top-1/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#d4a853]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#b08a3e]/15 blur-3xl" />

        {/* Top subtle accent line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b08a3e]/30 to-transparent" />

        {/* Content Container — Centered & Balanced Archival Library Header */}
        <div className="relative mx-auto max-w-4xl px-5 py-12 text-center md:py-16">
          <div className="inline-flex items-center gap-2 border border-[#b49a6d] bg-[#f8f3e8] px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636] shadow-xs">
            <span>Library · நூல் களஞ்சியம்</span>
          </div>

          <h1 className="mt-4 font-serif text-4xl font-extrabold text-[#273943] md:text-5xl lg:text-6xl">
            நூல்கள்
          </h1>

          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b3f3f] md:text-sm">
            Books & Research Works by Thamizhannal
          </p>

          <div className="mx-auto mt-4 h-1 w-20 bg-[#8b3f3f]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-[#514940] md:text-base md:leading-8">
            இலக்கியம், தொல்காப்பியம், திருக்குறள், இலக்கணம், உரை, மொழியியல், ஆய்வு மற்றும் தமிழண்ணல் சிந்தனைகள் உள்ளிட்ட 82 அரிய நூல்களின் முழு மின்னூல் களஞ்சியம்.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-[#665c50]">
            <span className="inline-flex items-center gap-1.5 border border-[#c8b99e] bg-[#f8f3e8] px-3.5 py-1.5 shadow-xs">
              📖 {books.length} அரிய நூல்கள்
            </span>
          
            <span className="inline-flex items-center gap-1.5 border border-[#c8b99e] bg-[#f8f3e8] px-3.5 py-1.5 shadow-xs">
              📥 இலவச பதிவிறக்கம்
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER — Literary Editorial Tabs */}
      <section className="relative z-10 border-b border-[#ded2bd]/80 bg-[#f4efe3]/60 backdrop-blur-[2px] py-5">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("அனைத்தும்")}
              className={`border-b-2 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition duration-200 sm:text-sm ${
                selectedCategory === "அனைத்தும்"
                  ? "border-[#1e2e38] bg-[#1e2e38] text-[#f7f2e7]"
                  : "border-transparent bg-[#f8f3e8]/80 text-[#5c5246] hover:border-[#b49a6d] hover:bg-[#eee5d3]/70"
              }`}
            >
              அனைத்தும் ({books.length})
            </button>

            {categoryOrder.map((category) => {
              const count = books.filter(
                (book) => book.category === category
              ).length;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`border-b-2 px-3.5 py-1.5 text-xs font-bold transition duration-200 sm:text-sm ${
                    selectedCategory === category
                      ? "border-[#8b3f3f] bg-[#8b3f3f] text-white"
                      : "border-transparent bg-[#f8f3e8]/80 text-[#5c5246] hover:border-[#b49a6d] hover:bg-[#eee5d3]/70"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>


      {/* BOOK LIST */}
      <main className="relative z-10 mx-auto max-w-7xl px-5 py-14">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
            {selectedCategory === "அனைத்தும்"
              ? "All Books"
              : selectedCategory}
          </p>

          <h2 className="mt-3 font-serif text-3xl font-extrabold text-[#273943]">
            {selectedCategory === "அனைத்தும்"
              ? `அனைத்து நூல்கள் (${books.length})`
              : `${selectedCategory} (${filteredBooks.length})`}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
  {filteredBooks.map((book) => (
    <article
      key={book.id}
      className="group overflow-hidden border border-[#c9bba3]/85 bg-[#f8f3e8]/92 backdrop-blur-xs shadow-xs transition duration-300 hover:-translate-y-1 hover:border-[#b08a3e] hover:shadow-md"
    >
      <button
        type="button"
        onClick={() => setSelectedBook(book)}
        className="block w-full text-left"
        aria-label={`${book.title} புத்தகத்தைப் படிக்க`}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#d8cdb9]">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-3 sm:p-4">
          <p className="text-[8px] font-bold tracking-[0.1em] text-[#8a6636] sm:text-[9px] sm:tracking-[0.15em]">
            {book.category}
          </p>

          <h3 className="mt-1.5 line-clamp-2 min-h-[2.75rem] font-serif text-sm font-extrabold leading-5 text-[#273943] sm:mt-2 sm:min-h-[3rem] sm:text-lg sm:leading-6">
            {book.title}
          </h3>

          <p className="mt-1.5 line-clamp-1 text-[10px] font-medium text-[#766d62] sm:mt-2 sm:text-xs">
            {book.englishTitle}
          </p>

          <p className="mt-2 text-[10px] font-bold text-[#8b3f3f] sm:mt-3 sm:text-xs">
            நூலைப் படிக்க →
          </p>
        </div>
      </button>
    </article>
  ))}
</div>
      </main>
    </div>
  );
}