import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { motion } from 'framer-motion';
import { useScroll } from './UseScroll';
import { contactAnimation } from 'animation';

export default function Contact() {
  const [element, controls] = useScroll();

  return (
    <Section id='contact' ref={element}>
      <Title value='contact' />
      <motion.div className="contact" 
         variants={contactAnimation}
         animate={controls}
         transition={{
           delay: 0.03,
           type: 'tween',
           duration: 0.8
         }}
      >
        <div className="contact__title">
          <p>Stain in touch with me</p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Just to say hi</h4>
            <p>If you have any questions simply use the following details</p>
            <p>Business out to theik thers presence to never level If you have any questions simply use the following details</p>
            <p>
              <strong>Address:</strong> 33 Flyover Road
            </p>
            <p>
              <strong>Email:</strong> Cannabis@gmail.com
            </p>
            <p>
              <strong>Website:</strong> www.website.com
            </p>
          </div>
          <FormContainer>
            <h4>Entrar em contato</h4>
            <Form>
              <Input type='text' placeholder='Seu nome' />
              <Input type='email' placeholder='Seu email' />
              <Textarea placeholder='Sua mensagem' />
              <SubmitButton>Enviar mensagem</SubmitButton>
            </Form>
          </FormContainer>
        </div>
      </motion.div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .contact {
    color: var(--primary-color);
    margin: 0 18rem;
    &__title {
      margin: 6rem 0 2rem 0;
      p {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2 {
        font-size: 2rem;
        color: var(--secundary-color);
      }
    }
    &__data {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      &__description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        p {
          letter-spacing: 0.1rem;
          text-align: justify;
          margin-top: 20px;
        }
        strong {
          text-transform: uppercase;
        }
      }
      &__form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
    
  }
  @media screen and (max-width: 600px) {

    .contact__title {
      margin-top: 363px;
    }
    .contact {
    
      margin: 0 2rem; /* Define a margem para 2rem em vez de 18rem */
    }
    
    .contact__data {
      margin-top: 43px;
      grid-template-columns: 1fr; /* Define a grade para uma coluna em telas menores */
    }
    
    .contact__data__description {
      
      margin-top: 0; /* Ajusta a margem superior para remover o espaço extra */
    }
  }
  
  

`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  resize: vertical;

  &:focus {
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #40E0D0; 
  }
`;