import apiClient from "@/configs/api";
import { GithubProfileResponse } from "@/types/github";
import { QueryOptions } from "@tanstack/react-query";

export type IGithubRequest = {
  username: string;
};

export namespace Github {
  export const getProfile = async ({ queryKey }: QueryOptions) => {
    const searchItem = queryKey![1] as IGithubRequest;

    const data = await apiClient.get<GithubProfileResponse>(
      `https://api.github.com/users/${searchItem?.username}`
    );

    return data;
  };
}
