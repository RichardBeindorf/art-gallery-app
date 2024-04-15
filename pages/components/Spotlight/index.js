import Image from 'next/image'

export default function Spotlight({ data }){

    return <>
    {data.map((piece) => {
    return <div key={piece.slug}>
    <Image 
    src={piece.imageSource}
    alt={`A paintig by the artist`}
    height={200}
    width={200}
    />
    <h6>Made by {piece.artist}</h6>
    </div>
    })}
    </>
}