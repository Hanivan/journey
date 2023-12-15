import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-canvas pb-1 flex items-end text-xs">
      <Image
        src={`/logo.svg`}
        alt="Nip Journey"
        width={125}
        height={85}
        className="pr-2"
      />
      <p className="pr-2">
        &copy;{DateTime.now().year} Hanivan Rizky Sobari | Powered by Garpit &
        Liong
      </p>
      <Link
        href={`https://palestine.thereisalist.org/`}
        target="_blank"
        tabIndex={-1}
        className="underline"
        title="Check it out"
      >
        🇵🇸 #thereisalist
      </Link>
    </footer>
  );
}
