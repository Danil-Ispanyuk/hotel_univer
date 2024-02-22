import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
