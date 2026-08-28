import "./home.css";

export default function Home() {
  return (
    <main className="home-page min-h-screen overflow-hidden bg-[#f4efe3] text-[#3b332c]">
      {/* =========================================================
          HOME HERO
      ========================================================== */}
      <section className="home-hero tamil-hero">
        {/* Paper texture */}
        <div className="hero-paper-texture" />

        {/* =========================================================
            TEMPLE BACKGROUND
        ========================================================== */}
        <div className="home-temple temple-background">
          <img
            src="/images/temple.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="home-temple-overlay temple-fade" />

        {/* Very subtle Tamil manuscript text */}
        <div className="hero-manuscript hero-manuscript-one" aria-hidden="true">
          தமிழ் · மொழி · இலக்கியம் · ஆய்வு
        </div>

        <div className="hero-manuscript hero-manuscript-two" aria-hidden="true">
          தமிழண்ணல் · சிந்தனை · பண்பாடு
        </div>

        <div className="hero-manuscript hero-manuscript-three" aria-hidden="true">
          அறிவு · ஆய்வு · தமிழ்
        </div>

        {/* =========================================================
            RIGHT PORTRAIT ATMOSPHERE
        ========================================================== */}
        <div className="home-portrait-bg" />
        <div className="home-portrait-glow" />

        {/* Decorative circles */}
        <div className="hero-circle hero-circle-one" />
        <div className="hero-circle hero-circle-two" />
        <div className="hero-circle hero-circle-three" />

        {/* =========================================================
            HERO CONTENT
        ========================================================== */}
        <div className="home-hero-container">
          {/* ================= TEXT ================= */}
          <div className="home-hero-content hero-content">
            <div className="home-welcome">
              <span />
              <p>WELCOME · வரவேற்கிறோம்</p>
            </div>

            <h1 className="hero-title">தமிழண்ணல்</h1>

            <p className="home-hero-subtitle hero-subtitle">
              மூதறிஞர் இராம. பெரியகருப்பன்
            </p>

            <div className="home-year">
              <span />
              <p>1928 — 2015</p>
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
          </div>

          {/* ================= PORTRAIT ================= */}
          <div className="home-portrait-area portrait-area">
            {/* Golden atmosphere */}
            <div className="portrait-light portrait-light-one" />
            <div className="portrait-light portrait-light-two" />

            <div className="portrait-container">
              {/* Gold aura */}
              <div className="portrait-aura" />
              <div className="portrait-sun" />

              {/* Rings */}
              <div className="portrait-rings" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              {/* Portrait frame */}
              <div className="portrait-frame">
                <div className="portrait-frame-inner">
                  <img
                    src="/images/thamizhannal-profile.png"
                    alt="மூதறிஞர் தமிழண்ணல்"
                    className="hero-portrait"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Tamil letter */}
            <div
              className="portrait-tamil-mark portrait-writing"
              aria-hidden="true"
            >
              த
            </div>
          </div>
        </div>

        {/* Bottom fade to audio section */}
        <div className="hero-bottom-glow" />
      </section>

      {/* =========================================================
          AUDIO
      ========================================================== */}
      <section className="tamil-section tamil-audio-section border-b border-[#d2c5ae] bg-[#ebe3d2] py-14">
        <div className="section-side-ornament section-side-ornament-left">
          ❖
        </div>

        <div className="section-side-ornament section-side-ornament-right">
          ✒
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5">
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

          <div className="tamil-paper-card border border-[#c8b99e] bg-[#f8f3e8] p-5 shadow-sm md:p-7">
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
                திருவளர் செல்வன் அல்லது திருவளர்ச் செல்வன், தொலைபேசி
                அல்லது தொலைப்பேசி, கடைபிடிக்க வேண்டும் அல்லது
                கடைப்பிடிக்க வேண்டும்.
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
                  src="/audio/pazhagu-thamizh-arivom.mp3"
                  type="audio/mpeg"
                />
                உங்கள் உலாவி audio element-ஐ ஆதரிக்கவில்லை.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VIDEO
      ========================================================== */}
      <section className="tamil-section bg-[#f4efe3] py-14">
        <div className="relative z-10 mx-auto max-w-5xl px-5">
          <div className="mb-7 text-center">
            <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              Visual Archive
            </span>

            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#273943] md:text-4xl">
              பாரிவேந்தர் பைந்தமிழ் விருது 2013
            </h2>

            <div className="mx-auto mt-3 h-1 w-16 bg-[#8b3f3f]" />

            <p className="mt-3 text-xs font-semibold text-[#71675c]">
              திரு. இராமசாமி நினைவுப் பல்கலைக்கழகம் — மூதறிஞர் தமிழண்ணல்
            </p>
          </div>

          <div className="tamil-video-frame border border-[#bda986] bg-[#263942] p-2 shadow-xl">
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
      {/* =========================================================
          FEATURED ARTICLE
      ========================================================== */}
      <section className="tamil-article-section border-y border-[#cdbfa7] bg-[#e8dfcd] py-14">
        <div className="relative z-10 mx-auto max-w-4xl px-5">
          <div className="mb-10 text-center">
            <span className="inline-block border border-[#b49a6d] bg-[#eee5d3] px-4 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#8a6636]">
              Featured Article
            </span>

            <h2 className="mt-4 font-serif text-4xl font-extrabold text-[#273943] md:text-5xl">
              கட்டுரை
            </h2>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b3f3f]">
              Article
            </p>

            <div className="mx-auto mt-4 h-1 w-16 bg-[#8b3f3f]" />
          </div>

          <article className="tamil-article-paper border border-[#c9bba3] bg-[#f8f3e8] px-5 py-7 shadow-md md:px-8 md:py-10">
            <header className="border-b border-[#d4c8b4] pb-7 text-center">
              <h3 className="font-serif text-3xl font-extrabold leading-tight text-[#273943] md:text-4xl">
                தமிழாக வாழ்ந்த அண்ணலுக்கு அகவை தொன்னூறு
              </h3>

              <div className="mx-auto mt-4 h-px w-24 bg-[#b18b4d]" />

              <p className="mt-5 text-sm font-bold text-[#8b3f3f]">
                முனைவர் மு.பழனியப்பன்
              </p>

              <p className="mt-2 text-xs font-semibold leading-6 text-[#71675c]">
                தமிழ்த்துறைத் தலைவர், அரசு கலை மற்றும் அறிவியல் கல்லூரி,
                திருவாடானை
              </p>
            </header>

            <div className="mt-8 space-y-5 text-sm font-medium leading-8 text-[#514940] md:text-base">
              <p>
                சிவகங்கை மாவட்டத்தின் சிற்றூர் நெற்குப்பை. ஆனால் தமிழ் இலக்கிய
                வரலாற்றில் குறிக்கத்தக்கப் பணிகளை ஆற்றிய பல இலக்கியவாணர்களைக்
                கொண்ட பேரூர் இவ்வூராகும்.
              </p>

              <p>
                அங்கு பிறந்த இராம.பெரியகருப்பன் என்ற தமிழண்ணல் தமிழ்
                ஆய்வுலகிலும், ஒப்பிலக்கியத்துறையிலும், சங்க இலக்கிய தனித் திறன்
                ஆய்விலும் சிறந்து விளங்கியவர்.
              </p>

              <p>
                தமிழண்ணல் செட்டிநாட்டு வழக்கப்படி இராமசாமிச் செட்டியார்
                கல்யாணி ஆச்சி ஆகியோருக்குப் பிள்ளையாக வந்தவர். தமிழ் பண்டிதர்
                பட்டம் பெற்று அதன் பின் பொருளாதாரப் பட்டம் பெற்று அதன்பின் தமிழ்
                உயர்கல்வி பெற்று முனைவர் பட்டம் பெற்றவர்.
              </p>

              <div className="my-8 border-y border-[#c5b28e] bg-[#eee5d3] px-5 py-7 md:px-8">
                <p className="mb-5 text-center text-[10px] font-extrabold tracking-[0.25em] text-[#8a6636]">
                  கவிதை
                </p>

                <p className="whitespace-pre-line text-center font-serif text-sm font-semibold leading-8 text-[#514940] md:text-base">
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

              <p>
                தமிழண்ணல் நடுநிலையாளர். ஆய்வுக் கருத்துக்களை நுணுகித் தேடும்
                தும்பி. தவறு செய்தால் வருந்தும் நெஞ்சமும், பிழை கண்டால்
                பொறுக்காது எழும் உரமும் அவரின் ஆய்வியல் நெறியாகும்.
              </p>

              <div className="my-8 border-l-4 border-[#8b3f3f] bg-[#eee7d9] px-5 py-7 md:px-8">
                <p className="whitespace-pre-line text-center font-serif text-sm font-medium italic leading-8 text-[#514940] md:text-base">
                  {`"கொங்குதேர் வாழ்க்கை அஞ்சிறைத் தும்பியாய்
எங்கு தேர்ந்தாயினும் அறிவினை நாடுதல்
இடம், பொருள், கருதாது, ஆய்வினைப் போற்றுதல்
தவறுறின் ஒப்புதல், பிழையினைக் காணின்
தயங்காது மறுத்தல், தற்சார்பில்லா
நடுநிலை மனத்துடன் நாடுதல்
விடுதலை உணர்வாய் ஆய்வறம் விளையுமே"`}
                </p>
              </div>

              <p>
                இவர் சிறந்த உரையாசிரியர். இலக்கண நூல்கள் பலவற்றிற்கும் எளிய
                உரை கண்டவர். தொல்காப்பியத்திற்கு இவர் எழுதிய இனிய எளிய உரை
                படிப்போர்க்குத் தெளிவினைத் தருவது.
              </p>

              <div className="my-8 border border-[#a47b3c] bg-[#273943] px-5 py-7 text-center md:px-8">
                <p className="mb-4 text-[10px] font-extrabold tracking-[0.25em] text-[#d6bb82]">
                  திருக்குறள்
                </p>

                <p className="whitespace-pre-line font-serif text-base font-semibold leading-8 text-[#f3e8d0] md:text-lg">
                  {`புறந்தூய்மை நீரான் அமையும்
அகந்தூய்மை வாய்மையால் காணப் படும்`}
                </p>
              </div>

              <p>
                தமிழைப் பிழையின்றி எழுத அவர் தினமணியில் வரைந்த கட்டுரைகள்
                இக்காலத் தமிழ்ச்சமுதாயத்திற்கு வேண்டிய அடிப்படை நூல்களில் ஒன்று.
              </p>

              <div className="my-8 border border-[#c5b28e] bg-[#eee5d3] p-5 md:p-7">
                <p className="mb-4 text-[10px] font-extrabold tracking-[0.25em] text-[#8a6636]">
                  சொல் நுட்பம்
                </p>

                <p>
                  மணம் என்ற சொல் மலரின் மணத்தையும் குறிக்கிறது. இரு மனங்கள்
                  இணையும் திருமணத்தையும் குறிக்கிறது. இந்த ஒரு சொல் ஏன்
                  இரண்டையும் குறிக்கவேண்டும் என்பது அண்ணலின் ஐயநுட்பம்.
                </p>
              </div>

              <div className="mt-10 border-t border-[#d0c2ac] pt-8">
                <p className="font-serif text-base font-semibold leading-8 text-[#273943] md:text-lg">
                  அவரின் நூற்றாண்டு வர உள்ளது. இந்தப் பத்தாண்டுகளில் அவரின்
                  மாணவர்கள், உறவினர்கள், தமிழறிஞர்கள் இணைந்து ஒரு நெடுந்திட்டம்
                  உருவாக்கி அவரின் ஆய்வுப்பாதையை அடுத்த தலைமுறைக்குக் கொண்டு
                  செல்ல ஆவன செய்யவேண்டும்.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}