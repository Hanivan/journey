"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TerminalInput from "./Terminal-Input";

const Terminal: React.FC = () => {
  const [host, setHost] = useState("");
  const router = useRouter();

  const closeTerminal = () => {
    router.push("about:blank");
  };

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  return (
    <div className="relative bg-term container rounded-sm mx-auto max-w-125 h-[615px] overflow-auto">
      <button
        className="absolute left-2 top-2 w-4 h-4 block bg-term-red rounded-full"
        onClick={closeTerminal}
        title="Close terminal"
      ></button>
      <h5 className="text-term-green text-sm text-center mt-1">
        guest@{host || "dev"}
      </h5>

      <article className="pt-2 mx-1">
        <TerminalInput host={host} />
      </article>
    </div>
  );
};

export default Terminal;
