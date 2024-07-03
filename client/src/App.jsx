import { useContext } from 'react';

import NavBar from "./components/NavBar";
import {
  Routes, Route
} from "react-router-dom"
import {Home, Recommend, Setting} from "./pages/index"
import { Box, Container, CssBaseline } from '@mui/material';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from
} from "@apollo/client";
import { AppContext } from './providers/appContext';
import I18nProvider from "./providers/i18n";



function App() {

  const { state } = useContext(AppContext);
 const httpLink = new HttpLink({ uri: `${window.location.origin}/graphql` });
 
 //const httpLink = new HttpLink({ uri: `http://localhost:4000/graphql` });
 
 const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers") ? operation.getContext().headers : {};
  
    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale
      }
    });
    return forward(operation);
  });
  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
  });

  return (
   <>
 <I18nProvider locale={state.locale}>
        <ApolloProvider client={client}>
          <CssBaseline />

          <NavBar />
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.grey[100],
            }}
          >
            <Container maxWidth="xl" sx={{ bgcolor: "#ebebeb", mt: 7 }}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/recommend" element={<Recommend />} />
              </Routes>
            </Container>
          </Box>
        </ApolloProvider>
      </I18nProvider>

   </>
  );
}

export default App;
