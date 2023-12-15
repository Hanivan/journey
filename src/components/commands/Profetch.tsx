import { fetchUserGithub } from "@/services/fetch-user-github";
import { QueryClient, useQuery } from "@tanstack/react-query";
import cx from "classnames";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false,
    },
  },
});

function useGithub() {
  return useQuery(
    {
      queryKey: ["github"],
      queryFn: fetchUserGithub,
    },
    queryClient
  );
}

export interface ProfetchProps {
  host: string;
}

const Profetch: React.FC<ProfetchProps> = ({ host }) => {
  const [urlPicture, setUrlPicture] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [divider, setDivider] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [pubRepo, setPubRepo] = useState<number>(0);

  const { status, data, error, isFetching } = useGithub();

  useEffect(() => {
    if (data && status === "success") {
      setUsername(data.name);
      setUrlPicture(data.avatar_url);
      setDivider("-".repeat(`${data.name}@${host}`?.length + 7));
      setBio(data.bio);
      setPubRepo(data.public_repos);
    }
  }, [data]);

  //   console.log(user);

  return (
    <div>
      {status === "pending" ? (
        "Fetching..."
      ) : error instanceof Error ? (
        <span>Error: {error.message}</span>
      ) : (
        <div className="flex">
          {!urlPicture ? (
            <></>
          ) : (
            <Image
              src={urlPicture}
              alt={username}
              width={180}
              height={0}
              className={cx("rounded border border-accent shadow")}
            />
          )}
          <div className="mx-4">
            <p>
              {username}@{host}
            </p>
            <span>{divider}</span>
            <p>Real Name: Hanivan Rizky Sobari</p>
            <p>Nick: Haniv | Anip | Niv | Nip</p>
            <p>Likes: Coding, Anime, Music, Walking</p>
            <p>Description: {bio}</p>
            <p>Public Repo: {pubRepo}</p>
          </div>
          {/* <div>{isFetching ? "Background Updating..." : " "}</div> */}
        </div>
      )}
    </div>
  );
};

export default Profetch;
