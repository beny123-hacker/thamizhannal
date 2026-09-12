import React from "react";
import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <main className="home-page min-h-screen bg-[#f4efe3] text-[#273943]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section className="home-hero tamil-hero">
        {/* Subtle Parchment paper texture */}
        <div className="hero-paper-texture" />

        {/* Birds flying in parchment sky above temple */}
        <div className="hero-sky-birds" aria-hidden="true">
          <svg viewBox="0 0 160 80" fill="none" className="w-full h-full">
            <path d="M12 28 Q 18 20 24 28 Q 30 20 36 28" stroke="#7a5d38" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
            <path d="M48 18 Q 53 12 58 18 Q 63 12 68 18" stroke="#7a5d38" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
            <path d="M82 32 Q 86 26 90 32 Q 94 26 98 32" stroke="#7a5d38" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
            <path d="M30 42 Q 34 37 38 42 Q 42 37 46 42" stroke="#7a5d38" strokeWidth="1" strokeLinecap="round" opacity="0.25" />
          </svg>
        </div>

        {/* Temple art in background (left side) */}
        <div className="home-temple" aria-hidden="true">
          <img
            src="https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/images/temple.png"
            alt=""
            className="temple-image"
          />
        </div>

        {/* Top-Right Calligraphy Watermark: மொழி · இலக்கியம் · ஆய்வு */}
        <div className="hero-manuscript-calligraphy" aria-hidden="true">
          மொழி · இலக்கியம் · ஆய்வு
        </div>

        {/* Bottom-Right Large Tamil Letter 'அ' Watermark */}
        <div className="hero-tamil-letter-watermark" aria-hidden="true">
          அ
        </div>

        {/* =========================================================
            HERO CONTENT — Balanced 3-Zone Desktop Composition
            [ Left: Temple Zone ] [ Center: Typography ] [ Right: Vintage Portrait ]
        ========================================================== */}

        <div className="home-hero-container">
          {/* ================= LEFT VISUAL ZONE (TEMPLE SPACER) ================= */}
          <div className="hero-temple-zone" aria-hidden="true" />

          {/* ================= CENTER COLUMN: MAIN TYPOGRAPHY BLOCK ================= */}
          <div className="home-hero-content hero-content">
            <div className="home-welcome">
              <span className="welcome-line" />
              <p>WELCOME · வரவேற்கிறோம்</p>
              <span className="welcome-line" />
            </div>

            <h1 className="hero-title">தமிழண்ணல்</h1>

            <p className="home-hero-subtitle hero-subtitle">
              மூதறிஞர் இராம. பெரியகருப்பன்
            </p>

            <div className="home-year">
              <span className="year-line" />
              <p>1928 — 2015</p>
              <span className="year-line" />
            </div>

            <p className="home-description">
              தமிழ் ஆய்வுலகிலும், ஒப்பிலக்கியத் துறையிலும், சங்க இலக்கிய
              ஆய்விலும் சிறந்து விளங்கிய மூதறிஞர் தமிழண்ணலின் வாழ்க்கை,
              படைப்புகள், ஆய்வுகள் மற்றும் நினைவுகளைப் பாதுகாக்கும் தளம்.
            </p>

            <div className="home-buttons">
              <a
                href="/life"
                className="home-primary-button hero-primary-button"
              >
                வாழ்க்கை வரலாறு →
              </a>

              <a
                href="/books"
                className="home-secondary-button hero-secondary-button"
              >
                நூல்கள் →
              </a>
            </div>

            {/* Bottom Floral Manuscript Rosette Ornament */}
            <div className="hero-bottom-rosette" aria-hidden="true">
              <svg viewBox="0 0 32 32" className="h-6 w-6 text-[#b08a3e]/60" fill="currentColor">
                <path d="M16 2 C16.8 7.5 20.5 11.2 26 12 C20.5 12.8 16.8 16.5 16 22 C15.2 16.5 11.5 12.8 6 12 C11.5 11.2 15.2 7.5 16 2 Z" />
                <circle cx="16" cy="12" r="1.8" fill="#7a5a2e" />
                <circle cx="16" cy="4" r="1" fill="#b08a3e" />
                <circle cx="16" cy="20" r="1" fill="#b08a3e" />
                <circle cx="8" cy="12" r="1" fill="#b08a3e" />
                <circle cx="24" cy="12" r="1" fill="#b08a3e" />
              </svg>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: VINTAGE ARCHIVAL PORTRAIT ARTWORK ================= */}
          <div className="home-portrait-area">
            <div className="vintage-gemini-artwork-wrapper">
              <img
                src="https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/images/thamizhannal-vintage-portrait-frame.png"
                alt="மூதறிஞர் தமிழண்ணல் — வரலாற்றுச் சிறப்புமிக்க திருவுருவம்"
                className="vintage-gemini-artwork-img"
              />
              {/* Archival tone integration for the tiny corner mark */}
              <span className="gemini-mark-conceal" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Bottom-left small badge */}
        <div className="hero-bottom-left-badge" aria-hidden="true">
          <span>N</span>
        </div>

        <div className="hero-bottom-glow" />
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* =========================================================
          AUDIO ARCHIVE SECTION
      ========================================================== */}

      <section className="tamil-section tamil-audio-section relative overflow-hidden py-16 md:py-20">
        {/* Subtle Parchment Texture Layer */}
        <div className="parchment-texture-layer" />

        {/* Ambient Warm Atmosphere Orbs */}
        <div className="section-ambient-glow -right-24 top-1/2 h-96 w-96 -translate-y-1/2 bg-[#d4a853]/10" />
        <div className="section-ambient-glow -left-20 top-1/4 h-80 w-80 bg-[#b08a3e]/08" />

        <div className="relative z-10 mx-auto max-w-4xl px-5">
          <div className="mb-7 text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
                Audio Archive · ஒலிப் பேழை
              </span>

              <div className="hidden h-px flex-1 bg-[#c8b99e]/60 md:block" />
            </div>

            <h2 className="mt-3 font-serif text-3xl font-extrabold text-[#1e2e38] md:text-4xl">
              பழகு தமிழ் அறிவோம்
            </h2>

            <p className="mt-2 text-xs font-semibold text-[#766d62]">
              முனைவர் தமிழண்ணல் · முனைவர் சுந்தர ஆவுடையப்பன்
            </p>
          </div>

          <div className="audio-editorial-desk">
            <p className="text-sm font-medium leading-7 text-[#4d453c] md:text-base">
              The HINDU-வில் வாரந்தோறும் வெளிவந்த “Know your English”
              மற்றும் தினமணி-யில் தமிழண்ணல் எழுதி வாரந்தோறும் வெளிவந்த
              “உங்கள் தமிழைத் தெரிந்து கொள்ளுங்கள்” வழியில் வகுக்கப்பட்டது.
            </p>

            <p className="mt-4 text-sm font-medium leading-7 text-[#4d453c] md:text-base">
              தமிழ் மொழியில் ஏற்படும் ஐயங்களை விளக்கும் கலந்துரையாடல்.
              மதுரை வானொலியில் 49 வாரங்கள் தொடர்ந்து ஒலிபரப்பானதின்
              முழு ஒலிவடிவம்.
            </p>

            <div className="audio-example-quote">
              <p className="text-xs font-extrabold text-[#1e2e38]">
                எடுத்துக்காட்டு
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#5c5246]">
                திருவளர் செல்வன் அல்லது திருவளர்ச் செல்வன், தொலைபேசி
                அல்லது தொலைப்பேசி, கடைபிடிக்க வேண்டும் அல்லது
                கடைப்பிடிக்க வேண்டும்.
              </p>
            </div>

            <div className="mt-8 border-t border-[#c8b99e]/50 pt-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-extrabold text-[#1e2e38]">
                  பழகு தமிழ் அறிவோம் — முழுப் பதிவு
                </p>

                <span className="text-[10px] font-bold tracking-wider text-[#8a6636]">
                  10 மணி நேரம்
                </span>
              </div>

              <audio controls className="h-10 w-full opacity-90 transition hover:opacity-100">
                <source
                  src="https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/audio/pazhagu-thamizh-arivom.mpeg"
                  type="audio/mpeg"
                />
                உங்கள் உலாவி audio element-ஐ ஆதரிக்கவில்லை.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* =========================================================
          VIDEO ARCHIVE SECTION — காணொலிவடிவம்
          1. New YouTube Video (_8xFx0nczCI)
          2. Existing YouTube Video (KWmMQiGJEd0)
      ========================================================== */}

      <section className="tamil-section home-video-archive relative overflow-hidden py-16 md:py-20">
        {/* Subtle Parchment Texture Layer */}
        <div className="parchment-texture-layer" />

        {/* Ambient Warm Atmosphere Orbs */}
        <div className="section-ambient-glow -right-24 top-1/2 h-96 w-96 -translate-y-1/2 bg-[#d4a853]/10" />
        <div className="section-ambient-glow -left-20 top-1/4 h-80 w-80 bg-[#b08a3e]/08" />

        <div className="relative z-10 mx-auto max-w-4xl px-5">
          <div className="mb-8 text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
                Video Archive · காணொலிக் காப்பகம்
              </span>
              <div className="hidden h-px flex-1 bg-[#c8b99e]/60 md:block" />
            </div>

            <h2 className="mt-3 font-serif text-3xl font-extrabold text-[#1e2e38] md:text-4xl">
              காணொலிவடிவம்
            </h2>

            <p className="mt-2 text-xs font-semibold text-[#766d62]">
              மூதறிஞர் தமிழண்ணல் அவர்களின் சிறப்புப் பதிவுகள் மற்றும் வரலாற்று ஆவணங்கள்
            </p>
          </div>

          <div className="home-video-list flex flex-col gap-10">
            {/* 1. NEW YOUTUBE VIDEO */}
            <div className="home-video-item">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-[#1e2e38] md:text-lg">
                  முனைவர் தமிழண்ணல் அவர்களின் சிறப்பு ஆவணப் பதிவு
                </h3>
                <span className="text-[10px] font-bold tracking-wider text-[#8a6636]">
                  காணொலி
                </span>
              </div>
              <div className="home-video-frame-wrapper overflow-hidden border border-[#c8b99e]/60 bg-[#16222a] shadow-sm">
                <iframe
                  className="h-full w-full aspect-video"
                  src="https://www.youtube.com/embed/_8xFx0nczCI"
                  title="மூதறிஞர் தமிழண்ணல் — சிறப்பு ஆவணக் காணொலி"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* 2. EXISTING YOUTUBE VIDEO */}
            <div className="home-video-item">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-[#1e2e38] md:text-lg">
                  பாரிவேந்தர் பைந்தமிழ் விருது 2013 — மூதறிஞர் தமிழண்ணல்
                </h3>
                <span className="text-[10px] font-bold tracking-wider text-[#8a6636]">
                  காணொலி
                </span>
              </div>
              <div className="home-video-frame-wrapper overflow-hidden border border-[#c8b99e]/60 bg-[#16222a] shadow-sm">
                <iframe
                  className="h-full w-full aspect-video"
                  src="https://www.youtube.com/embed/KWmMQiGJEd0"
                  title="பாரிவேந்தர் பைந்தமிழ் விருது 2013 — மூதறிஞர் தமிழண்ணல்"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* =========================================================
          FEATURED ARTICLE SECTION — கட்டுரை
          தமிழாக வாழ்ந்த அண்ணலுக்கு அகவை தொன்னூறு
          முனைவர் மு.பழனியப்பன்
      ========================================================== */}

      <section className="tamil-section home-article-section relative overflow-hidden py-16 md:py-24">
        {/* Subtle Parchment Texture Layer */}
        <div className="parchment-texture-layer" />

        {/* Ambient Warm Atmosphere Orbs */}
        <div className="section-ambient-glow -left-32 top-1/4 h-[500px] w-[500px] bg-[#d4a853]/10" />
        <div className="section-ambient-glow -right-32 top-2/3 h-[500px] w-[500px] bg-[#b08a3e]/08" />

        <div className="home-article-container relative z-10 mx-auto px-5">
          <div className="mb-10 text-center">
            <span className="home-article-label inline-block border border-[#b49a6d]/70 bg-[#eee5d3]/60 px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              கட்டுரை
            </span>

            <h2 className="home-article-title mt-4 font-serif text-3xl font-extrabold text-[#1e2e38] sm:text-4xl md:text-[2.65rem] md:leading-[1.25]">
              தமிழாக வாழ்ந்த அண்ணலுக்கு அகவை தொன்னூறு
            </h2>

            <div className="mx-auto mt-4 h-0.5 w-16 bg-[#8b3f3f]" />

            <p className="home-article-byline mt-4 font-serif text-sm font-semibold text-[#8b3f3f] md:text-base">
              முனைவர் மு.பழனியப்பன் · தமிழ்த்துறைத் தலைவர், அரசு கலை மற்றும் அறிவியல் கல்லூரி, திருவாடானை
            </p>
          </div>

          {/* Archival Editorial Manuscript Flourish */}
          <div className="my-8 flex items-center justify-center gap-3 text-[#b08a3e]/60" aria-hidden="true">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#b08a3e]/50" />
            <span className="font-serif text-sm tracking-widest text-[#8a6636]">❦</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#b08a3e]/50" />
          </div>

          <article className="home-article-body">
            <p>
              சிவகங்கை மாவட்டத்தின் சிற்றூர் நெற்குப்பை. ஆனால் தமிழ் இலக்கிய வரலாற்றில் குறிக்கத்தக்கப் பணிகளை ஆற்றிய பல இலக்கியவாணர்களைக் கொண்ட பேரூர் இவ்வூராகும். செட்டிநாடும் செந்தமிழும் என்ற நூலினை எழுதிய சோம.லெ, தினமணியின் ஆசிரியராக விளங்கிய சம்பந்தம் (இராம.திருஞானசம்பந்தம்), முதுபெரும் தமிழறிஞர் தமிழண்ணல், அண்ணாமலைப் பல்கலைக்கழகத்தின் இயங்கு சக்தியாக விளங்கிய லெ. ப. கரு. இராமநாதன் செட்டியார் போன்ற பலர் பிறந்த மண் நெற்குப்பையாகும்.
            </p>

            <p>
              அங்கு பிறந்த இராம.பெரியகருப்பன் என்ற தமிழண்ணல் தமிழ் ஆய்வுலகிலும், ஒப்பிலக்கியத்துறையிலும், சங்க இலக்கிய தனித் திறன் ஆய்விலும் சிறந்து விளங்கியவர். அவர் எழுதிய நூல்களின் எண்ணிக்கை அவர் வாழ்ந்த ஆண்டுகளைப் போலவே எண்பத்தெட்டினைத் தொடும்.
            </p>

            <p>
              தமிழண்ணல் செட்டிநாட்டு வழக்கப்படி இராமசாமிச் செட்டியார் கல்யாணி ஆச்சி ஆகியோருக்குப் பிள்ளையாக வந்தவர். தமிழ் பண்டிதர் பட்டம் பெற்று அதன் பின் பொருளாதரப் பட்டம் பெற்று அதன்பின் தமிழ் உயர்கல்வி பெற்று முனைவர் பட்டம் பெற்றவர். அடிப்படையில் இருந்து உயர்ந்தவர். காரைக்குடி மீனாட்சி சுந்தரேசர் பள்ளி ஆசிரியராகப் பணியாற்றிய இவர் மதுரை தியாகராசர் கல்லூரியின் தமிழ்ப் பேராசிரியராக விளங்கி அதன் பின் மதுரை காமராசர் பல்கலைக்கழகத்தின் தமிழ்த்துறைத் தலைவராக விளங்கி, பின்னாளில் தேசியப் பேராசிரியராக முன்நின்றவர்.
            </p>

            <p>
              இவர் துணிந்து அணியும் மதித்து அணியும் ஆடை வெள்ளை நிற ஆடையாகும். இதற்குக் காரணம் நம் மனம்போல ஆடையும் தூய்மையாக இருக்கவேண்டும் என்ற அவரின் எண்ணம்தான். வெள்ளை ஆடையில் எப்படி ஒரு துளி அழுக்கு விழுந்துவிடாமல் காப்பாற்றுகிறோமோ அதுபோல வாழ்விலும் தூய்மையை நிலைநாட்ட வேண்டும் என்பது அவரின் வாழ்க்கைத் தெளிவு.
            </p>

            <p>
              அவரின் தொன்னூறாவது பிறந்த நாள் அவரின் மகன் திரு. மணிவண்ணன் அவர்களால் ஆகஸ்ட பதினான்காம் நாள் நெற்குப்பையில் சோம.லெ. நினைவு அரசு கிளை நூலகத்தில் நூலக வாசகர் வட்டம் சார்பில் கொண்டாடப்பெற்றது. பள்ளிக் குழந்தைகள் அவரின் வாழ்வு பற்றியும் அவரின் படைப்புகள் பற்றியும் அழகுறப் பேசினர்.
            </p>

            <p>
              சோம.லெ நினைவாக அவரின் குடும்பத்தார் நெற்குப்பை சிற்றூரில் ஏதேனும் செய்ய வேண்டும் என்று எண்ணியபோது கிளை நூலகத்திற்குக் கட்டிடம் கட்டி அங்குக் கணினிக் கல்வி முதலான சமுதாய மேம்பாடுகளைச் செய்யலாம் என வழிப்படுத்தியவர் டாக்டர் தமிழண்ணல் அவர்கள். இவரின் இந்த வழிகாட்டலால் அழகான கட்டிடத்தில் முக்கியமான இடத்தில் கிளைநூலகம் இயங்கிவருகிறது. டாக்டர் தமிழண்ணல் கரங்களால் அக்கட்டிடம் திறக்கப்பெற்றதைக் கல்வெட்டு கூறுகிறது. அவரின் நினைவுகள் அங்கே நிற்பதை அவரின் புகைப்படம் அறிவித்து நிற்கிறது.
            </p>

            <p>
              தாலாட்டுப் பாடல்களைத் தொகுக்கவேண்டும் என்ற எண்ணத்தில் காரைக்குடி செல்வி பதிப்பக உரிமையார் திரு. சிவராமன் அவர்கள் ஒரு முயற்சியை மேற்கொண்டபோது அவரின் முயற்சிக்குத் தொகுப்பாளராக உடன் நின்றவர் டாக்டர் தமிழண்ணல் அவர்கள். செட்டிநாட்டுத் தாலாட்டுகளைத் தொகுத்தும் அந்நூல் வளம் பெற அவர் வழிகாட்டினார்.
            </p>

            <p>
              இவரின் புதிய நோக்கில் தமிழ் இலக்கிய வரலாறு, குறிக்கத்தக்க கூரிய பார்வை உடையது. சங்க கால இலக்கியங்களை அவர் அவைய இலக்கியங்கள் என்கிறார். அவை சார்ந்து விவாதித்து அவை படைக்கப்பெற்ற நிலையில் இவற்றை அவைய இலக்கியங்கள் என்று பகுப்பது புதிய பகுப்புமுறையாகின்றது. இந்நூல் இவரின் பெயர் சொல்லும் நூல் என்றால் இவர் இதில் தன் தாயாரை நினைவு கூர்ந்து இந்நூலைச் சமர்ப்பித்துள்ளார்.
            </p>

            <p>
              தமிழண்ணல் தன் நூல்களில் தான் சார்ந்த பதிவுகளை அறவே இல்லாமல் வெளியிடுவது என்பதில் கவனமாக இருந்துள்ளார். இந்த எல்லையையும் மீறி இந்நூலில் அவரால் அவரின் தாயார் பற்றி ஒரு கவிதை இடம்பெற்றுவிட்டது.
            </p>

            <blockquote className="home-article-quote">
              <p className="whitespace-pre-line font-serif text-base font-semibold leading-8 text-[#2c241c] md:text-lg">
{`கல்யாணி மகனா என்று
கண்டவர் கேட்கும் போதில்
மல்குமே மகிழ்ச்சி அம்மா
மாட்சிமை மிக்காய் என்றும்
வல்வழி அறியாய் கொண்டோன்
வாழ்வதற்காக வாழ்ந்தாய்
நல்வழி ஒன்றே கண்டாய்
நலிந்தனை அம்மா அம்மா
தாய் செய்த நல்லறங்கள்
தனையனைச் சாரும் என்று
சேய்களுக்கு எல்லாம் சொல்ல
சிறப்புற வாழ்கிறேன் நான்
வாய்மையே அறமே அன்பே
வாழ்விக்கும் தெய்வமே என்றன்
தாய்மையே அம்மா அம்மா
தாளினை வணங்குகிறேன்`}
              </p>
            </blockquote>

            <p>
              என்ற இந்தப் பாடலில் தமிழண்ணல் தன்னை வளர்த்த தாயிடம் கொண்டிருந்த அன்பை உணரமுடிகின்றது. தமிழண்ணலின் தூய்மைப் பண்புக்குக் காரணம் அவரின் தாயார் கல்யாணி என்பது இப்பாடல் தரும் இனிய கருத்து. தான் சிறப்புற வாழ்வதாகச் சொல்லும் தமிழண்ணல் அதற்குக் காரணம் தாய் செய்த நல்லறங்கள் என்று குறிப்பது இங்குக் கவனிக்கத்தக்கது.
            </p>

            <p>
              தமிழண்ணல் நடுநிலையாளர். ஆய்வுக் கருத்துக்களை நுணுகித் தேடும் தும்பி. இதனால் தான் எழுதிய ஆய் நெறிச் சாரம் என்பதில்
            </p>

            <blockquote className="home-article-quote home-article-quote-fixed">
              <p className="home-quote-fixed-text whitespace-pre-line font-serif text-lg font-medium italic leading-8 text-[#2c241c]">
{`"கொங்குதேர் வாழ்க்கை அஞ்சிறைத் தும்பியாய்
எங்கு தேர்ந்தாயினும் அறிவினை நாடுதல்
இடம், பொருள், கருதாது, ஆய்வினைப் போற்றுதல்
தவறுறின் ஒப்புதல், பிழையினைக் காணின்
தயங்காது மறுத்தல், தற்சார்பில்லா
நடுநிலை மனத்துடன் நாடுதல்
விடுதலை உணர்வாய் ஆய்வறம் விளையுமே"`}
              </p>
            </blockquote>

            <p>
              என்று ஆய்வறம் உரைக்கிறார். இதில் அவருக்கு மிகப்பிடித்தமான குறுந்தொகைப்பாடலின் முதலடி வந்துவிடுகிறது. அவர் ஆய்வுத் தும்பி என்பது தெரிந்துவிடுகிறது. மேலும் தவறு செய்தால் வருந்தும் நெஞ்சமும், பிழை கண்டால் பொறுக்காது எழும் உரமும் தெரிகிறது. இதுவே இவரின் ஆய்வியல் நெறியுமாகும்.
            </p>

            <p>
              இவர் சிறந்த உரையாசிரியர். இலக்கண நூல்கள் பலவற்றிற்கும் எளிய உரை கண்டவர். தொல்காப்பியத்திற்கு இவர் எழுதிய இனிய எளிய உரை படிப்போர்க்குத் தெளிவினைத் தருவது. திருக்குறளுக்கு இவர் எழுதிய உரை தமிழ் மரபு சார்ந்தது.
            </p>

            <blockquote className="home-article-quote home-article-quote-kural home-article-quote-fixed">
              <p className="home-quote-fixed-text whitespace-pre-line font-serif text-lg font-semibold leading-8 text-[#1e2e38]">
{`புறந்தூய்மை நீரான் அமையும் அகந்தூய்மை
வாய்மையால் காணப் படும்`}
              </p>
            </blockquote>

            <p>
              என்ற திருக்குறளுக்கு அவர் தரும் ஓர் உரைத்தொடர் பின்வருமாறு. “ஒழுக்கத்தைப் போற்றாதவன் தீர்த்தமாடினால் பாவங்கள் கழுவப்படாது” என்பதாகும். புறத்திற்குத் தூய்மை செய்ய தீர்த்தங்கள் இருந்தாலும் அவற்றால் அகந்தூய்மை இல்லாதவனைத் தூய்மை செய்ய இயலாது என்பதே தமிழண்ணல் சொல்லவரும் கருத்தாகும்.
            </p>

            <p>
              தமிழ் அர்ச்சனை முறையைப் பெரிதும் வலியுறுத்தியவர் தமிழண்ணல். தமிழ் காக்க உண்ணாவிரதம் இருந்த பெரியார் தமிழண்ணல். தமிழ் முறைப்படி வழிபாடு இயற்றவேண்டும் என்று இவர் வலியுறுத்தினார். மனுநீதிச் சோழன் கன்று இறந்தமைக்காக அந்தணர்களுக்குத் தானம் செய்தால் போதுமானது என்று சொன்ன மந்திரிமார்களின் கருத்தை ஏற்காமல், அவற்றைப் புறம் தள்ளினான். இந்த இடமே ஆரிய வழிபாட்டு முறை தோற்ற இடம் என்கிறார் அவர். எனவே தமிழ் மக்கள் பூவும் நீரும் இட்டு கடவுளரை வணங்கினால் போதும் என்பது அவர் கருத்து. மேலும் தீயில் இடப்பெறும் பொருள்களை மக்களுக்கு அளித்து அவர்களுக்கு பசி தீர்க்கலாம் என்பது அவரின் கருத்து.
            </p>

            <p>
              திரு. ஆர் நாகசாமி எழுதிய “தி மிர்ரர் ஆப் தமிழ் அண்டு சான்ஸ்கிரிட்” என்ற நூலில் தொல்காப்பியம் பிந்தைய நூல், தமிழ் நூல்கள் அனைத்தும் வடமொழி தழுவியவை போன்ற கருத்துகளை முன்வைத்து ஆங்கிலத்தில் எழுதினார். அந்த நூலைக் கண்டித்துத் தமிழண்ணல் “இரா. நாகசாமியின் பழுதடைந்த கண்ணாடியும், பார்வைக் கோளாறுகளும்” என்று ஒரு நூலை எழுதினார். இதில்தான் தமிழண்ணல் என்னும் மெல்லிய தேகத்திற்குச் சொந்தக்காரர் தன் மனதில் எவ்வளவு ஆழமான, உறுதியான, மேன்மையாக வலிமையான கருத்தினை வைத்திருந்தார் என்பது தெரியவருகிறது.
            </p>

            <p>
              தமிழைப் பிழையின்றி எழுத அவர் தினமணியில் வரைந்த கட்டுரைகள் இக்காலத் தமிழ்ச்சமுதாயத்திற்கு வேண்டிய அடிப்படை நூல்களில் ஒன்று. தமிழ்ச் சொற்களின் ஆழத்தை அறிந்து அவற்றை வெளிப்படுத்தும் திறனும் மிக்கவர் தமிழண்ணல்.
            </p>

            <p>
              மணம் என்ற சொல் மலரின் மணத்தையும் குறிக்கிறது. இரு மனங்கள் இணையும் திருமணத்தையும் குறிக்கிறது. இந்த ஒரு சொல் ஏன் இரண்டையும் குறிக்கவேண்டும் என்பது அண்ணலின் ஐயநுட்பம். “மொட்டு நிலையிலிருந்து முழுமலர்ச்சி பெற்றுத் தன் மணத்தைச் சுற்றுப் புறமெங்கும் வீசச் செய்யும் மலரைப் போன்றே காதலும் காதலர்தம் உள்ளத்தில் வேர்கொண்டு, படிப்படியாக கிளைபரப்பிப் பின்பு புறத்தார்க்குப் புலனாகி, திருமணத்தில் மகிழ்வுற முடிகிறது” என்று இரு பொருள்களுக்கு ஒருசேரச் சொல் பொருத்தம் காண்கிறார் தமிழண்ணல்.
            </p>

            <p>
              ஒப்பிலக்கியத் துறை முதன் முதலாக காமராசர் பல்கலைகழகத்தில் அறிமுகம் செய்யப்பட்டபோது அதற்கான கருவி நூலை எழுதியவர் டாக்டர் தமிழண்ணல். ஆங்கில அறிவு, உலக இலக்கிய அறிவு ஆகியனவற்றைத் தேடித் தேடிப் பெற்றவர் டாக்டர் தமிழண்ணல். அவரின் நூல்களில் காணக்கிடைக்கும் ஒப்பிலக்கியக் கருத்துகள் நெற்குப்பையில் பிறந்த கிராமத்து மனிதன் உலக இலக்கியங்களைக் காணும் உயரிய நோக்குமுடையவனாக வளர்ந்திருக்கிறான் என்பதன் சாட்சியாகும்.
            </p>

            <p>
              இவரின் மாணவர்கள் தற்போது இவரின் ஆய்வுப்பாதையை வலுப்படுத்தி வருகின்றனர். இவர் ஜப்பானிலும் மாணவர்களைப் பெற்றிருந்தார். பல வெளிநாடுகளுக்குச் சென்று அயலகத் தமிழ், தமிழர் வளர வழி செய்தார்.
            </p>

            <p>
              அவரின் நூற்றாண்டு வர உள்ளது. இந்தப் பத்தாண்டுகளில் அவரின் மாணவர்கள், உறவினர்கள், தமிழறிஞர்கள் இணைந்து ஒரு நெடுந்திட்டம் உருவாக்கி அவரின் ஆய்வுப்பாதையை அடுத்த தலைமுறைக்குக் கொண்டு செல்ல ஆவன செய்யவேண்டும்.
            </p>

            {/* Subtle Archival Closing Ornament */}
            <div className="home-article-closing" aria-hidden="true">
              <div className="home-article-closing-line" />
              <span className="home-article-closing-glyph">❦</span>
              <div className="home-article-closing-line" />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
