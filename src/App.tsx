import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Router";
import { AuthProvider } from "./Hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AppWrapper } from "./styles/Global";
function App() {
  return (
    <ChakraProvider>
      <AppWrapper>
        <AuthProvider>
          <ToastContainer />
          <Router />
        </AuthProvider>
      </AppWrapper>
    </ChakraProvider>
  );
}

export default App;
