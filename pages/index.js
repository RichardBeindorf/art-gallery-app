import useSWR from "swr"
import ArtPieceList from "./components/index"
import Spotlight from "./components/Spotlight/index"
import { useState } from "react"


export default function HomePage() {
  const [spotlightPiece, setSpotlightPiece] = useState({slug: "blue-and-red", artist: "Jung-Hua Lui", imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",});
  const { data, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

 function handleRandomPiece(){
  const randomArrayNumber = Math.floor(Math.random()*data.length);
  const randomArtPiece = data[randomArrayNumber];
  return setSpotlightPiece(randomArtPiece);
 }

  return (
    <div>
      <h1>Welcome to our - Art Gallery App!</h1>
      <ArtPieceList data={data}/>
      <button onClick={handleRandomPiece}>New Spotlight Piece</button>
    </div>
  );
}