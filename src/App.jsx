import { useState } from "react";
import "./App.css";

const flowers = [
  { x: 5, h: 120, delay: 0.2, size: 26 },
  { x: 15, h: 175, delay: 1, size: 33 },
  { x: 26, h: 135, delay: 0.5, size: 28 },
  { x: 37, h: 200, delay: 1.4, size: 37 },
  { x: 49, h: 235, delay: 0.8, size: 41 },
  { x: 61, h: 155, delay: 1.7, size: 30 },
  { x: 73, h: 190, delay: 0.4, size: 35 },
  { x: 84, h: 130, delay: 1.2, size: 27 },
  { x: 95, h: 165, delay: 0.7, size: 32 },
];

function Flower({ flower }) {
  return (
    <div
      className="plant"
      style={{
        left: `${flower.x}%`,
        height: `${flower.h}px`,
        "--delay": `${flower.delay}s`,
        "--flower-size": `${flower.size}px`,
      }}
    >
      <div className="stem">
        <span className="leaf leaf-one" />
        <span className="leaf leaf-two" />
        <div className="blossom">
          {Array.from({ length: 8 }, (_, i) => (
            <span className="petal" key={i} style={{ "--i": i }} />
          ))}
          <span className="center" />
        </div>
      </div>
    </div>
  );
}

function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      {Array.from({ length: 38 }, (_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: `${(i * 43 + 7) % 100}%`,
            top: `${(i * 29 + 5) % 78}%`,
            "--twinkle-delay": `${(i % 9) * 0.45}s`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

function PageOne({ onNext }) {
  return (
    <main className="birthday page-transition">
      <div className="ambient-glow" />
      <Sparkles />

      <section className="intro">
        <p className="overline">A LITTLE SURPRISE FOR YOU</p>
        <h1>
          Hi Goldi<span className="title-heart"> ♡</span>
        </h1>
        <p className="subtitle">This is just a little thing for you...</p>
        <button className="open-button" onClick={onNext}>
          Open your surprise ♡
        </button>
      </section>

      <div className="flower-garden" aria-hidden="true">
        <div className="garden-floor" />
        {flowers.map((flower, i) => (
          <Flower key={i} flower={flower} />
        ))}
      </div>
    </main>
  );
}

function PageTwo({ goNext }) {
  const [age, setAge] = useState(0);
  const [noClicked, setNoClicked] = useState(false);

  function spinAge() {
    if (age !== 0) return;

    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      setAge(Math.min(count, 21));
      if (count >= 21) clearInterval(timer);
    }, 90);
  }

  const photos = [
    { src: "/himesh-1.jpeg", caption: "My favourite eyes ♡" },
    { src: "/himesh-3.jpeg", caption: "A little moment, forever special ✨" },
    { src: "/himesh-6.jpeg", caption: "My birthday boy 🤍" },
  ];

  return (
    <main className="page-two page-transition">
      <div className="birthday-glow" />
      <Sparkles />

      <header className="birthday-header">
        <div className="hero-photo">
          <img
            src="/himesh-2.jpeg"
            alt="Himesh"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="photo-placeholder">♡</span>
        </div>

        <div className="hero-copy">
          <p className="page-eyebrow">TODAY IS ALL ABOUT YOU</p>
          <h1>
            Happy Birthday,
            <br />
            <span>Goldi 🤍</span>
          </h1>
          <p>Wishing you many, many happy returns of the day 🎉</p>
          <p>Wishing you a new chapter ahead. ✨</p>
        </div>
      </header>

      <section className="age-section">
        <p className="page-eyebrow">GUESS WHAT?</p>
        <h2>SOMEONE JUST TURNED...</h2>
        <button className="age-counter" onClick={spinAge}>
          {age === 0 ? "?" : age}
        </button>
        <p className="age-hint">
          {age === 0
            ? "Tap the number to find out ♡"
            : age === 21
              ? "A little older, a lot more special... ♡"
              : "Counting your birthday wishes..."}
        </p>
      </section>

      <section className="memories-section">
        <p className="page-eyebrow">LITTLE PIECES OF YOU</p>
        <h2>Three little reasons to smile ♡</h2>

        <div className="memory-grid">
          {photos.map((photo, i) => (
            <article className="memory-card" key={photo.src}>
              <div className="memory-image">
                <img
                  src={photo.src}
                  alt={`Birthday memory ${i + 1}`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="photo-placeholder">♡</span>
              </div>
              <p>{photo.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sms-card">
        <span className="sms-heart">💌</span>
        <h2>A little message for you</h2>
        <p>
          Himesh, today is your day. I hope it brings you happiness, little
          surprises, and countless reasons to smile. You deserve so many
          beautiful things. 🤍
        </p>
      </section>

      <section className="page-question">
        <p>Ready to turn one more page…</p>
        <h2>just like you turn 21? 🤍</h2>

        <div className="answer-buttons">
          <button className="yes-button" onClick={goNext}>
            Yes, let&apos;s go ♡
          </button>
          <button className="no-button" onClick={() => setNoClicked(true)}>
            No 😏
          </button>
        </div>

        {noClicked && (
          <p className="no-message">
            😏 Go, you have to turn the page, baby. 🤍
          </p>
        )}
      </section>

      <footer className="birthday-footer">Made with love, for Goldi ♡</footer>
    </main>
  );
}

function PageThree({ goNext }) {
  const [noClicked, setNoClicked] = useState(false);
  const [zoomImage, setZoomImage] = useState("");

  return (
    <main className="page-three page-transition">
      <Sparkles />

      <header className="section-heading">
        <p className="page-eyebrow">JOURNEY AHEAD</p>
        <h1>Under the Same Moon 🌕</h1>
        <p className="subtitle">A little divine magic ✨</p>
      </header>

      <section className="moon-card">
        <div className="moon-art">🌕</div>
        <p>
          Sharad Purnima is the night of Krishna&apos;s Maha Raas… a night
          remembered for divine love, beneath the brightest moon.
        </p>
        <p>
          And somehow, guess what? It&apos;s your birthday. This beautiful full
          moon makes me think of love, faith, and the little universe we share.
          🤍
        </p>
        <p className="moon-date">25 October · Sharad Purnima</p>
      </section>

      <section className="devotion-section">
        <p className="page-eyebrow">TWO PATHS, ONE DIVINE LOVE 🕉️</p>
        <h2>Different paths, one faith</h2>
        <p>
          They say devotion to Mahadev can quietly lead a soul towards Krishna,
          and devotion to Krishna can lead that soul back to where Mahadev
          resides.
        </p>
        <p>
          And it makes me think of 108 Shiv Mandir, Madan Mohan Bari, and
          Banaras… different sacred places, yet each holding a special place in
          the world of devotion. 🕉️
        </p>
        <p>Different paths, one faith, and a heart full of love. 🤍</p>
      </section>

      <section className="keepsake-grid">
        <article className="keepsake-card">
          <div className="envelope-art">💌</div>
          <h2>A Letter Written Just for You</h2>
          <p>To My Goldi, With Love ♡</p>
          <button
            className="soft-button"
            onClick={() => setZoomImage("/letter.jpeg")}
          >
            Open my letter ♡
          </button>
        </article>

        <article className="keepsake-card">
          <div className="envelope-art">🪷</div>
          <h2>A Little Poetry for You</h2>
          <p>For You, My Favourite Person ♡</p>
          <button
            className="soft-button"
            onClick={() => setZoomImage("/poem.jpeg")}
          >
            Read my poem ♡
          </button>
        </article>
      </section>

      <section className="page-question">
        <p>And guess what, birthday boy? 🥹</p>
        <h2>
          Today is your birthday, and there&apos;s another beautiful date
          waiting for us...
        </h2>
        <p>Do you wanna know? 👀</p>

        <div className="answer-buttons">
          <button className="yes-button" onClick={goNext}>
            Yes, tell me ♡
          </button>
          <button className="no-button" onClick={() => setNoClicked(true)}>
            No 😏
          </button>
        </div>

        {noClicked && (
          <p className="no-message">
            Oh really, baby? 😂 You clicked No, but your curiosity says Yes.
            Nice try, Goldi! 😏🤍
          </p>
        )}
      </section>

      {zoomImage && (
        <div
          className="image-modal"
          onClick={() => setZoomImage("")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter") {
              setZoomImage("");
            }
          }}
          aria-label="Close image preview"
        >
          <button
            className="modal-close"
            onClick={() => setZoomImage("")}
            aria-label="Close preview"
          >
            ×
          </button>
          <img
            src={zoomImage}
            alt="Your handwritten keepsake"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

/* PAGE 4: OUR FIRST ANNIVERSARY */

function PageFour({ goNext }) {
  const [zoomImage, setZoomImage] = useState("");

  const banarasPhotos = [
    { src: "/himesh-11.jpeg", caption: "A night of a thousand lights 🪔" },
    { src: "/himesh-8.jpeg", caption: "Banaras Together 🌕" },
    { src: "/himesh-7.jpeg", caption: "A memory 🤍" },
  ];

  return (
    <main className="anniversary-page page-transition">
      <Sparkles />

      <header className="section-heading">
        <p className="page-eyebrow">A LITTLE SECRET REVEALED ♡</p>
        <h1>THIS DATE 🪔</h1>
        <p className="anniversary-date">24 November</p>
        <h2>Our First Anniversary ♡</h2>
      </header>

      <section className="anniversary-message">
        <p>
          One year of us. One special date. And a thousand little feelings that
          words can never fully explain.
        </p>

        <h2>And guess what? 🌕</h2>

        <p>
          It&apos;s Dev Deepawali in Banaras too—a night when the ghats shine
          with countless lamps, making the river look like a sky full of stars.
        </p>

        <p>
          A night of light, faith, and a date that means something to us. 🤍
        </p>
      </section>

      <section className="banaras-gallery">
        {banarasPhotos.map((photo) => (
          <article className="banaras-card" key={photo.src}>
            <button
              className="banaras-image"
              onClick={() => setZoomImage(photo.src)}
              aria-label={`View ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="photo-placeholder">🪔</span>
            </button>
            <p>{photo.caption}</p>
          </article>
        ))}
      </section>

      <section className="anniversary-promise">
        <img
          src="/himesh-10.jpeg"
          alt="A special memory of us"
          className="promise-photo"
        />

        <span className="promise-icon">🤍</span>

        <h2>A Little Promise</h2>

        <blockquote>
          “No matter how many chapters life gives us, I hope we keep finding
          little reasons to choose each other, to laugh together, and to make
          new memories.”
        </blockquote>

        <p className="signature">— Your Sunita ♡</p>
      </section>

      <section className="page-question">
        <p>And now, my Goldi… ♡</p>
        <h2>Ready for the next chapter?</h2>
        <button className="open-button" onClick={goNext}>
          Your Journey awaits →
        </button>
      </section>

      {zoomImage && (
        <div
          className="image-modal"
          onClick={() => setZoomImage("")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter") {
              setZoomImage("");
            }
          }}
          aria-label="Close photo preview"
        >
          <button
            className="modal-close"
            onClick={() => setZoomImage("")}
            aria-label="Close preview"
          >
            ×
          </button>
          <img
            src={zoomImage}
            alt="Banaras Dev Deepawali"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

/* PAGE 5: YOUR JOURNEY */

function PageFive({ goNext }) {
  return (
    <main className="page-four page-transition">
      <Sparkles />

      <header className="section-heading">
        <p className="page-eyebrow">YOUR NEXT CHAPTER</p>
        <h1>Your Journey Goes On… ♡</h1>
        <p className="subtitle">A little wish for your future ✨</p>
      </header>

      <section className="future-message">
        <p>
          My Goldi, I hope you get a job very soon. I hope life gives you the
          opportunities you&apos;ve been waiting for, and that you achieve
          success much sooner than you imagine.
        </p>
        <p>
          I want to see you grow, chase your dreams, become independent, and
          make yourself proud. I hope all the effort you put into your future
          turns into something beautiful.
        </p>
      </section>

      <section className="wish-grid">
        <article className="wish-card">
          <span>🌱</span>
          <h2>A Good Job</h2>
          <p>A career that brings you confidence and stability.</p>
        </article>
        <article className="wish-card">
          <span>✨</span>
          <h2>Success &amp; Growth</h2>
          <p>New opportunities and reasons to be proud of yourself.</p>
        </article>
        <article className="wish-card">
          <span>🌙</span>
          <h2>A Beautiful Future</h2>
          <p>Peace, happiness, and beautiful moments to remember.</p>
        </article>
      </section>

      <section className="future-message">
        <h2>For the days that feel difficult 🤍</h2>
        <p>
          Please keep believing in yourself, baby. Don&apos;t compare your
          journey with anyone else&apos;s. Everyone has their own timing, and
          every small step you take matters.
        </p>
        <p>
          Keep learning, keep trying, and don&apos;t forget how far you can go.
          I wish you a good job, financial stability, confidence, happiness, and
          a future that makes you smile.
        </p>
      </section>

      <section className="page-question">
        <h2>Keep going, birthday boy. ♡</h2>
        <p>
          Your story is only getting started. And I&apos;ll always be wishing
          the very best for you. 🤍
        </p>
        <p>But baby… this isn&apos;t the end yet. 👀</p>
        <h2>There&apos;s one last little surprise waiting for you.</h2>
        <button className="open-button" onClick={goNext}>
          One last surprise →
        </button>
      </section>
    </main>
  );
}

/* PAGE 6: FINAL LOVE LETTER */

function PageSix() {
  const [answered, setAnswered] = useState(false);

  return (
    <main className="page-five page-transition">
      <Sparkles />

      <section className="final-content">
        <p className="page-eyebrow">JUST ONE LAST THING</p>
        <h1>
          Happy Birthday,
          <br />
          My Goldi 🤍
        </h1>

        <div className="couple-photo">
          <img
            src="/himesh-9.jpeg"
            alt="Sunita and Himesh"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="photo-placeholder">♡</span>
        </div>

        <div className="final-letter">
          <p>
            I wish I could put into words everything you mean to me, but
            somehow, words will always feel a little too small.
          </p>
          <p>
            Today, I wish you happiness that stays, dreams that come true, a
            career that makes you proud, and a life filled with beautiful
            moments.
          </p>
          <p>
            No matter how busy life gets or how many new chapters begin, I hope
            you always find reasons to smile and remember the beautiful things
            waiting ahead of you.
          </p>
          <p>
            I made this little universe just for you, hoping it would make you
            feel a little extra loved today. 🥹
          </p>
        </div>

        <p className="signature">With all my love, always ♡</p>
        <p className="signature">— Your Sunita 🤍</p>

        {!answered ? (
          <section className="final-question">
            <p className="page-eyebrow">BEFORE YOU GO, GOLDI…</p>
            <p>One last question, baby… 🥺</p>
            <h2>Do you love me, Goldi? 🤍</h2>

            <div className="answer-buttons">
              <button className="yes-button" onClick={() => setAnswered(true)}>
                Yes, baby! ♡
              </button>
              <button className="yes-button" onClick={() => setAnswered(true)}>
                Of course! 🥹
              </button>
            </div>
          </section>
        ) : (
          <section className="love-reveal">
            <div className="floating-hearts" aria-hidden="true">
              💗 💖 💕 🤍 💞
            </div>
            <div className="big-heart">♥</div>
            <h2>I knew it, Goldi… but I&apos;ll never get tired of asking.</h2>
            <p>I love you. Always. ♡</p>
          </section>
        )}
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState(1);

  function goToPage(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {page === 1 && <PageOne onNext={() => goToPage(2)} />}
      {page === 2 && <PageTwo goNext={() => goToPage(3)} />}
      {page === 3 && <PageThree goNext={() => goToPage(4)} />}
      {page === 4 && <PageFour goNext={() => goToPage(5)} />}
      {page === 5 && <PageFive goNext={() => goToPage(6)} />}
      {page === 6 && <PageSix />}
    </>
  );
}
