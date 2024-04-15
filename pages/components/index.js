import ArtPiecePreview from "./Preview/index";


export default function ArtPieceList({ data }) {
    return <div>
        <ul>
        {data.map((piece) => {
            const imageUrl = piece.imageSource;
            console.log("Image URL:", imageUrl);
            <li key={piece.slug}>
                <ArtPiecePreview title={piece.name} artist={piece.artist} image={imageUrl}/>
            </li>
        })}
      </ul>
        </div>
  }
  