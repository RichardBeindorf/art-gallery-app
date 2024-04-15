import useSWR from "swr"
import ArtPieceList from "./components/index"
import Spotlight from "./components/Spotlight/index"


export default function HomePage() {
  const { data, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art")

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <div>
      <h1>Welcome to our - Art Gallery App!</h1>
      <ArtPieceList data={data}/>
    </div>
  );
}