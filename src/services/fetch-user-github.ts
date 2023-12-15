import axios from "axios";

export interface UserGithubPayload {
  username: string;
}

export interface GithubResponse {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  avatar_url: string;
}

export const fetchUserGithub = async () => {
  const { data } = await axios.get<GithubResponse>(
    "https://api.github.com/users/Hanivan"
  );

  return data;
};
