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
    slug: "floby",
    name: "Floby",
    tagline: "La tradition burkinabè en version moderne",
    shortBio:
      "Floby est une figure majeure de la musique burkinabè, reconnu pour un univers qui mêle sonorités traditionnelles, énergie moderne et forte identité culturelle.",
    story:
      "Floby s’est imposé comme l’un des artistes les plus marquants du Burkina Faso grâce à une musique enracinée dans la culture locale et ouverte aux sonorités contemporaines. Son identité artistique associe émotion, élégance scénique et modernité, pour offrir une expérience musicale forte, populaire et authentique.",

    coverImage: cover,
    coverAlt: "Photo de couverture de Floby",

    profileImage: profile,
    profileAlt: "Photo de profil de Floby",

    artworkImage: artwork,
    artworkAlt: "Illustration artistique de Floby",

    ctaLabel: "Écouter maintenant",
    ctaUrl: "https://open.spotify.com/artist/3BiOLsEaogXBuSwGdhgNWc",

    featuredRelease: {
      title: "Floby · Artiste officiel",
      subtitle: "Découvre son univers sur les plateformes de streaming"
    },

    contactEmail: "contact@floby.bf",

    secondaryNetworks: [
      { label: "Facebook", url: "https://www.facebook.com/flobyofficiel/" },
      {
        label: "YouTube",
        url: "https://www.youtube.com/channel/UCngSrQijTyY5hYEr47qOWHg"
      }
    ],

    links: {
      spotify: "https://open.spotify.com/artist/3BiOLsEaogXBuSwGdhgNWc",
      appleMusic: "https://music.apple.com/ga/artist/floby/383174065",
      youtube: "https://www.youtube.com/channel/UCngSrQijTyY5hYEr47qOWHg",
      facebook: "https://www.facebook.com/flobyofficiel/"
    },

    theme: {
      primary: "#d4a017",
      secondary: "#0b0b0f",
      accent: "#f59e0b",
      surface: "rgba(18, 18, 24, 0.72)"
    }
  }
];

export const featuredArtist = artists[0];

export const getArtistBySlug = (slug: string) =>
  artists.find((artist) => artist.slug === slug);