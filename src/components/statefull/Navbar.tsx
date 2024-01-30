"use client";

import { siteConfig } from "@/configs/site";
import { Github } from "@/services/github";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { NotNimeIcon } from "../stateless/icons";

export const Navbar: FC = () => {
  const {
    data: githubProfile,
    error,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["github-profile", { username: "Hanivan" }],
    queryFn: Github.getProfile,
    retry: 1,
    select: ({ data }) => data,
  });

  return (
    <nav className="absolute top-0 left-0 max-h-96 h-auto bg-j-glass/60 p-4 m-2 flex flex-col rounded-full items-center justify-evenly">
      <Link href={siteConfig.navItems[0].href} className="font-bold mt-5">
        Journey
      </Link>
      <span className="flex flex-col gap-5 text-slate-700 mt-10">
        {siteConfig.navItems.map((nav, i) => (
          <Link key={i} href={nav.href} className="font-medium">
            {nav.label}
          </Link>
        ))}
      </span>
      <section className="bg-j-background rounded-full h-auto p-4 mt-6">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          title={githubProfile?.name}
        >
          <Image
            src={githubProfile?.avatar_url || ""}
            alt={githubProfile?.login || "hanivan"}
            width={45}
            height={45}
            className="rounded-full"
          />
        </Link>

        <hr className="border border-slate-300 my-5" />
        <Link href={siteConfig.links.notnime} target="_blank" title="ok">
          <NotNimeIcon size={28} className="mx-auto" />
        </Link>
      </section>
    </nav>
  );
};
