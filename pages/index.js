import useSWR from "swr";
import ArtPieceList from "./components/index";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <div>
      <h1>Welcome to our - Art Gallery App!</h1>
      <ul>
        {data.map((piece) => {
          const imageUrl = piece.imageSource;
          console.log("Image URL:", imageUrl);
          return (
            <li key={piece.slug}>
              <ArtPieceList
                title={piece.name}
                artist={piece.artist}
                image={imageUrl}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
