import Head from 'next/head';
import HeaderMain from '../components/global-comps/headerGlobal';
import styled from 'styled-components';
import backgroundImg from '../public/img/Cover.png';
import GlobalButton from '../components/global-comps/buttonGlobal';

// Estilos

const MainContainer = styled.main`
  background-image: url(${props => props.img.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 86vh;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  text-align: center;
  
  & h1 {
    grid-column: 2;
    /* max-width: 850px; */
    margin-top: 60px;
    font-size: calc(45rem / 16);
    color: white;
    letter-spacing: 15px;
    line-height: calc(60rem / 16);
    
    @media (max-width: 550px) {
      font-size: calc(25rem / 16);
      letter-spacing: 10px;
    }
  }
  
  & .main__button {
    grid-row: 2;
    grid-column: 2;
    
    @media (max-width: 550px) {
      font-size: calc(16rem / 16);
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;
/* ------------------------------------------- */

// Componente

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HeaderMain />
      <MainContainer img={backgroundImg}>
        <h1>Conoce las novedades y noticias del Mundo Tech</h1>
        <GlobalButton 
          className='main__button'
          link={'/blogs'} 
          buttonText={'Entra ya!'} 
          bgColor='var(--main-green)'
          border='none'
          fontSize={'20'}
        />
      </MainContainer>
    </>
  )
}
