import useSWR from "swr"
import ArtPieceList from "./components/index"

export default function HomePage() {
  const { data, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art")

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  console.log(data);
  return (
    <div>
      <h1>Welcome to our - Art Gallery App!</h1>
      <ul>
        {data.map((piece) => (
          <li key={piece.slug}>
            <ArtPieceList pieces={piece} title={piece.name} artist={piece.artist} image={"https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"}/>
          </li>
        ))}
      </ul>
    </div>
  );
}