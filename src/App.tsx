import styled, { ThemeProvider } from "styled-components";
import carro from "./assets/side-image.jpeg";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import GlobaStyles from "./styles/GlobaStyles";
import dark from "./styles/themes/dark";
const Main = styled.main`
  display: flex;
  flex-direction: row;
`;

const Conteudo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const ImagemCarro = styled.div`
  @media (max-width: 1023px) {
    display: none;
  }
  grid-area: image;
  width: 100%;
  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;
function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobaStyles />
      <Main>
        <Conteudo>
          <Header />
          <Form />
        </Conteudo>
        <ImagemCarro>
          <img src={carro} alt="Carro" />
        </ImagemCarro>
      </Main>
    </ThemeProvider>
  );
}

export default App;
