import ArtPieceList from "../components/index";
import Spotlight from "../components/Spotlight/index";
import { useState } from "react";


export default function HomePage({ data }) {
  const [spotlightPiece, setSpotlightPiece] = useState({
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
  });

  function handleRandomPiece() {
    const randomArrayNumber = Math.floor(Math.random() * data.length);
    const randomArtPiece = data[randomArrayNumber];
    return setSpotlightPiece(randomArtPiece);
  }

  return (
    <div>
      <h1>Welcome to our - Art Gallery App!</h1>
      <Spotlight spotlightPiece={spotlightPiece} />
      <ArtPieceList data={data} />
      <button onClick={handleRandomPiece}>New Spotlight Piece</button>
    </div>
  );
}