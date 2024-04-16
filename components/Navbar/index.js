const { default: Link } = require("next/link");


export const Navigation = () => {

  return (
    <nav>
      <ul>
        <li>
          {/* Hier noch Verlinkungen anpassen */}
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/components/">Art Pieces List</Link>
        </li>
      </ul>
    </nav>
  );
};
