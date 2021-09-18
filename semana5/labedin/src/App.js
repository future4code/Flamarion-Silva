import React from "react";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://st2.depositphotos.com/1797973/9513/v/950/depositphotos_95139610-stock-illustration-sketch-of-a-beautiful-girl.jpg"
          nome="Letícia Chijo"
          descricao="Oi eu sou a Chijo, sou instrutora da Labenu e sou legal"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEORvImyASDFA/company-logo_200_200/0/1584973612154?e=2159024400&v=beta&t=CgCOzQ9xyGZCf5sNge1pDN9N83Hq29dL0K_KCEJhPMU"
          nome="Atlantica"
          descricao="Crie seus apps sem saber programar!"
        />
      </PageSectionContainer>

      <div>
        <CardPequeno email={"chijo@chijo.com"} endereco={"Rua dos Bobos, 0"} />
      </div>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
