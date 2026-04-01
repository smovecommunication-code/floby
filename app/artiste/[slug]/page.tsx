import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtistPortfolio } from "@/components/ArtistPortfolio";
import { artists, getArtistBySlug } from "@/data/artists";

type ArtistPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export async function generateMetadata({ params }: ArtistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return {
      title: "Artiste introuvable | Smove"
    };
  }

  return {
    title: `${artist.name} | Portfolio Artiste`,
    description: artist.shortBio,
    openGraph: {
      title: `${artist.name} | Portfolio Artiste`,
      description: artist.tagline,
      images: [artist.coverImage.src],
      type: "profile"
    }
  };
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  return <ArtistPortfolio artist={artist} />;
}
