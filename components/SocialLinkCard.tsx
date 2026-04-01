import type { ReactNode } from "react";
import Link from "next/link";
import { PlatformKey } from "@/data/artists";

type SocialLinkCardProps = {
  platform: PlatformKey;
  url?: string;
};

const platformMeta: Record<PlatformKey, { label: string; icon: ReactNode }> = {
  spotify: { label: "Spotify", icon: <span aria-hidden>♬</span> },
  deezer: { label: "Deezer", icon: <span aria-hidden>◉</span> },
  youtube: { label: "YouTube", icon: <span aria-hidden>▶</span> },
  appleMusic: { label: "Apple Music", icon: <span aria-hidden></span> },
  audiomack: { label: "Audiomack", icon: <span aria-hidden>◈</span> },
  boomplay: { label: "Boomplay", icon: <span aria-hidden>◆</span> },
  soundcloud: { label: "SoundCloud", icon: <span aria-hidden>☁</span> },
  tiktok: { label: "TikTok", icon: <span aria-hidden>♪</span> },
  instagram: { label: "Instagram", icon: <span aria-hidden>◎</span> },
  facebook: { label: "Facebook", icon: <span aria-hidden>ⓕ</span> },
  website: { label: "Site officiel", icon: <span aria-hidden>⌂</span> }
};

export function SocialLinkCard({ platform, url }: SocialLinkCardProps) {
  const meta = platformMeta[platform];
  const isActive = Boolean(url?.trim());

  const classes = `link-card group ${isActive ? "is-active" : "is-disabled"}`;

  const content = (
    <>
      <span className="link-card__glow" />
      <div className="link-card__content">
        <span className="link-card__icon">{meta.icon}</span>
        <div>
          <p className="link-card__title">{meta.label}</p>
          <p className="link-card__subtitle">
            {isActive ? "Ouvrir la plateforme" : "Disponible bientôt"}
          </p>
        </div>
      </div>
    </>
  );

  if (!isActive) {
    return (
      <div className={classes} aria-disabled>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={url as string}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      aria-label={`Ouvrir ${meta.label}`}
    >
      {content}
    </Link>
  );
}
