import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faXTwitter,
  faYoutube,
  faTwitch,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import Wordmark from "./Wordmark";

// TODO: swap these placeholders for the real Oathbound community links.
const SOCIALS = [
  { icon: faDiscord, label: "Discord", href: "#community" },
  { icon: faXTwitter, label: "X / Twitter", href: "#community" },
  { icon: faYoutube, label: "YouTube", href: "#community" },
  { icon: faTwitch, label: "Twitch", href: "#community" },
  { icon: faReddit, label: "Reddit", href: "#community" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Wordmark size="sm" />
          <p>
            A 3D fantasy MMORPG you play right in your browser. Swear your oath,
            forge your legend, and explore a vast living world. Currently in
            development.
          </p>
          <div className="social-row">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} title={s.label}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#realm">The Realm</a></li>
            <li><a href="#first-look">First Look</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Community</h4>
          <ul>
            <li><a href="#community">Discord</a></li>
            <li><a href="#community">News &amp; Updates</a></li>
            <li><a href="#community">Press / Media</a></li>
            <li><a href="#community">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <span>&copy; {new Date().getFullYear()} Oathbound. All rights reserved.</span>
        <span>Work in progress — everything shown is pre-alpha and subject to change.</span>
      </div>
    </footer>
  );
}
