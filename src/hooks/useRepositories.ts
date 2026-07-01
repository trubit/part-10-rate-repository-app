import { useQuery } from "@apollo/client/react";
import { GET_REPOSITORIES } from "../graphql/queries";

type Repository = {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
};

type GetRepositoriesResult = {
  repositories: {
    edges: {
      node: Repository;
    }[];
  };
};

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery<GetRepositoriesResult>(
    GET_REPOSITORIES,
    {
    fetchPolicy: "cache-and-network",
    }
  );

  const repositories =
    data?.repositories?.edges?.map((edge) => edge.node) || [];

  return {
    repositories,
    loading,
    error,
    refetch,
  };
};

export default useRepositories;
