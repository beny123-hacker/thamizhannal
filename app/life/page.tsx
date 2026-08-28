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
    <main className="min-h-screen bg-[#f4efe3] pb-24 text-[#3b332c]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-[#cdbfa7] bg-[#f4efe3]">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-[#d8c8aa] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#e1d5bd] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#a47b3c]" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#8a6636]">
              Biography
            </span>

            <div className="h-px w-10 bg-[#a47b3c]" />
          </div>

          <h1 className="mt-5 font-serif text-5xl font-extrabold tracking-tight text-[#273943] md:text-6xl">
            தமிழ்வாழ்வு
          </h1>

          <p className="mt-4 text-sm font-bold tracking-wide text-[#8b3f3f] md:text-base">
            His Life — Tamil Scholar & Author
          </p>

          <div className="mx-auto mt-6 h-1 w-16 bg-[#8b3f3f]" />

          <p className="mt-5 text-xs font-semibold text-[#766d62]">
            நன்றி: முனைவர் மு.இளங்கோவன்
          </p>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="bg-[#ebe3d2] py-14">
        <div className="mx-auto max-w-4xl px-5">
          <div className="border border-[#c8b99e] bg-[#f8f3e8] p-6 shadow-sm md:p-10">
            <div className="mb-5 border-l-4 border-[#8b3f3f] pl-4">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
                அறிமுகம்
              </p>
            </div>

            <p className="text-base font-medium leading-8 text-[#514940] md:text-lg">
              தமிழறிஞர்களால் “தமிழண்ணல்” என அழைக்கப்படும் இராம. பெரியகருப்பன்
              அவர்கள் இருபதாம் நூற்றாண்டின் தமிழ் ஆளுமைகளுள் குறிப்பிடத்
              தகுந்தவர். மதுரை காமராசர் பல்கலைக்கழகத்தின் தமிழ்த்துறைத்
              தலைவராக விளங்கி இவர் ஆற்றிய பெரும்பணிகள் இலக்கிய உலகில் என்றும்
              நினைவு கூரத்தக்கன.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BIRTH ================= */}
      <section className="border-t border-[#d2c5ae] bg-[#f4efe3] py-14">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle tamil="பிறப்பு" english="Birth" number="01" />

          <div className="border border-[#c9bba3] bg-[#f8f3e8] p-6 shadow-sm md:p-8">
            <p className="text-sm font-medium leading-8 text-[#514940] md:text-base">
              தமிழண்ணல் அவர்கள் 12.08.1928 இல் சிவகங்கை மாவட்டம் நெற்குப்பை
              என்னும் சிற்றூரில் பிறந்தவர். பெற்றோர் இட்டபெயர் பெரியகருப்பன்
              என்பதாகும். இவர்தம் பெற்றோர் இராமசாமி, கல்யாணி ஆச்சியாவர்.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="bg-[#e8dfcd] py-14">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle tamil="கல்வி" english="Education" number="02" />

          <div className="space-y-5 border border-[#c9bba3] bg-[#f8f3e8] p-6 shadow-sm md:p-8">
            <p className="text-sm font-medium leading-8 text-[#514940] md:text-base">
              மேலைச்சிவபுரி கணேசர் செந்தமிழ்க் கல்லூரியிலும், திருவையாறு
              அரசர் கல்லூரியிலும் பயின்று தமிழ் வித்துவான் பட்டம் பெற்றவர்
              (1948). பிறகு தன்முயற்சியால் கற்று சென்னைப் பல்கலைக்கழகத்தில்
              இளங்கலை (பொருளியல்) (1948), முதுகலைத் தமிழ் (1961) ஆகிய
              பட்டங்களைப் பெற்றவர்.
            </p>

            <p className="text-sm font-medium leading-8 text-[#514940] md:text-base">
              மதுரை தியாகராசர் கல்லூரியில் விரிவுரையாளராகப் பணியாற்றிய
              காலத்தில் “சங்க இலக்கிய மரபுகள்” என்னும் பொருளில் ஆய்வு செய்து
              முனைவர் பட்டம் பெற்றவர் (1969). முனைவர் சி.இலக்குவனாரும்,
              முனைவர் அ.சிதம்பரநாதனாரும் இவர்தம் ஆய்வு நெறியாளர்கள்.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC CAREER ================= */}
      <section className="bg-[#f4efe3] py-14">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle
            tamil="ஆசிரியர் பணி"
            english="Academic Career"
            number="03"
          />

          <div className="space-y-5 border border-[#c9bba3] bg-[#f8f3e8] p-6 shadow-sm md:p-8">
            <p className="text-sm font-medium leading-8 text-[#514940] md:text-base">
              தமிழண்ணல் அவர்கள் காரைக்குடி மீ.சு.உயர்நிலைப்பள்ளியில் தம்
              ஆசிரியர் பணியைத் தொடங்கினார். இங்குத் தம் கல்லூரித் தோழர்
              கவிஞர் முடியரசனாருடன் பணிபுரிந்தமை குறிப்பிடத்தக்க ஒன்று.
            </p>

            <p className="text-sm font-medium leading-8 text-[#514940] md:text-base">
              பதின்மூன்று ஆண்டுகள் இங்குப் பணிபுரிந்த பிறகு மதுரைத்
              தியாகராசர் கல்லூரியில் பத்தாண்டுகள் தமிழ்ப் பேராசிரியர்
              பணியாற்றினார். 1971 முதல் மதுரை காமராசர் பல்கலைக்கழகத்தில்
              விரிவுரையாளராகப் பணியாற்றியும் பின்னர் இணைப்பேராசிரியர்,
              அஞ்சல்வழிக் கல்விப் பேராசிரியர், தமிழியல்துறைப் பேராசிரியர்,
              ஒருங்கிணைப்பாளர் பணி என பல நிலைகளில் பணிபுரிந்துள்ளார்.
            </p>

            <div className="border-l-4 border-[#a47b3c] bg-[#eee5d3] p-5">
              <p className="text-sm font-medium leading-8 text-[#514940] md:text-base">
                இவர்தம் பணிக்காலத்தில் மதுரை காமராசர் பல்கலைக்கழகத்தின்
                தமிழ்த்துறை சிறப்பு நிதியுதவித் துறையாக உயர்வுபெற்றது. இவர்
                மேற்பார்வையில் நாற்பதுக்கும் மேற்பட்டவர்கள் முனைவர் பட்டம்
                பெற்றுள்ளனர்.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAMILY ================= */}
      <section className="bg-[#e8dfcd] py-14">
        <div className="mx-auto max-w-4xl px-5">
          <SectionTitle tamil="குடும்பம்" english="Family" number="04" />

          <div className="border border-[#c9bba3] bg-[#f8f3e8] p-6 shadow-sm md:p-8">
            <p className="text-sm font-medium leading-8 text-[#514940] md:text-base">
              தமிழண்ணல் அவர்களுக்கு 1954, ஆகத்து 30 இல் திருமணம் நடைபெற்றது.
              இவர்களுக்குச் சோலையப்பன், கண்ணன், மணிவண்ணன் என்ற ஆண்மக்களும்,
              கண்ணம்மை, அன்புச்செல்வி, முத்துமீனாள் என்ற பெண்மக்களும் பிறந்து
              வாழ்வாங்கு வாழ்ந்து வருகின்றனர்.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HONOURS & AWARDS ================= */}
      <section className="border-t border-[#d2c5ae] bg-[#f4efe3] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              Recognition & Legacy
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#273943] md:text-5xl">
              பெற்ற சிறப்புகள்
            </h2>

            <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-[#8b3f3f]">
              — Honours & Awards
            </p>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#8b3f3f]" />
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-[47px] top-10 hidden w-px bg-[#bfae91] md:block" />

            <div className="space-y-8">
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
                dark
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PUBLISHED WORKS ================= */}
      <section className="border-t border-[#d2c5ae] bg-[#e8dfcd] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mx-auto flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#a47b3c]" />

              <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#8a6636]">
                Published Works
              </span>

              <div className="h-px w-10 bg-[#a47b3c]" />
            </div>

            <h2 className="mt-5 font-serif text-4xl font-extrabold text-[#273943] md:text-5xl">
              தமிழண்ணல் நூல்கள்
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-8 text-[#62594f] md:text-base">
              தமிழண்ணல் தமிழ் இலக்கியம், இலக்கணம், திறனாய்வு, நாட்டுப்புறவியல்,
              உரை, படைப்பு எனப் பல திறத்தில் அமையும் நூல்களை வழங்கியுள்ளார்.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 bg-[#8b3f3f]" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {books.map((book, index) => (
              <div
                key={book}
                className="group flex items-start gap-4 border border-[#c9bba3] bg-[#f8f3e8] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b49a6d] bg-[#eee5d3] text-sm font-extrabold text-[#8b3f3f]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#a47b3c]">
                    நூல்
                  </span>

                  <p className="mt-1 text-sm font-bold leading-7 text-[#273943]">
                    {book}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= WHERE TO FIND ================= */}
          <div className="mt-16 border border-[#b49a6d] bg-[#273943] p-8 shadow-lg md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#d8b36a]">
                  நூல்கள் கிடைக்குமிடம்
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

              <div className="flex h-20 w-20 items-center justify-center self-start rounded-full border border-[#b49a6d] text-3xl text-[#d8b36a] md:self-auto">
                📖
              </div>
            </div>
          </div>
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
  dark = false,
}: {
  year?: string;
  icon?: string;
  title: string;
  text: string;
  highlight?: boolean;
  dark?: boolean;
}) {
  const marker = year || icon;

  return (
    <div className="relative flex gap-6 md:gap-8">
      <div className="relative z-10 hidden w-24 shrink-0 items-center justify-center md:flex">
        <div
          className={`flex min-h-20 w-20 items-center justify-center rounded-full border-4 border-[#f4efe3] px-2 text-center font-extrabold shadow-md ${
            year
              ? "bg-[#8b3f3f] text-sm text-white"
              : "bg-[#273943] text-xl text-[#e6d4ad]"
          }`}
        >
          {marker}
        </div>
      </div>

      <div
        className={`flex-1 border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-7 ${
          dark
            ? "border-[#b49a6d] bg-[#273943]"
            : highlight
              ? "border-[#b49a6d] bg-[#eee5d3]"
              : "border-[#c9bba3] bg-[#f8f3e8]"
        }`}
      >
        {year && (
          <span className="mb-2 inline-block border border-[#b49a6d] bg-[#eee5d3] px-3 py-1 text-xs font-extrabold text-[#8a6636] md:hidden">
            {year}
          </span>
        )}

        <h3
          className={`text-lg font-extrabold ${
            dark ? "text-[#f3e8d0]" : "text-[#273943]"
          }`}
        >
          {title}
        </h3>

        <div
          className={`mt-3 h-px w-12 ${
            dark ? "bg-[#b49a6d]" : "bg-[#a47b3c]"
          }`}
        />

        <p
          className={`mt-4 text-sm font-medium leading-7 ${
            dark ? "text-[#d6cbb8]" : "text-[#514940]"
          }`}
        >
          {text}
        </p>
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
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#8a6636]">
          {number}
        </span>

        <div className="h-px flex-1 bg-[#c8b99e]" />
      </div>

      <h2 className="mt-3 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
        {tamil}
      </h2>

      <p className="mt-1 text-xs font-bold tracking-wide text-[#8b3f3f]">
        — {english}
      </p>
    </div>
  );
}