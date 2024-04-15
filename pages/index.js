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
      <h1>Welcome to the<br/><em>Art Gallery</em>!</h1>
      <Spotlight spotlightPiece={spotlightPiece}/>
      {/* <ul>
        {data.map((piece) => (
          <li key={piece.slug}>
            <ArtPieceList pieces={piece} title={piece.name} artist={piece.artist}/>
          </li>
        ))}
      </ul> */}
      <button onClick={handleRandomPiece}>New Spotlight Piece</button>
    </div>
  );
}
