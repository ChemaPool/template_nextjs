/* eslint-disable no-console */
import { DefaultOptions, QueryClient, QueryClientProvider } from "react-query";

const querClientOptions = {
  defaultOptions: {
    queries: {
      onError: console.error("Query Error"),
      refetchOnWindowFocus: false,
      retry: false,
    },
    mutations: {
      onError: console.error("Mutation Error"),
      refetchOnWindowFocus: false,
      retry: false,
    },
  } as DefaultOptions,
};

const queryClient = new QueryClient(querClientOptions);
export { queryClient, QueryClientProvider };
