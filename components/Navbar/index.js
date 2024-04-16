const { default: Link } = require("next/link");


export default function Navigation({ data }) {

  return (
    <nav>
      <ul>
        <li>
          {/* Hier noch Verlinkungen anpassen */}
          <button><Link href="/">Spotlight</Link></button>
        </li>
        <li>
          <Link href="/components/">Art Pieces List</Link>
        </li>
      </ul>
    </nav>
  );
};
