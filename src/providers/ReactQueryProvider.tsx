import useApiErrorHandler from "@hooks/useApiErrorHandler"
import { QueryCache, QueryClient, QueryClientProvider } from "react-query"

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const { handleErrors } = useApiErrorHandler()
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: handleErrors,
      },
      queries: {
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: handleErrors,
    }),
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
