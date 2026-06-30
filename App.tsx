import RepositoryList from "./src/components/RepositoryList";
import AppBar from "./src/components/AppBar";
import SignIn from "./src/components/SignIn";
import { NativeRouter, Route, Routes } from "react-router-native";

const App = () => {
  return (
    <NativeRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
