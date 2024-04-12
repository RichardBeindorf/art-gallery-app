import useSWR from "swr"

export default function HomePage() {
  const { data, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art")
  console.log(data);
  return (
    <div>
      <h1>Welcome to our - Art Gallery App!</h1>
      <ul>
        {data.map((pieces) => (
          <li key={pieces.slug}>
            <ArtPieceList pieces={pieces}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
