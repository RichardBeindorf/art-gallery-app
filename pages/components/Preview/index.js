export default function ArtPiecePreview({ image, artist, title}){
    return <>
    <h3>{title}</h3>
    <p>{artist}</p>
    <img src={image}/>
    </>
}