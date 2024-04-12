import ArtPiecePreview from "./Preview/index";


export default function ArtPieceList({ data }) {
    return <div>
        <ul>
        {data.map((piece) => (
            <li key={piece.slug}>
                <ArtPiecePreview title={piece.name} artist={piece.artist}/>
            </li>
        ))}
      </ul>
        </div>
  }
  