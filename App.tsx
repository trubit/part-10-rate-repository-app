import RepositoryList from "./src/components/RepositoryList";
import AppBar from "./src/components/AppBar";
import SignIn from "./src/components/SignIn";
import { NativeRouter, Route, Routes } from "react-router-native";
import { ApolloProvider } from "@apollo/client/react";
import apolloClient from "./src/utils/apolloClient";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <AppBar />
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </NativeRouter>
    </ApolloProvider>
  );
};

export default App;
