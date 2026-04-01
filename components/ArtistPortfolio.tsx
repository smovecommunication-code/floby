import Image from "next/image";
import { Artist, platformOrder } from "@/data/artists";
import { SocialLinkCard } from "@/components/SocialLinkCard";

type ArtistPortfolioProps = {
  artist: Artist;
};

export function ArtistPortfolio({ artist }: ArtistPortfolioProps) {
  return (
    <main
      className="portfolio"
      style={{
        ["--artist-primary" as string]: artist.theme.primary,
        ["--artist-secondary" as string]: artist.theme.secondary,
        ["--artist-accent" as string]: artist.theme.accent,
        ["--artist-surface" as string]: artist.theme.surface
      }}
    >
      <section className="cover-section">
        <Image
          src={artist.coverImage}
          alt={artist.coverAlt}
          fill
          priority
          className="cover-image"
          sizes="100vw"
        />
        <div className="cover-overlay" />
        <div className="cover-content">
          <p className="kicker">Carte NFC · Expérience officielle</p>
          <h1>{artist.name}</h1>
          <p>{artist.tagline}</p>
        </div>
      </section>

      <section className="identity-card fade-in">
        <div className="identity-main">
          <div className="profile-wrap">
            <Image
              src={artist.profileImage}
              alt={artist.profileAlt}
              width={180}
              height={180}
              className="profile-image"
            />
          </div>
          <div>
            <h2>{artist.name}</h2>
            <p className="identity-bio">{artist.shortBio}</p>
            <p className="identity-story">{artist.story}</p>
          </div>
        </div>

        <aside className="artwork-wrap">
          <Image
            src={artist.artworkImage}
            alt={artist.artworkAlt}
            width={320}
            height={320}
            className="artwork-image"
          />
        </aside>
      </section>

      <section className="release-card fade-in">
        <p className="release-kicker">Projet récent</p>
        <h3>{artist.featuredRelease.title}</h3>
        <p>{artist.featuredRelease.subtitle}</p>
        <a href={artist.ctaUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
          {artist.ctaLabel}
        </a>
      </section>

      <section className="links-section fade-in">
        <h3>Streaming & Réseaux</h3>
        <p>Tous les liens officiels en accès direct.</p>
        <div className="links-grid">
          {platformOrder.map((platform) => (
            <SocialLinkCard key={platform} platform={platform} url={artist.links[platform]} />
          ))}
        </div>
      </section>

      <footer className="footer fade-in">
        <div>
          <p className="footer-title">Contact / Booking</p>
          <a href={`mailto:${artist.contactEmail}`}>{artist.contactEmail}</a>
        </div>
        <div>
          <p className="footer-title">Réseaux secondaires</p>
          <ul>
            {artist.secondaryNetworks.map((network) => (
              <li key={network.label}>
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  {network.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {artist.name}. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
