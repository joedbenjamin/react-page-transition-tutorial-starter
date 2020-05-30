import React, { createContext } from 'react';
import {useLocalStore} from 'mobx-react-lite';
import Page from './components/pages';
import { createGlobalStyle } from 'styled-components';
import PageManagerStore, {IPageManagerStore} from './store/pageManagerStore';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    overflow: hidden;
    background-color: black;
  }
`;

export const PageManagerStoreContext = createContext<IPageManagerStore>({});

function App() {
  const pageManagerStore = useLocalStore(() => PageManagerStore);
  return (
    <React.Fragment>
      <GlobalStyle />
      <PageManagerStoreContext.Provider value={{pageManagerStore}}>
        <Page />
      </PageManagerStoreContext.Provider>
    </React.Fragment>
  );
}

export default App;
