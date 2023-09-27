import React from "react";
import { AppWrapper } from "../../styles/Global";
import { Container } from "../../styles/Pages/Login";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsEyeSlash } from "react-icons/bs";
const Login: React.FC = () => {
  return (
    <AppWrapper>
      <Container className="container">
        <img src="images/logo.svg" className="logo" />
        <div className="input-login">
          <Stack spacing={4} className="input-login">
            <h3>Entrar na Plataforma</h3>
            <Text>E-mail:</Text>
            <InputGroup>
              <Input type="tel" placeholder="E-mail" />
            </InputGroup>
            <Text>Senha:</Text>
            <InputGroup>
              <Input placeholder="Senha" type="password" />
              <InputRightElement>
                <BsEyeSlash />
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="blue">Entrar</Button>
          </Stack>
        </div>
      </Container>
    </AppWrapper>
  );
};

export default Login;
