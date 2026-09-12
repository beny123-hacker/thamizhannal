import "./life.css";

const books = [
  "வாழ்வரசி புதினம்",
  "நச்சுவளையம் புதினம்",
  "தாலாட்டு",
  "காதல் வாழ்வு",
  "பிறைதொழும் பெண்கள்",
  "சங்க இலக்கிய ஒப்பீடு – இலக்கியக் கொள்கைகள் (2003)",
  "சங்க இலக்கிய ஒப்பீடு – இலக்கிய வகைகள் (2005)",
  "தொல்காப்பியரின் இலக்கியக் கொள்கைகள் (2004)",
  "புதியநோக்கில் தமிழ் இலக்கிய வரலாறு",
  "தமிழியல் ஆய்வு (இ.முத்தையாவுடன்)",
  "ஆய்வியல் அறிமுகம் (இலக்குமணனுடன்)",
  "ஒப்பிலக்கிய அறிமுகம்",
  "குறிஞ்சிப்பாட்டு இலக்கியத் திறனாய்வு விளக்கம்",
  "தொல்காப்பியம் உரை",
  "நன்னூல் உரை",
  "அகப்பொருள் விளக்கம் உரை",
  "புறப்பொருள் வெண்பாமாலை உரை",
  "யாப்பருங்கலக் காரிகை உரை",
  "தண்டியலங்காரம் உரை",
  "சொல் புதிது சுவை புதிது",
  "தமிழில் அடிக்கடி நேரும் பிழைகளும் திருத்தமும்",
  "தமிழுக்கு ஆகமங்கள் தடையாகுமா?",
  "பேசுவது போல் எழுதலாமா? பேச்சுத் தமிழை இகழலாமா?",
  "பிழை திருத்தும் மனப்பழக்கம்",
  "உரை விளக்கு",
  "தமிழ் உயிருள்ள மொழி",
  "தமிழ் கற்பிக்கும் நெறிமுறைகள்",
  "தமிழ்த்தவம்",
  "உங்கள் தமிழைத் தெரிந்துகொள்ளுங்கள்",
  "திருக்குறள் உரை",
  "இனிய தமிழ்மொழியின் இயல்புகள்",
  "மறைமலையடிகள் பிள்ளைத்தமிழ்",
  "பெருங்கதை அறிமுகம்",
];

export default function LifePage() {
  return (
    <main className="life-editorial-page relative">
      {/* Full-Page Parchment Texture Layer */}
      <div className="parchment-texture-layer" />

      {/* ================= HERO ================= */}
      <section className="life-hero-section">

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="life-hero-kicker">
            <span />
            <p>Biography · வாழ்க்கை வரலாறு</p>
            <span />
          </div>

          <h1 className="life-hero-title">
            தமிழ்வாழ்வு
          </h1>

          <p className="life-hero-subtitle">
            His Life — Tamil Scholar & Author
          </p>

          <div className="mx-auto mt-4 h-0.5 w-14 bg-[#8b3f3f]" />

          <p className="life-hero-credit">
            நன்றி: முனைவர் மு.இளங்கோவன்
          </p>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* ================= INTRODUCTION & ARCHIVAL PORTRAIT ================= */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="life-portrait-showcase">
          {/* Integrated Archival Photograph of Dr. Thamizhannal */}
          <div className="life-portrait-img-box">
            <img
              src="https://rgbwvpwbucaprqilgvdv.supabase.co/storage/v1/object/public/thamizhannal/images/thamizhannal-life.png"
              alt="மூதறிஞர் தமிழண்ணல்"
              className="life-portrait-photo"
            />
          </div>

          <div className="life-intro-content">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
                அறிமுகம் · Introduction
              </span>
              <div className="h-px w-10 bg-[#b08a3e]/60" />
            </div>

            <p>
              தமிழறிஞர்களால் “தமிழண்ணல்” என அழைக்கப்படும் இராம. பெரியகருப்பன்
              அவர்கள் இருபதாம் நூற்றாண்டின் தமிழ் ஆளுமைகளுள் குறிப்பிடத்
              தகுந்தவர். மதுரை காமராசர் பல்கலைக்கழகத்தின் தமிழ்த்துறைத்
              தலைவராக விளங்கி இவர் ஆற்றிய பெரும்பணிகள் இலக்கிய உலகில் என்றும்
              நினைவு கூரத்தக்கன.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* ================= 01. BIRTH ================= */}
      <section className="life-milestone-chapter">
        <div className="life-milestone-inner">
          <SectionTitle tamil="பிறப்பு" english="Birth" number="01" />

          <div className="life-milestone-body">
            <p>
              தமிழண்ணல் அவர்கள் 12.08.1928 இல் சிவகங்கை மாவட்டம் நெற்குப்பை
              என்னும் சிற்றூரில் பிறந்தவர். பெற்றோர் இட்டபெயர் பெரியகருப்பன்
              என்பதாகும். இவர்தம் பெற்றோர் இராமசாமி, கல்யாணி ஆச்சியாவர்.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* ================= 02. EDUCATION ================= */}
      <section className="life-milestone-chapter">
        <div className="life-milestone-inner">
          <SectionTitle tamil="கல்வி" english="Education" number="02" />

          <div className="life-milestone-body">
            <p>
              மேலைச்சிவபுரி கணேசர் செந்தமிழ்க் கல்லூரியிலும், திருவையாறு
              அரசர் கல்லூரியிலும் பயின்று தமிழ் வித்துவான் பட்டம் பெற்றவர்
              (1948). பிறகு தன்முயற்சியால் கற்று சென்னைப் பல்கலைக்கழகத்தில்
              இளங்கலை (பொருளியல்) (1948), முதுகலைத் தமிழ் (1961) ஆகிய
              பட்டங்களைப் பெற்றவர்.
            </p>

            <p>
              மதுரை தியாகராசர் கல்லூரியில் விரிவுரையாளராகப் பணியாற்றிய
              காலத்தில் “சங்க இலக்கிய மரபுகள்” என்னும் பொருளில் ஆய்வு செய்து
              முனைவர் பட்டம் பெற்றவர் (1969). முனைவர் சி.இலக்குவனாரும்,
              முனைவர் அ.சிதம்பரநாதனாரும் இவர்தம் ஆய்வு நெறியாளர்கள்.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* ================= 03. ACADEMIC CAREER ================= */}
      <section className="life-milestone-chapter">
        <div className="life-milestone-inner">
          <SectionTitle
            tamil="ஆசிரியர் பணி"
            english="Academic Career"
            number="03"
          />

          <div className="life-milestone-body">
            <p>
              தமிழண்ணல் அவர்கள் காரைக்குடி மீ.சு.உயர்நிலைப்பள்ளியில் தம்
              ஆசிரியர் பணியைத் தொடங்கினார். இங்குத் தம் கல்லூரித் தோழர்
              கவிஞர் முடியரசனாருடன் பணிபுரிந்தமை குறிப்பிடத்தக்க ஒன்று.
            </p>

            <p>
              பதின்மூன்று ஆண்டுகள் இங்குப் பணிபுரிந்த பிறகு மதுரைத்
              தியாகராசர் கல்லூரியில் பத்தாண்டுகள் தமிழ்ப் பேராசிரியர்
              பணியாற்றினார். 1971 முதல் மதுரை காமராசர் பல்கலைக்கழகத்தில்
              விரிவுரையாளராகப் பணியாற்றியும் பின்னர் இணைப்பேராசிரியர்,
              அஞ்சல்வழிக் கல்விப் பேராசிரியர், தமிழியல்துறைப் பேராசிரியர்,
              ஒருங்கிணைப்பாளர் பணி என பல நிலைகளில் பணிபுரிந்துள்ளார்.
            </p>

            <div className="life-milestone-callout">
              <p>
                இவர்தம் பணிக்காலத்தில் மதுரை காமராசர் பல்கலைக்கழகத்தின்
                தமிழ்த்துறை சிறப்பு நிதியுதவித் துறையாக உயர்வுபெற்றது. இவர்
                மேற்பார்வையில் நாற்பதுக்கும் மேற்பட்டவர்கள் முனைவர் பட்டம்
                பெற்றுள்ளனர்.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* ================= 04. FAMILY ================= */}
      <section className="life-milestone-chapter">
        <div className="life-milestone-inner">
          <SectionTitle tamil="குடும்பம்" english="Family" number="04" />

          <div className="life-milestone-body">
            <p>
              தமிழண்ணல் அவர்களுக்கு 1954, ஆகத்து 30 இல் திருமணம் நடைபெற்றது.
              இவர்களுக்குச் சோலையப்பன், கண்ணன், மணிவண்ணன் என்ற ஆண்மக்களும்,
              கண்ணம்மை, அன்புச்செல்வி, முத்துமீனாள் என்ற பெண்மக்களும் பிறந்து
              வாழ்வாங்கு வாழ்ந்து வருகின்றனர்.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* ================= 05. HONOURS & AWARDS ================= */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-5">
          <div className="mb-12 text-center">
            <span className="inline-block border border-[#b49a6d]/70 bg-[#eee5d3]/60 px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              Recognition & Legacy
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1e2e38] md:text-5xl">
              பெற்ற சிறப்புகள்
            </h2>

            <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-[#8b3f3f]">
              — Honours & Awards
            </p>

            <div className="mx-auto mt-4 h-0.5 w-14 bg-[#8b3f3f]" />
          </div>

          <div className="life-timeline-list">
            <TimelineItem
              year="1971"
              title="குடியரசு நாள் கவியரங்கு"
              text="குடியரசு நாள் கவியரங்கில் தமிழகத்தின் சார்பில் கலந்துகொண்டு “செல்வம்” தலைப்பில் பாடிய கவிதை அனைத்திந்திய மொழிகளில் மொழிபெயர்க்கப்பட்டது."
            />

            <TimelineItem
              icon="✦"
              title="தமிழக அரசின் முதற்பரிசு"
              text="மதுரை மீனாட்சியம்மை பற்றி பாடிய பாடல்கள் தமிழக அரசின் முதற்பரிசு பெற்றன."
            />

            <TimelineItem
              icon="✦"
              title="சாகித்திய அகாதெமி"
              text="தமிழக அரசால் சாகித்திய அகாதெமியின் பொதுக்குழு உறுப்பினராகத் தேர்ந்தெடுக்கப்பட்டார்."
            />

            <TimelineItem
              year="1981–82"
              title="தேசியப் பேராசிரியர்"
              text="பல்கலைக்கழக நல்கைக்குழு தேசியப் பேராசிரியராகத் தேர்வு செய்து சிறப்புச்செய்தது."
            />

            <TimelineItem
              year="1989"
              title="திரு.வி.க. விருது"
              text="தமிழக முதல்வர் கலைஞர் கருணாநிதி திரு.வி.க. விருது வழங்கிச் சிறப்பித்தார்."
            />

            <TimelineItem
              icon="✦"
              title="உலகளாவிய கல்விப் பயணங்கள்"
              text="இலங்கை, சப்பான், அமெரிக்கா உள்ளிட்ட நாடுகளுக்கு கல்விப் பயணமாகச் சென்று கருத்தரங்குகளில் உரையாற்றினார்."
            />

            <TimelineItem
              icon="✦"
              title="சிங்கப்பூர் அரசின் அழைப்பு"
              text="சிங்கப்பூர் அரசின் அழைப்பில் தமிழ்க்கல்விக்கு பாடநூல் எழுதும் பணியில் ஈடுபட்டார்."
            />

            <TimelineItem
              year="2013"
              title="பாரிவேந்தர் பைந்தமிழ் விருது"
              text="திரு. இராமசாமி நினைவுப் பல்கலைக்கழகம் — பாரிவேந்தர் பைந்தமிழ் விருது வழங்கிச் சிறப்பித்தது."
              highlight
            />

            <TimelineItem
              icon="★"
              title="தொல்காப்பியர் விருது"
              text="இந்திய குடியரசுத் தலைவரிடமிருந்து தொல்காப்பியர் விருது பெற்றார்."
            />

            <TimelineItem
              icon="★"
              title="உலகத் தமிழ் விருது"
              text="உலகத் தமிழ் மன்றம் வழங்கிய உலகத் தமிழ் விருது."
              highlight
            />
          </div>
        </div>
      </section>

      {/* Subtle Blended Section Divider */}
      <div className="section-blend-divider" />

      {/* ================= 06. PUBLISHED WORKS ================= */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-5xl px-5">
          <div className="mb-12 text-center">
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#a47b3c]" />
              <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#8a6636]">
                Published Works
              </span>
              <div className="h-px w-10 bg-[#a47b3c]" />
            </div>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1e2e38] md:text-5xl">
              தமிழண்ணல் நூல்கள்
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-8 text-[#5c5246] md:text-base">
              தமிழண்ணல் தமிழ் இலக்கியம், இலக்கணம், திறனாய்வு, நாட்டுப்புறவியல்,
              உரை, படைப்பு எனப் பல திறத்தில் அமையும் நூல்களை வழங்கியுள்ளார்.
            </p>

            <div className="mx-auto mt-4 h-0.5 w-14 bg-[#8b3f3f]" />
          </div>

          <div className="life-works-grid">
            {books.map((book, index) => (
              <div key={book} className="life-work-entry">
                <span className="life-work-num">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <p className="life-work-title">{book}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= 07. WHERE TO FIND ================= */}
          <div className="mt-16 border border-[#b49a6d]/70 bg-[#1e2e38] p-8 shadow-md md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d8b36a]">
                  நூல்கள் கிடைக்குமிடம் · Book Availability
                </p>

                <h3 className="mt-3 font-serif text-2xl font-extrabold text-[#f3e8d0] md:text-3xl">
                  மீனாட்சி புத்தக நிலையம்
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#d6cbb8]">
                  48, தானப்ப முதலி தெரு
                  <br />
                  மதுரை – 625 001
                  <br />
                  தமிழ்நாடு
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#b49a6d]/60 text-2xl text-[#d8b36a]">
                📖
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL ARCHIVAL TRIBUTE QUOTE ================= */}
      <section className="life-final-quote-section relative z-10" aria-label="நினைவு மேற்கோள்">
        <div className="life-final-quote-inner">
          <div className="life-quote-rule-top" aria-hidden="true">
            <span className="life-quote-line" />
            <span className="life-quote-ornament">❦</span>
            <span className="life-quote-line" />
          </div>

          <blockquote className="life-quote-text">
            “தமிழால் வாழ்ந்தவர், தமிழுக்காக வாழ்ந்தவர், தமிழ் என்று வாழ்ந்தவர்.”
          </blockquote>

          <div className="life-quote-rule-bottom" aria-hidden="true">
            <span className="life-quote-line" />
            <span className="life-quote-diamond" />
            <span className="life-quote-line" />
          </div>

          <p className="life-quote-author">
            — மூதறிஞர் தமிழண்ணல் நினைவு
          </p>
        </div>
      </section>
    </main>
  );
}

function TimelineItem({
  year,
  icon,
  title,
  text,
  highlight = false,
}: {
  year?: string;
  icon?: string;
  title: string;
  text: string;
  highlight?: boolean;
}) {
  const marker = year || icon;

  return (
    <div className="life-timeline-row">
      <div
        className={`life-timeline-badge ${
          highlight ? "life-timeline-badge-highlight" : ""
        }`}
      >
        {marker}
      </div>

      <div className="life-timeline-text-col">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function SectionTitle({
  tamil,
  english,
  number,
}: {
  tamil: string;
  english: string;
  number: string;
}) {
  return (
    <div className="life-milestone-header">
      <div className="life-milestone-meta">
        <span className="life-milestone-number">{number}</span>
        <div className="life-milestone-rule" />
      </div>

      <h2 className="life-milestone-title">{tamil}</h2>
      <p className="life-milestone-english">— {english}</p>
    </div>
  );
}