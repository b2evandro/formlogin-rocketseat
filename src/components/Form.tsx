import React from "react";
import styled from "styled-components";
import lock from "../assets/lock.svg";
import loginIcone from "../assets/log-in.svg";
import mail from "../assets/mail.svg";

interface IInputProps {
  label: string;
  name: string;
  type: string;
  placeHolder: string;
  required?: boolean;
  src?: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 821px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
const FormContainer = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  border-radius: 4px;
  span > a {
    color: ${(props) => props.theme.colors.primaryColor};
  }

  button[type="submit"] {
    padding: 0.8rem;
    background-color: ${(props) => props.theme.colors.primaryColor};
    font-size: 1.1rem;
    text-transform: uppercase;
    border-radius: 4px;
  }

  p {
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.primaryColor};
    display: flex;
    justify-content: center;

    a {
      padding-left: 0.5rem;
      color: ${(props) => props.theme.colors.primaryColor};
      font-weight: bold;
    }
  }

  @media (min-width: 821px) {
    background-color: ${(props) => props.theme.colors.formBackground};
    min-width: 400px;
  }
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.textBase};
  margin-bottom: 1rem;

  label {
    padding-bottom: 0.5rem;
  }
  input {
    border: 2px solid #868686;
    background-color: black;
    color: ${(props) => props.theme.colors.textBase};
    border-radius: 4px;
    padding: 0.8rem;
  }

  input:focus {
    border: 2px solid ${(props) => props.theme.colors.primaryColor};
  }
  input[type="email"] {
    background-image: url(${mail});
    background-repeat: no-repeat;
    padding-left: 30px;
    background-position: 5px center;
  }

  input[type="password"] {
    background-image: url(${lock});
    background-repeat: no-repeat;
    padding-left: 30px;
    background-position: 5px center;
  }
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 0.8rem;

  div > span {
    color: ${(props) => props.theme.colors.textBase};
  }

  input:checked {
    filter: invert(100%) hue-rotate(18deg) brightness(1.7);
  }
  input {
    filter: invert(100%) hue-rotate(18deg) brightness(1.7);
  }
`;
const HeaderContainer = styled.header`
  padding-top: 2rem;
  padding-left: 1rem;
  color: ${(props) => props.theme.colors.textBase};
  border-radius: 4px;
  @media (min-width: 821px) {
    background-color: ${(props) => props.theme.colors.formBackground};
    margin: 0 auto;
    align-items: center;
    min-width: 400px;
  }
`;

const Logar = styled.div`
  display: flex;
  h1 {
    padding-left: 0.5rem;
    color: ${(props) => props.theme.colors.textTitle};
  }
`;
function InputBase({ label, name, ...rest }: IInputProps) {
  return (
    <Input>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </Input>
  );
}

export const Form: React.FC<{}> = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logar>
          <img src={loginIcone} alt="Icone de logar" />
          <h1>Faça seu Login </h1>
        </Logar>
        <p>Entre com suas informações de cadastro.</p>
      </HeaderContainer>
      <FormContainer>
        <InputBase
          label="E-mail"
          name="email"
          type="email"
          src={mail}
          required={true}
          placeHolder="Digite seu Email"
        />
        <InputBase
          label="Senha"
          name="senha"
          required={true}
          type="password"
          src={lock}
          placeHolder="Digite sua Senha"
        />
        <Check>
          <div>
            <input id="check" type="checkbox" name="remeber" />
            <label htmlFor="check"> Lembre-me</label>
          </div>
          <span>
            <a href="#">Esqueci minha senha</a>
          </span>
        </Check>
        <button type="submit">Entrar</button>
        <p>
          Não tem uma conta? <a href="#">Registre-se</a>
        </p>
      </FormContainer>
    </Container>
  );
};
