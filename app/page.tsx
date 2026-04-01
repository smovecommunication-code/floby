import { ArtistPortfolio } from "@/components/ArtistPortfolio";
import { featuredArtist } from "@/data/artists";

export default function HomePage() {
  return <ArtistPortfolio artist={featuredArtist} />;
}
