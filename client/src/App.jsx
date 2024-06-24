import { useContext } from 'react';

import NavBar from "./components/NavBar";
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom"
import {Home, Recommend, Setting} from "./pages/index"
import { Container } from '@mui/material';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from
} from "@apollo/client";
import { AppContext } from './providers/appContext';



function App() {
 /*  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
    connectToDevTools: true
  }); */
  const { state } = useContext(AppContext);
  const httpLink = new HttpLink({ uri: 'http://localhost:80/graphql' });
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
  <ApolloProvider client={client}>
   <BrowserRouter>
    <NavBar/>
    <Container maxWidth="xl" sx={{bgcolor:"#ebebeb"}}>
        <Routes>
        <Route index  element ={<Home/>}/>
        <Route path="/setting" element ={<Setting/>}/>
        <Route path="/recommend" element ={<Recommend/>}/>
      </Routes>
      </Container>
     
    </BrowserRouter>
    </ApolloProvider>

   </>
  );
}

export default App;
