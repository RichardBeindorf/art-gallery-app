
export default function ArtPieceList({ pieces, title, artist, image}) {
    
    return <div>
        <h4>{title}</h4>
        <h6>{artist}</h6>
        <img src={image}/>
        {/* <ArtPiece /> */}
        </div>
  }
  