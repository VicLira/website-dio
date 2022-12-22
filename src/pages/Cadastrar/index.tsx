import React from 'react';
import { MdLock, MdEmail, MdPerson } from 'react-icons/md';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api'

import {
    Container,
    Column,
    Wrapper,
    Title,
    TitleCadastro,
    SubtitleCadastro,
    LoginText
} from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

interface IFormInputs {
    fullName: string;
    email: string;
    password: string;
  }
  
  const schema = yup.object({
    fullName: yup.string().required('Campo obrigatório'),
    email: yup.string().email('e-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Cadastrar = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        mode: 'onChange',
      });

    const onSubmit: SubmitHandler<IFormInputs> = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}`)
            let nUser = await api.get('users')
                                .then((response) => response.data)
        
            if(data.length===1){
                alert('E-mail já cadastrado')
            } else {
                api.post('users', {
                    id: nUser.length+=1,
                    name: formData.fullName,
                    email: formData.email,
                    senha: formData.password,
                })
            }

        }catch{
          alert('Houve um erro')
        }
    };

    return (
    <>
        <Header autenticado={false}/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.

                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            name='fullName'
                            errorMessage={errors.fullName?.message}
                            control={control} 
                            placeholder="Nome Completo" 
                            type="name" 
                            leftIcon={<MdPerson />}
                        />
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
                    <Column>
                        <SubtitleCadastro>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubtitleCadastro>
                        <LoginText>
                            Já tenho conta. <Link to={'/login'}>Fazer login</Link>
                        </LoginText>
                    </Column>
                </Wrapper>
            </Column>
        </Container>
    </>
    
  );
}

export { Cadastrar };