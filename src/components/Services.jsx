import React from 'react';
import Title from '../components/Title';
import styled from 'styled-components';
import play from '../asserts/play.ico';
import services from '../asserts/folha1.png';
import services2 from '../asserts/folha2.png';
import services3 from '../asserts/folha3.png';
import { useScroll } from 'components/UseScroll';
import { motion } from 'framer-motion';
import { servicesAnimations } from 'animation';

export default function Services() {
  const [element, controls] = useScroll();
  const data = [
    {
      type: "Blowout",
      text: "Chelow Cannabis was developed with the best first-world technology so you can experience significant results",
      image: services
    },
    {
      type: "Blowout",
      text: "Chelow Cannabis Pro has nanoparticle materials so that its active ingredient is absorbed easily.",
      image: services2
    },
    {
      type: "Blowout",
      text: "Chelow Cannabis Ultra Blue is concentrated in the Delta 90 formula with 10% CBD",
      image: services3
    },
  ];

  return (
    <Section id='services' ref={element}>
      <Title value="produtos" fontSize="1rem" />
      <div className="services">
        {data.map(({ type, text, image }, index) => {
         
          return (
            <motion.div className="services__service" key={index}
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="services__service__image">
                <img src={image} alt='Services' />
                <img src={play} alt='Readmore' className="play-icon" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <div className="services__service__description">{text}</div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 9rem;
    margin-top: 5rem;
    gap: 5rem;
    
    &__service {
      padding: 2rem;
      
      &:nth-of-type(2) {
        background-color: var(--primary-color);
        
        .services__service__title {
          span {
            color: #fff;
          }
          h2 {
            color: #40E0D0;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secundary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
    .services__service__image {
      margin-bottom: 3rem;
      
      .play-icon {
        width: 40px; 
        height: auto;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr; /* Altera a exibição para uma coluna em telas menores */
      gap: 2rem;
      paddint: 0 2rem;
      margin-left: 1px; /* Ajusta a margem para o contêiner .services */
    }
  
    .services__service {
      padding: 2rem; /* Ajusta o padding para tornar a .services__service mais larga */
    }
  
    /* Utiliza um seletor direto para o componente Title */
    /* Certifique-se de ajustar o valor da margem conforme necessário */
    h1 {
      margin-left: -40px; /* Ajusta a margem para o título "produtos" */
    }
  }
`;