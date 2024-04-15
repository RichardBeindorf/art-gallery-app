import ArtPiecePreview from "./Preview/index";
import Image from "next/image";

export default function ArtPieceList({ data }) {
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <ul>
        {data.map((piece) => (
          <li key={piece.slug}>
            <ArtPiecePreview title={piece.name} artist={piece.artist} />
            <Image
              src={piece.imageSource}
              alt={`A painting by ${piece.artist}`}
              height={200}
              width={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
