const navItems = [
  { tamil: "முகப்பு", english: "Home", href: "#home" },
  { tamil: "தமிழ்வாழ்வு", english: "His Life", href: "#life" },
  { tamil: "நூல்கள்", english: "Books", href: "#books" },
  { tamil: "ஒளிப்படங்கள்", english: "Gallery", href: "#gallery" },
  { tamil: "நினைவேந்தல்", english: "Remembrance", href: "#remembrance" },
  { tamil: "தொடர்புகொள்ள", english: "Contact", href: "#contact" },
];

const books = [
  "தமிழ் இலக்கிய வரலாறு",
  "ஒப்பிலக்கிய அறிமுகம்",
  "ஆய்வுநெறிச் சாரம்",
  "தமிழ் மொழி ஆய்வுகள்",
];

const galleryItems = [
  "தமிழண்ணல்",
  "பாரிவேந்தர் விருது",
  "இலக்கிய நிகழ்வு",
  "பல்கலைக்கழக நினைவுகள்",
  "மாணவர்களுடன்",
  "தமிழ்ப் பணிகள்",
  "நூல் வெளியீடு",
  "நினைவுப் புகைப்படம்",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe3] text-[#3b332c] selection:bg-[#8b3f3f] selection:text-white">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[#c8b79c] bg-[#182b35]/95 shadow-md backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">

          <a href="#home" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c8a96b] bg-[#233b47] text-lg font-bold text-[#e6d4ad]">
              த
            </div>

            <div>
              <h1 className="text-base font-extrabold tracking-wide text-[#f2e7cf]">
                தமிழண்ணல்
              </h1>

              <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#c8b79c]">
                Thamizhannal
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.tamil}
                href={item.href}
                className="group relative text-center"
              >
                <span className="block text-xs font-bold text-[#f0e5ce] transition group-hover:text-[#d8b36a]">
                  {item.tamil}
                </span>

                <span className="mt-0.5 block text-[8px] font-semibold uppercase tracking-wider text-[#9eaaad]">
                  {item.english}
                </span>

                <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d8b36a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            aria-label="Open menu"
            className="rounded border border-[#9d8763] px-2 py-1 text-base font-bold text-[#f2e7cf] lg:hidden"
          >
            ☰
          </button>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-[#cdbfa7] bg-[#f4efe3]"
      >

        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-0 top-10 h-48 w-48 rounded-full bg-[#d8c8aa] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#e1d5bd] blur-3xl" />
        </div>

        <div className="relative mx-auto grid min-h-[520px] max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Hero Content */}
          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a47b3c]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8a6636]">
                Welcome · வரவேற்கிறோம்
              </p>
            </div>

            <h2 className="font-serif text-5xl font-extrabold leading-none tracking-tight text-[#273943] md:text-6xl">
              தமிழண்ணல்
            </h2>

            <p className="mt-3 text-base font-bold text-[#8b3f3f] md:text-lg">
              மூதறிஞர் இராம. பெரியகருப்பன்
            </p>

            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-12 bg-[#b18b4d]" />

              <span className="text-xs font-semibold tracking-[0.15em] text-[#756b60]">
                1928 — 2015
              </span>
            </div>

            <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-[#62594f]">
              தமிழ் ஆய்வுலகிலும், ஒப்பிலக்கியத் துறையிலும்,
              சங்க இலக்கிய ஆய்விலும் சிறந்து விளங்கிய
              மூதறிஞர் தமிழண்ணலின் வாழ்க்கை, படைப்புகள்,
              ஆய்வுகள் மற்றும் நினைவுகளைப் பாதுகாக்கும் தளம்.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">

              <a
                href="#books"
                className="border border-[#273943] bg-[#273943] px-5 py-2 text-xs font-bold tracking-wide text-[#f5eddd] transition hover:bg-[#8b3f3f]"
              >
                நூல்களைப் படிக்க →
              </a>

              <a
                href="#life"
                className="border border-[#8b3f3f] px-5 py-2 text-xs font-bold text-[#8b3f3f] transition hover:bg-[#8b3f3f] hover:text-white"
              >
                வாழ்க்கை வரலாறு
              </a>

            </div>

          </div>


          {/* ================= PORTRAIT ================= */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Outer decorative frame */}
              <div className="absolute -inset-4 border border-[#b49a6d]" />
              <div className="absolute -inset-7 border border-[#d1c2a8]" />

              {/* Portrait Container */}
              <div className="relative h-[440px] w-[330px] overflow-hidden border border-[#b49a6d] bg-[#d8cdb9] shadow-2xl">

                <img
                  src="/thamizhannal profile.jpg"
                  alt="மூதறிஞர் தமிழண்ணல்"
                  className="h-full w-full object-contain object-center bg-[#d8cdb9]"
                />

                {/* Bottom Information Panel */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-[#b4a58d] bg-[#182b35]/90 px-4 py-4 text-center backdrop-blur-sm">

                  <p className="text-base font-extrabold text-[#f1e5ca]">
                    மூதறிஞர் தமிழண்ணல்
                  </p>

                  <p className="mt-1 text-[10px] font-semibold text-[#c4b9a8]">
                    12.08.1928 – 29.12.2015
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= HIS LIFE ================= */}
      <section
        id="life"
        className="border-b border-[#cdbfa7] bg-[#e8dfcd] py-14"
      >

        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-10 text-center">

            <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636] shadow-sm">
              His Life · தமிழ்வாழ்வு
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
              தமிழண்ணலின் வாழ்க்கையும் பணியும்
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#8b3f3f]" />

            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-[#62594f]">
              தமிழ் மொழி, இலக்கியம் மற்றும் ஆய்வுலகிற்கு
              தமிழண்ணல் ஆற்றிய சிறப்பான பணிகளை அறிந்துகொள்ளும் பகுதி.
            </p>

          </div>


          {/* Life Cards */}
          <div className="grid gap-5 md:grid-cols-3">

            <div className="border border-[#c5b28e] bg-[#f8f3e8] p-6 shadow-sm">

              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#a47b3c]">
                01
              </span>

              <h3 className="mt-3 font-serif text-xl font-extrabold text-[#273943]">
                பிறப்பு
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#514940]">
                சிவகங்கை மாவட்டத்தின் நெற்குப்பை
                தமிழண்ணலின் பிறந்த மண்ணாகும்.
              </p>

            </div>


            <div className="border border-[#c5b28e] bg-[#f8f3e8] p-6 shadow-sm">

              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#a47b3c]">
                02
              </span>

              <h3 className="mt-3 font-serif text-xl font-extrabold text-[#273943]">
                கல்வியும் ஆய்வும்
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#514940]">
                தமிழ் கல்வி மற்றும் ஆய்வில் சிறந்து விளங்கி,
                ஒப்பிலக்கியம் மற்றும் சங்க இலக்கியத் துறைகளில்
                குறிப்பிடத்தக்க பங்களிப்புகளைச் செய்தார்.
              </p>

            </div>


            <div className="border border-[#c5b28e] bg-[#f8f3e8] p-6 shadow-sm">

              <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#a47b3c]">
                03
              </span>

              <h3 className="mt-3 font-serif text-xl font-extrabold text-[#273943]">
                தமிழ்ப்பணி
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#514940]">
                தமிழ் மொழி மற்றும் இலக்கிய வளர்ச்சிக்காக
                பல நூல்களை எழுதி, ஆய்வுப் பணியில்
                நீண்டகால பங்களிப்பை வழங்கினார்.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= AUDIO ================= */}
      <section className="border-b border-[#d2c5ae] bg-[#ebe3d2] py-14">

        <div className="mx-auto max-w-4xl px-5">

          <div className="mb-7">

            <div className="flex items-center gap-3">

              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
                Audio Archive
              </span>

              <div className="h-px flex-1 bg-[#c8b99e]" />

            </div>

            <h2 className="mt-3 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
              பழகு தமிழ் அறிவோம்
            </h2>

            <p className="mt-2 text-xs font-semibold text-[#766d62]">
              முனைவர் தமிழண்ணல் · முனைவர் சுந்தர ஆவுடையப்பன்
            </p>

          </div>


          <div className="border border-[#c8b99e] bg-[#f8f3e8] p-5 shadow-sm md:p-7">

            <p className="text-sm font-medium leading-7 text-[#514940]">
              The HINDU-வில் வாரந்தோறும் வெளிவந்த “Know your English”
              மற்றும் தினமணி-யில் தமிழண்ணல் எழுதி வாரந்தோறும் வெளிவந்த
              “உங்கள் தமிழைத் தெரிந்து கொள்ளுங்கள்” வழியில் வகுக்கப்பட்டது.
            </p>

            <p className="mt-4 text-sm font-medium leading-7 text-[#514940]">
              தமிழ் மொழியில் ஏற்படும் ஐயங்களை விளக்கும் கலந்துரையாடல்.
              மதுரை வானொலியில் 49 வாரங்கள் தொடர்ந்து ஒலிபரப்பானதின்
              முழு ஒலிவடிவம்.
            </p>


            <div className="mt-5 border-l-4 border-[#a47b3c] bg-[#eee5d3] p-4">

              <p className="text-xs font-extrabold text-[#8b3f3f]">
                எடுத்துக்காட்டு
              </p>

              <p className="mt-2 text-sm font-medium leading-6 text-[#665d53]">
                திருவளர் செல்வன் அல்லது திருவளர்ச் செல்வன்,
                தொலைபேசி அல்லது தொலைப்பேசி,
                கடைபிடிக்க வேண்டும் அல்லது கடைப்பிடிக்க வேண்டும்.
              </p>

            </div>


            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between">

                <p className="text-sm font-extrabold text-[#273943]">
                  பழகு தமிழ் அறிவோம்
                </p>

                <span className="text-[9px] font-bold text-[#8a6636]">
                  10 மணி நேரம்
                </span>

              </div>

              <audio controls className="h-9 w-full">
                <source
                  src="/public/audio/pazhaguithamizh-arivom.mp3"
                  type="audio/mpeg"
                />
                உங்கள் உலாவி audio element-ஐ ஆதரிக்கவில்லை.
              </audio>

            </div>

          </div>

        </div>
      </section>


      {/* ================= VIDEO ================= */}
      <section className="bg-[#f4efe3] py-14">

        <div className="mx-auto max-w-5xl px-5">

          <div className="mb-7 text-center">

            <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              Visual Archive
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
              பாரிவேந்தர் பைந்தமிழ் விருது 2013
            </h2>

            <div className="mx-auto mt-3 h-1 w-16 bg-[#8b3f3f]" />

            <p className="mt-3 text-xs font-semibold text-[#71675c]">
              திரு. இராமசாமி நினைவுப் பல்கலைக்கழகம் —
              மூதறிஞர் தமிழண்ணல்
            </p>

          </div>


          <div className="border border-[#bda986] bg-[#263942] p-2 shadow-xl">

            <div className="aspect-video overflow-hidden bg-black">

              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/KWmMQiGJEd0"
                title="பாரிவேந்தர் பைந்தமிழ் விருது 2013 — மூதறிஞர் தமிழண்ணல்"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= ARTICLE ================= */}
      <section
        id="article"
        className="border-y border-[#cdbfa7] bg-[#e8dfcd] py-14"
      >

        <div className="mx-auto max-w-4xl px-5">

          <div className="mb-8 text-center">

            <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              Featured Article
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-[#273943] md:text-4xl">
              தமிழாக வாழ்ந்த அண்ணலுக்கு அகவை தொன்னூறு
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#8b3f3f]" />

            <p className="mt-4 text-sm font-bold text-[#8b3f3f]">
              முனைவர் மு.பழனியப்பன்
            </p>

            <p className="mt-1 text-xs font-semibold leading-5 text-[#71675c]">
              தமிழ்த்துறைத் தலைவர், அரசு கலை மற்றும் அறிவியல் கல்லூரி,
              திருவாடானை
            </p>

          </div>


          <article className="border border-[#c9bba3] bg-[#f8f3e8] px-5 py-7 shadow-md md:px-8 md:py-9">

            <div className="mb-7 border-b border-[#d4c8b4] pb-5">

              <span className="border-l-4 border-[#8b3f3f] pl-3 text-[10px] font-extrabold tracking-[0.2em] text-[#a47b3c]">
                01 — வாழ்க்கையும் பணியும்
              </span>

            </div>


            <p className="text-sm font-medium leading-7 text-[#514940] md:text-base">
              சிவகங்கை மாவட்டத்தின் சிற்றூர் நெற்குப்பை. ஆனால் தமிழ் இலக்கிய
              வரலாற்றில் குறிக்கத்தக்கப் பணிகளை ஆற்றிய பல இலக்கியவாணர்களைக்
              கொண்ட பேரூர் இவ்வூராகும். செட்டிநாடும் செந்தமிழும் என்ற நூலினை
              எழுதிய சோம.லெ, தினமணியின் ஆசிரியராக விளங்கிய சம்பந்தம்
              (இராம.திருஞானசம்பந்தம்), முதுபெரும் தமிழறிஞர் தமிழண்ணல்,
              அண்ணாமலைப் பல்கலைக்கழகத்தின் இயங்கு சக்தியாக விளங்கிய
              லெ. ப. கரு. இராமநாதன் செட்டியார் போன்ற பலர் பிறந்த மண்
              நெற்குப்பையாகும்.
            </p>


            <p className="mt-5 text-sm font-medium leading-7 text-[#514940] md:text-base">
              அங்கு பிறந்த இராம.பெரியகருப்பன் என்ற தமிழண்ணல் தமிழ் ஆய்வுலகிலும்,
              ஒப்பிலக்கியத்துறையிலும், சங்க இலக்கிய தனித் திறன் ஆய்விலும்
              சிறந்து விளங்கியவர். அவர் எழுதிய நூல்களின் எண்ணிக்கை அவர்
              வாழ்ந்த ஆண்டுகளைப் போலவே எண்பத்தெட்டினைத் தொடும்.
            </p>


            <p className="mt-5 text-sm font-medium leading-7 text-[#514940] md:text-base">
              தமிழண்ணல் செட்டிநாட்டு வழக்கப்படி இராமசாமிச் செட்டியார்
              கல்யாணி ஆச்சி ஆகியோருக்குப் பிள்ளையாக வந்தவர். தமிழ் பண்டிதர்
              பட்டம் பெற்று அதன் பின் பொருளாதரப் பட்டம் பெற்று அதன்பின் தமிழ்
              உயர்கல்வி பெற்று முனைவர் பட்டம் பெற்றவர்.
            </p>


            {/* POEM */}
            <div className="my-8 border-y border-[#c5b28e] bg-[#eee5d3] px-5 py-7 md:px-8">

              <p className="mb-4 text-center text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8a6636]">
                கவிதை
              </p>

              <p className="whitespace-pre-line text-center font-serif text-sm font-semibold leading-7 text-[#514940] md:text-base">
                {`கல்யாணி மகனா என்று கண்டவர் கேட்கும் போதில்
மல்குமே மகிழ்ச்சி அம்மா மாட்சிமை மிக்காய் என்றும்
வல்வழி அறியாய் கொண்டோன் வாழ்வதற்காக வாழ்ந்தாய்
நல்வழி ஒன்றே கண்டாய் நலிந்தனை அம்மா அம்மா
தாய் செய்த நல்லறங்கள் தனையனைச் சாரும் என்று
சேய்களுக்கு எல்லாம் சொல்ல சிறப்புற வாழ்கிறேன் நான்
வாய்மையே அறமே அன்பே வாழ்விக்கும் தெய்வமே என்றன்
தாய்மையே அம்மா அம்மா தாளினை வணங்குகிறேன்`}
              </p>

            </div>


            {/* RESEARCH QUOTE */}
            <div className="my-7 border-l-4 border-[#8b3f3f] bg-[#eee7d9] p-5 md:p-7">

              <p className="whitespace-pre-line text-center font-serif text-sm font-medium italic leading-7 text-[#514940] md:text-base">
                {`"கொங்குதேர் வாழ்க்கை அஞ்சிறைத் தும்பியாய்
எங்கு தேர்ந்தாயினும் அறிவினை நாடுதல்
இடம், பொருள், கருதாது, ஆய்வினைப் போற்றுதல்
தவறுறின் ஒப்புதல், பிழையினைக் காணின்
தயங்காது மறுத்தல், தற்சார்பில்லா
நடுநிலை மனத்துடன் நாடுதல்
விடுதலை உணர்வாய் ஆய்வறம் விளையுமே"`}
              </p>

            </div>


            {/* THIRUKKURAL */}
            <div className="my-8 border border-[#a47b3c] bg-[#273943] px-5 py-7 text-center md:px-8">

              <p className="mb-4 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#d6bb82]">
                திருக்குறள்
              </p>

              <p className="whitespace-pre-line font-serif text-base font-semibold leading-7 text-[#f3e8d0] md:text-lg">
                {`புறந்தூய்மை நீரான் அமையும்
அகந்தூய்மை வாய்மையால் காணப் படும்`}
              </p>

            </div>


            {/* WORD EXPLANATION */}
            <div className="my-8 border border-[#c5b28e] bg-[#eee5d3] p-5 md:p-7">

              <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#8a6636]">
                சொல் நுட்பம்
              </p>

              <p className="text-sm font-medium leading-7 text-[#514940] md:text-base">
                “மொட்டு நிலையிலிருந்து முழுமலர்ச்சி பெற்றுத் தன் மணத்தைச்
                சுற்றுப் புறமெங்கும் வீசச் செய்யும் மலரைப் போன்றே காதலும்
                காதலர்தம் உள்ளத்தில் வேர்கொண்டு, படிப்படியாக கிளைபரப்பிப்
                பின்பு புறத்தார்க்குப் புலனாகி, திருமணத்தில் மகிழ்வுற முடிகிறது”
                என்று இரு பொருள்களுக்கு ஒருசேரச் சொல் பொருத்தம் காண்கிறார்
                தமிழண்ணல்.
              </p>

            </div>


            <div className="mt-8 border-t border-[#d0c2ac] pt-7">

              <p className="font-serif text-base font-semibold leading-7 text-[#273943] md:text-lg">
                அவரின் நூற்றாண்டு வர உள்ளது. இந்தப் பத்தாண்டுகளில் அவரின்
                மாணவர்கள், உறவினர்கள், தமிழறிஞர்கள் இணைந்து ஒரு நெடுந்திட்டம்
                உருவாக்கி அவரின் ஆய்வுப்பாதையை அடுத்த தலைமுறைக்குக் கொண்டு
                செல்ல ஆவன செய்யவேண்டும்.
              </p>

            </div>

          </article>

        </div>
      </section>


      {/* ================= BOOKS ================= */}
      <section id="books" className="bg-[#f4efe3] py-14">

        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-8 text-center">

            <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              Literary Archive
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
              நூல்கள்
            </h2>

            <div className="mx-auto mt-3 h-1 w-16 bg-[#8b3f3f]" />

            <p className="mx-auto mt-3 max-w-xl text-xs font-semibold leading-6 text-[#71675c]">
              தமிழண்ணல் எழுதிய மற்றும் தொகுத்த நூல்களின் தொகுப்பு.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {books.map((book, index) => (

              <div
                key={book}
                className="group border border-[#cdbfa7] bg-[#eee5d3] p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="relative flex h-48 items-center justify-center overflow-hidden border border-[#b8a78c] bg-[#d8cdb9]">

                  <div className="h-40 w-28 border border-[#8e7552] bg-[#273943] p-3 text-center shadow-lg">

                    <div className="flex h-full flex-col justify-between border border-[#bca36e] p-2">

                      <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#d9c28e]">
                        Thamizhannal
                      </span>

                      <span className="font-serif text-xs font-bold leading-5 text-[#f1e6d0]">
                        {book}
                      </span>

                      <span className="text-[7px] font-semibold text-[#c7bca7]">
                        தமிழ் இலக்கியம்
                      </span>

                    </div>

                  </div>

                </div>

                <div className="mt-3">

                  <span className="text-[9px] font-extrabold text-[#a47b3c]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-1 font-serif text-sm font-extrabold text-[#273943]">
                    {book}
                  </h3>

                  <button className="mt-2 text-xs font-bold text-[#8b3f3f] transition group-hover:text-[#a47b3c]">
                    மேலும் அறிக →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section
        id="gallery"
        className="border-y border-[#cdbfa7] bg-[#e8dfcd] py-14"
      >

        <div className="mx-auto max-w-6xl px-5">

          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">

            <div>

              <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
                Photo Archive
              </span>

              <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
                ஒளிப்படங்கள்
              </h2>

              <div className="mt-3 h-1 w-16 bg-[#8b3f3f]" />

            </div>

            <p className="max-w-sm text-xs font-semibold leading-6 text-[#756b60]">
              தமிழண்ணலின் வாழ்க்கை, பணிகள் மற்றும் நினைவுகளுடன் தொடர்புடைய
              ஒளிப்படங்களின் காப்பகம்.
            </p>

          </div>


          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">

            {galleryItems.map((item, index) => (

              <div
                key={item}
                className={`group relative overflow-hidden border border-[#bdae94] bg-[#d2c6b1] ${
                  index === 0 || index === 5
                    ? "md:row-span-2"
                    : ""
                }`}
              >

                <div className="flex aspect-square items-center justify-center bg-[#c9bda8]">

                  <div className="text-center text-[#827565]">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center border border-[#a9997e] text-lg font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="mt-2 px-2 text-xs font-bold">
                      {item}
                    </p>

                  </div>

                </div>

                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#182b35]/90 px-3 py-2 transition group-hover:translate-y-0">

                  <p className="text-[10px] font-bold text-[#f0e3c9]">
                    {item}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= REMEMBRANCE ================= */}
      <section
        id="remembrance"
        className="relative overflow-hidden bg-[#273943] py-16 text-[#f2e7cf]"
      >

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8e7958]/30" />

        <div className="relative mx-auto max-w-3xl px-5 text-center">

          <span className="inline-block border border-[#b49a6d] bg-[#344a53] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#d1b26e]">
            In Remembrance
          </span>

          <h2 className="mt-5 font-serif text-3xl font-extrabold md:text-4xl">
            நினைவேந்தல்
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 bg-[#b18b4d]" />

          <p className="mt-5 text-sm font-medium leading-7 text-[#d3c8b6]">
            தமிழ் மொழிக்கும், தமிழ் இலக்கியத்திற்கும்,
            ஆய்வுலகிற்கும் தமிழண்ணல் ஆற்றிய பணிகளை நினைவுகூர்ந்து,
            அவரது அறிவுப்பாதையை அடுத்த தலைமுறைக்கும் கொண்டு செல்வோம்.
          </p>

          <p className="mt-6 font-serif text-lg font-extrabold tracking-wider text-[#e1c98f]">
            12.08.1928 — 29.12.2015
          </p>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-[#f4efe3] py-14">

        <div className="mx-auto max-w-3xl px-5 text-center">

          <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
            Get in Touch
          </span>

          <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
            தொடர்புகொள்ள
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 bg-[#8b3f3f]" />

          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-7 text-[#71675c]">
            தமிழண்ணல் தொடர்பான தகவல்கள், நூல்கள், ஒளிப்படங்கள் அல்லது
            நினைவுகளைப் பகிர விரும்பினால் எங்களைத் தொடர்புகொள்ளுங்கள்.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block border border-[#8b3f3f] bg-[#8b3f3f] px-6 py-2 text-xs font-bold tracking-wide text-white transition hover:bg-[#273943]"
          >
            தொடர்புகொள்ள →
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#53636a] bg-[#182b35] text-[#d9d0c0]">

        <div className="mx-auto max-w-6xl px-5 py-9">

          <div className="grid gap-7 md:grid-cols-3">

            {/* Brand */}
            <div>

              <div className="flex items-center gap-2.5">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b99b61] text-base font-extrabold text-[#e4ce9c]">
                  த
                </div>

                <div>

                  <h3 className="font-serif text-lg font-extrabold text-[#f1e6d0]">
                    தமிழண்ணல்
                  </h3>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9ea7a8]">
                    Thamizhannal
                  </p>

                </div>

              </div>

              <p className="mt-3 max-w-sm text-xs font-semibold leading-6 text-[#aeb6b5]">
                மூதறிஞர் இராம. பெரியகருப்பன்
                <br />
                12.08.1928 – 29.12.2015
              </p>

            </div>


            {/* Quick Links */}
            <div>

              <h4 className="border-l-4 border-[#d8b875] pl-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d8b875]">
                Quick Links
              </h4>

              <div className="mt-3 grid grid-cols-2 gap-y-2">

                {navItems.map((item) => (

                  <a
                    key={item.tamil}
                    href={item.href}
                    className="text-xs font-semibold text-[#b7bfbe] transition hover:text-[#e0c88e]"
                  >
                    {item.tamil}
                  </a>

                ))}

              </div>

            </div>


            {/* Contact */}
            <div>

              <h4 className="border-l-4 border-[#d8b875] pl-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#d8b875]">
                Contact
              </h4>

              <p className="mt-3 text-xs font-semibold leading-6 text-[#aeb6b5]">
                தமிழண்ணல் தொடர்பான தகவல்கள்,
                நூல்கள், ஒளிப்படங்கள் அல்லது நினைவுகளைப்
                பகிர விரும்பினால் எங்களைத் தொடர்புகொள்ளுங்கள்.
              </p>

              <a
                href="#contact"
                className="mt-3 inline-block text-xs font-bold text-[#e0c88e] hover:text-white"
              >
                Send a message →
              </a>

            </div>

          </div>


          <div className="mt-7 border-t border-[#43565e] pt-5 text-center">

            <p className="text-[9px] font-semibold text-[#8f9a9b]">
              © 2026 தமிழண்ணல் — Thamizhannal Tamil Development Foundation.
              All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}