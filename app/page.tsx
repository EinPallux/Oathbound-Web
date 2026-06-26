import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  faBolt,
  faEarthEurope,
  faShieldHalved,
  faPeopleGroup,
  faDragon,
  faWandMagicSparkles,
  faChevronDown,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wordmark from "@/components/Wordmark";
import HeroesCarousel, { type HeroSlide } from "@/components/HeroesCarousel";
import styles from "./home.module.css";

// TODO: replace with the real Oathbound community invite once available.
const COMMUNITY_URL = "#community";

const REALM_ROWS = [
  {
    img: "/world/zone-01.jpg",
    title: "Step Into a Living World",
    body: "Vast, handcrafted zones stretch from sunlit valleys to ruin-choked frontiers. Every horizon hides a story, a secret, or a fight worth having — and it's all rendered in seamless 3D.",
  },
  {
    img: "/world/zone-07.jpg",
    title: "No Downloads. Just Play.",
    body: "Oathbound runs right in your browser. Click a link and you're there — a full 3D MMORPG with no installers, no patches, no waiting. Your adventure is always one tab away.",
  },
  {
    img: "/mounts/mount-01.jpg",
    title: "Ride Into Legend",
    body: "Claim mighty mounts and cross the realm in style. The world is enormous and alive — how you choose to travel it is part of the journey.",
  },
  {
    img: "/world/zone-09.jpg",
    title: "Bound by Oath",
    body: "Pledge yourself to a cause. Sacred oaths bind heroes to covenants, allies, and rivalries — choices that ripple outward and shape the world around you.",
  },
];

const GALLERY = [
  "/world/zone-02.jpg",
  "/world/zone-03.jpg",
  "/world/zone-04.jpg",
  "/world/zone-05.jpg",
  "/world/zone-06.jpg",
  "/world/zone-08.jpg",
  "/world/zone-10.jpg",
  "/mounts/mount-02.jpg",
];

const FEATURES = [
  { icon: faBolt, title: "Instant Play", body: "Jump in from any modern browser. No downloads, no installs, no friction." },
  { icon: faEarthEurope, title: "A 3D Open World", body: "Explore a seamless, handcrafted realm rendered in full 3D, from peak to dungeon depths." },
  { icon: faShieldHalved, title: "Choose Your Path", body: "Dozens of classes and playstyles, from sworn knights to wild spellweavers." },
  { icon: faPeopleGroup, title: "Adventure Together", body: "Form guilds, run dungeons, and write history alongside friends and rivals." },
  { icon: faDragon, title: "Hunt World Bosses", body: "Rally the realm against towering threats that test everything you've learned." },
  { icon: faWandMagicSparkles, title: "A World That Grows", body: "Seasons, events, and new lands — Oathbound keeps evolving long after you arrive." },
];

const HEROES: HeroSlide[] = [
  { img: "/heroes/hero-01.jpg", oath: "By blade and by vow, I stand." },
  { img: "/heroes/hero-02.jpg", oath: "The wilds remember my name." },
  { img: "/heroes/hero-03.jpg", oath: "Magic answers when I call." },
  { img: "/heroes/hero-04.jpg", oath: "No shadow shall pass me." },
  { img: "/heroes/hero-05.jpg", oath: "I keep the old promises." },
  { img: "/heroes/hero-06.jpg", oath: "For those who cannot fight." },
  { img: "/heroes/hero-07.jpg", oath: "Sworn to the breaking dawn." },
  { img: "/heroes/hero-08.jpg", oath: "Unbroken. Unbound." },
];

export default function HomePage() {
  return (
    <>
      <span id="top" />
      <Navbar />

      {/* ===== HERO ===== */}
      <header className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="/art/realm-hero.webp" alt="" aria-hidden="true" />
          <div className={styles.heroScrim} />
        </div>

        <div className={styles.heroInner}>
          <span className="kicker">
            <span className="dot" /> Now in Development &middot; A New Fantasy MMORPG
          </span>

          <h1 className={styles.heroWordmark}>
            <Wordmark size="lg" />
          </h1>

          <div className="flourish">
            <span className={styles.heroSubKicker}>An Oath Will Be Sworn</span>
          </div>

          <p className={styles.heroTagline}>
            Swear your oath. Forge your legend. A 3D fantasy MMORPG you play
            right in your browser — no downloads, no limits, just a vast living
            world waiting beyond the next horizon.
          </p>

          <div className={styles.heroButtons}>
            <a href={COMMUNITY_URL} className="btn-epic">
              <FontAwesomeIcon icon={faDiscord} /> Join the Community
            </a>
            <a href="#realm" className="btn-ghost">Explore the Realm</a>
          </div>
        </div>

        <a href="#saga" className={styles.scrollCue} aria-label="Scroll down">
          <span>Scroll</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </header>

      {/* ===== SAGA INTRO ===== */}
      <div className="glow-divider" aria-hidden="true">
        <img src="/ui/section-glow.webp" alt="" />
      </div>

      <section id="saga" className={styles.saga}>
        <div className="container">
          <div className="section-label">
            <span className="eyebrow">The Saga Begins</span>
            <h2>An age of heroes begins</h2>
          </div>
          <div className={styles.sagaProse}>
            <p>
              In the twilight of a fading age, the old vows are breaking and the
              dark draws near. A realm bound by ancient oaths cries out for
              champions — for those willing to take up the blade, swear the
              promise, and stand against what comes.
            </p>
            <p>
              <strong>Oathbound</strong> is an upcoming 3D fantasy MMORPG built
              for the modern web. Gather your allies, master your craft, and
              carve your name into a world that will remember it. The gates are
              not yet open &mdash; but they soon will be.
            </p>
          </div>
        </div>

        <div className={styles.sagaBanner}>
          <img src="/art/heroes-banner.webp" alt="Heroes of the realm" loading="lazy" />
          <div className={styles.sagaBannerScrim} />
        </div>
      </section>

      <hr className="rule-gold" />

      {/* ===== THE REALM ===== */}
      <section id="realm" className={styles.realm}>
        <div className="container">
          <div className="section-label">
            <span className="eyebrow">Explore the Realm</span>
            <h2>A World Worth Defending</h2>
            <p>
              A seamless 3D realm of forests, ruins, and frontier strongholds —
              all of it streaming straight to your browser.
            </p>
          </div>

          <div className={styles.realmRows}>
            {REALM_ROWS.map((row) => (
              <div key={row.title} className={styles.realmRow}>
                <div className={styles.realmImage}>
                  <img src={row.img} alt={row.title} loading="lazy" />
                </div>
                <div className={styles.realmText}>
                  <h3>{row.title}</h3>
                  <p>{row.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className={styles.galleryHeading}>Glimpses of the Realm</h3>
          <div className={styles.gallery}>
            {GALLERY.map((src, i) => (
              <figure key={src} className={styles.galleryItem}>
                <img src={src} alt={`A glimpse of the Oathbound realm ${i + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
          <p className={styles.wipNote}>
            Pre-alpha footage. Everything shown is a work in progress.
          </p>
        </div>
      </section>

      <hr className="rule-gold" />

      {/* ===== FEATURES ===== */}
      <section id="features" className={styles.features}>
        <div className="container">
          <div className="section-label">
            <span className="eyebrow">Why Oathbound</span>
            <h2>An MMORPG Without the Barriers</h2>
            <p>Everything you love about online RPGs — and nothing standing between you and the adventure.</p>
          </div>

          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <article key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}><FontAwesomeIcon icon={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule-gold" />

      {/* ===== HEROES ===== */}
      <section id="heroes" className={styles.heroes}>
        <div className="container">
          <div className="section-label">
            <span className="eyebrow">Heroes of the Realm</span>
            <h2>Every Hero Swears an Oath</h2>
            <p>
              Knights and rangers, spellweavers and wildkin — and paths yet
              unseen. Whoever you become, your legend begins with a vow.
            </p>
          </div>
        </div>
        <HeroesCarousel heroes={HEROES} />
      </section>

      <hr className="rule-gold" />

      {/* ===== FIRST LOOK ===== */}
      <section id="first-look" className={styles.firstLook}>
        <div className="container">
          <div className="section-label">
            <span className="eyebrow">First Look</span>
            <h2>The Reveal Draws Near</h2>
          </div>

          <div className={styles.reveal}>
            <img src="/art/the-threat.jpg" alt="A first look at Oathbound" />
            <div className={styles.revealScrim} />
            <div className={styles.revealContent}>
              <span className={styles.playButton} aria-hidden="true">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className={styles.revealLabel}>Reveal Trailer &middot; Coming Soon</span>
            </div>
          </div>
          <p className={styles.revealCaption}>
            The first official trailer is on its way. Join the community to be
            there the moment it drops.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="community" className={styles.finalCta}>
        <div className={styles.finalCtaBg}>
          <img src="/art/the-threat.jpg" alt="" aria-hidden="true" />
          <div className={styles.finalCtaScrim} />
        </div>
        <div className={styles.finalCtaInner}>
          <span className="kicker"><span className="dot" /> Coming Soon</span>
          <h2>Will You Answer the Call?</h2>
          <p>
            Oathbound is in development now. Join the community to follow the
            journey, watch the realm take shape, and be there when the gates
            finally open.
          </p>
          <div className={styles.heroButtons}>
            <a href={COMMUNITY_URL} className="btn-epic">
              <FontAwesomeIcon icon={faDiscord} /> Join the Community
            </a>
            <a href={COMMUNITY_URL} className="btn-ghost">Follow the Journey</a>
          </div>
          <div className={styles.ctaWordmark}>
            <Wordmark size="sm" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
