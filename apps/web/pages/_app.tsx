import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

// Create a client
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          fallback={<div>Something went wrong!</div>}
          onError={console.error}
        >
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
}
