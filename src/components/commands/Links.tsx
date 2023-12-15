import Link from "next/link";
import React from "react";

const Links: React.FC = () => {
  return (
    <ul>
      <li>
        <Link
          href={`https://github.com/Hanivan`}
          target="_blank"
          className="underline"
        >
          Github
        </Link>
      </li>
      <li>
        <Link
          href={`https://t.me/hanivanrizky`}
          target="_blank"
          className="underline"
        >
          Telegram
        </Link>
      </li>
      <li>
        <Link
          href={`https://instagram.com/hanivanrizky`}
          target="_blank"
          className="underline"
        >
          Instagram
        </Link>
      </li>
      <li>Twitter</li>
      <li>
        <Link
          href={`https://social.gnuweeb.org/@hanivanrizky`}
          target="_blank"
          className="underline"
        >
          Mastodon
        </Link>
      </li>
    </ul>
  );
};

export default Links;
