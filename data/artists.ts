import type { StaticImageData } from "next/image";

// IMAGES DES PLATEFORMES
import spotifyImg from "../assets/spotifyImg.png";
import deezerImg from "../assets/deezerImg.jpg";
import youtubeImg from "../assets/youtubeImg.png";
import appleMusicImg from "../assets/apple.jpg";
import facebookImg from "../assets/facebookImg.jpg";

// IMAGES ARTISTE
import cover from "../assets/cover.jpg";
import profile from "../assets/profile.jpg";
import artwork from "../assets/index.jpg";

export const platformOrder = [
  "spotify",
  "deezer",
  "youtube",
  "appleMusic",
  "audiomack",
  "boomplay",
  "soundcloud",
  "tiktok",
  "instagram",
  "facebook",
  "website"
] as const;

export type PlatformKey = (typeof platformOrder)[number];

// ✅ CORRECTION IMPORTANTE : Partial
export const platformImages: Partial<Record<PlatformKey, StaticImageData>> = {
  spotify: spotifyImg,
  deezer: deezerImg,
  youtube: youtubeImg,
  appleMusic: appleMusicImg,
  facebook: facebookImg
};

export type ArtistLinks = Partial<Record<PlatformKey, string>>;

export type ArtistTheme = {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
};

export type Artist = {
  slug: string;
  name: string;
  tagline: string;
  shortBio: string;
  story: string;
  coverImage: StaticImageData;
  coverAlt: string;
  profileImage: StaticImageData;
  profileAlt: string;
  artworkImage: StaticImageData;
  artworkAlt: string;
  ctaLabel: string;
  ctaUrl: string;
  featuredRelease: {
    title: string;
    subtitle: string;
  };
  contactEmail: string;
  secondaryNetworks: Array<{ label: string; url: string }>;
  links: ArtistLinks;
  theme: ArtistTheme;
};

export const artists: Artist[] = [
  {
    slug: "smarty",
    name: "Smarty",
    tagline: "Voix engagée du rap burkinabè",
    shortBio:
      "Artiste burkinabè reconnu pour ses textes conscients, son identité forte et son impact majeur sur la scène musicale africaine.",
    story:
      "Smarty est l’une des figures les plus marquantes du rap au Burkina Faso. Son univers mêle engagement, profondeur, élégance artistique et puissance scénique. Cette page NFC met en avant son identité, son image et ses principales plateformes d’écoute dans une expérience mobile premium.",

    coverImage: cover,
    coverAlt: "Photo de couverture de Smarty",

    profileImage: profile,
    profileAlt: "Photo de profil de Smarty",

    artworkImage: artwork,
    artworkAlt: "Illustration artistique de Smarty",

    ctaLabel: "Écouter maintenant",
    ctaUrl: "https://music.apple.com/artist/smarty",

    featuredRelease: {
      title: "Smarty · Artiste officiel",
      subtitle: "Retrouve sa musique sur les plateformes de streaming"
    },

    contactEmail: "contact@smarty.bf",

    secondaryNetworks: [
      { label: "Instagram", url: "https://www.instagram.com/" },
      { label: "Facebook", url: "https://www.facebook.com/" }
    ],

    links: {
      appleMusic: "https://music.apple.com/artist/smarty",
      spotify: "https://open.spotify.com/artist/2Yk",
      deezer: "https://www.deezer.com/artist/124"
    },

    theme: {
      primary: "#d4af37",
      secondary: "#0b0b0f",
      accent: "#f59e0b",
      surface: "rgba(18, 18, 24, 0.72)"
    }
  }
];

export const featuredArtist = artists[0];

export const getArtistBySlug = (slug: string) =>
  artists.find((artist) => artist.slug === slug);