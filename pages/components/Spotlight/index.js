import Image from "next/image";


export default function Spotlight({ spotlightPiece }){
    console.log(spotlightPiece)
    return <>
    <div key={spotlightPiece.slug}>
    <Image 
    src={spotlightPiece.imageSource}
    alt={`A paintig by the artist`}
    height={200}
    width={200}
    />
    <h6>Made by {spotlightPiece.artist} </h6>
    </div>
    </>
  );
}
