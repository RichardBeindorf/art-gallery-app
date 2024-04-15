import Image from "next/image";

export default function Spotlight({ data }) {
  return (
    <>
      {data.map((piece) => {
        return (
          <div key={piece.slug}>
            <h6>Made by {piece.artist}</h6>
          </div>
        );
      })}
    </>
  );
}
