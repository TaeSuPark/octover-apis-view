import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import useApiErrorHandler from "@hooks/useApiErrorHandler"

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
