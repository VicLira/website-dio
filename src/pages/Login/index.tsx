import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { MdEmail, MdLock} from 'react-icons/md'

import { api } from '../../services/api'
import { 
  Container,
  Title,
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email('e-mail não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {

  const navigate = useNavigate()


  const { control, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormInputs> = async formData => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length === 1){
        navigate('/feed');
      } else {
        alert('Email ou senha inválido')
      }
    }catch{
      alert('Houve um erro')
    }
  };


  return (
    <>
        <Header autenticado={false} srcUserImg=""/>
        <Container>
          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                  name='email'
                  errorMessage={errors.email?.message}
                  control={control} 
                  placeholder="E-mail" 
                  type="email" 
                  leftIcon={<MdEmail />}
                />
                <Input 
                  name='password'
                  errorMessage={errors.password?.message}
                  control={control}
                  placeholder="Senha" 
                  type="password" 
                  leftIcon={<MdLock />}
                />
                <Button title="Entrar" variant='secondary' type="submit"/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </Container>
    </>
    
  );
}

export { Login };