import SideBar from "@/components/sideBar";
import { Body } from "../dashboard/style";
import Image from "@/components/Image";
import DatePayment from "@/components/dateBox";
import BoxCommon from "@/components/boxCommon";
import Text from "@/components/text";
import Box from "@/components/box";
import { blue, red, green, yellow } from "@/styles/colors";
import Button from "@/components/button";
import Circle from "@/components/circle";
import axios from 'axios'
import { useEffect, useState } from "react";
import { StudentType } from "./models";
import Modal from "@/components/modal";
import { useRouter } from "next/router";
import Link from "next/link";
import Input from "@/components/input";
import { ClassType } from "../dashboard/models";

const Logo = require('../../assets/logo.png')

const Class: React.FC = ({

}) => {
    const route = useRouter()

    const [visibleModalStudent, setVisibleModalStudent] = useState<boolean>(false)

    const [dataStudent, setDataStudent] = useState<StudentType[]>([])

    const [deleteClass, setDeleteClass] = useState(false)

    useEffect(() => {
       loadClass()
    }, [])

    const loadClass = () => {
        axios
        .get(`http://127.0.0.1:8000/api/lerAlunos/${route.query?.idTurma}`)
        .then((res) => {
            setDataStudent(res.data)
        })
        .catch((err) => console.log(err))
    }

    const removeClass = () => {
        axios.delete(`http://127.0.0.1:8000/api/removerTurma/${route.query?.idTurma}`)
        .then((res) => {
            route.back()
        }).then((res) => {
            
        }).catch((err) => console.log(err))
    }

    const [gender, setGender] = useState<'F' | 'M' | ''>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [dateBorn, setDateBorn] = useState<string>()

    const saveStudent = () => {
        axios
        .post('http://127.0.0.1:8000/api/inserirAluno', {
        nome: name,
        sexo: gender,
        dataNasc: dateBorn,
        cpf: cpf,
        email: email,
        idTurma: route.query.idTurma 
      })
        .then((res) => {
            alert(`Aluno adicionado com sucesso!`)
            setName('')
            setEmail('')
            setCpf('')
            setDateBorn('')
            loadClass()
        })
        .catch((err) => console.log(err))
    }

    return (
        <Body>
            {/* Barra lateral com informações sobre o total de turmas e alunos */}
            <SideBar>
                <BoxCommon ml='40px'>
                    <Link href='/dashboard'>
                        <Image src={Logo}/>
                    </Link>
                </BoxCommon>
                <BoxCommon mb='50px' ml='-100px' mt='30px'>
                        <Text type="H3" color="black">Escola de Cristalina</Text>
                        <Text type="H4" color="black">Fundamental e Médio</Text>
                </BoxCommon>
                <Box size="big" color={blue}>
                    <DatePayment date="Setembro" dayNumber={19} dayString="Terça-feira"></DatePayment>
                    <h3 id="helloUser">Olá, <br/>Marcus!</h3>
                </Box>
                <BoxCommon mt="20px" gap="40px" flexDirection="row">
                    <Box color="white" size="small">
                        <Text type="H2">{ dataStudent.length}</Text>
                        <Text type="H3" color="black">Alunos</Text>
                    </Box>
                </BoxCommon>
            </SideBar>
            <BoxCommon ml='400px'>

            <BoxCommon flexDirection="column">
                <BoxCommon ml='30px' mt='30px' flexDirection="row" gap="330px">
                    <Text type="H1" color="black">Turma { route.query.idTurma }</Text>
                    {/* Botões para manipular dados sobre a turma */}
                    <BoxCommon flexDirection="row" gap="20px">
                        <Button color={red} onClick={() => removeClass()}>Excluir turma</Button>
                        <Button color={green} onClick={() => setVisibleModalStudent(true)}>Adicionar Aluno</Button>
                    </BoxCommon>

                </BoxCommon>
                {/* Visão geral dos alunos com seus dados pessoais */}
                <BoxCommon width='1000px' ml='35px'>
                    <Text type="H2" color="black">Alunos</Text>
                    <BoxCommon
                        flexDirection="row"
                        gap='40px'
                        flexWrap="wrap"
                    >
                        {
                            dataStudent.map(student => (
                                <BoxCommon mt='40px'>
                                    <Box color="white" size="bigger">
                                    <BoxCommon position="absolute" left='20px' top='-15px'>
                                        <Circle color={student.sexo === 'M' ? blue : red}>
                                            <Text type="H4" color="white">{ student.sexo }</Text>
                                        </Circle>
                                    </BoxCommon>
                                        <Text type="H2" color="black">{ student.nome }</Text>
                                        <Text type="H4" color="black">{ student.email }</Text>
                                        <p>{ student.cpf }</p>
                                        <p>{ student.dataNasc }</p>
                                    </Box>
                                </BoxCommon>
                            ))
                        }
                    </BoxCommon>
                </BoxCommon>

                <Modal visible={visibleModalStudent}>
                    <BoxCommon ml='20px' mt='20px' mr='40px' justifyContent="space-between" flexDirection="row">
                        <Text color="white" type="H1" >Matrícula</Text>
                        <Text onclick={() => setVisibleModalStudent(false)} color="white" type="H1">X</Text>
                    </BoxCommon>
                    <BoxCommon ml='-113px' mt='50px' flexDirection="row" >
                        <BoxCommon mr='-120px'>
                                <Input name='gender' onChange={() => setGender('M')} value={gender} type="radio"/>
                        </BoxCommon>
                            <Text type="H3" color="white">Masculino</Text>
                    </BoxCommon>
                    <BoxCommon ml='-113px' mt='50px' flexDirection="row" >
                        <BoxCommon mr='-120px'>
                                <Input name='gender' onChange={() => setGender('F')} value={gender} type="radio"/>
                        </BoxCommon>
                            <Text type="H3" color="white">Feminino</Text>
                    </BoxCommon>
                    <BoxCommon gap="50px" ml='20px' mt='40px'>
                        <BoxCommon justifyContent="space-between" alignItems="center" flexDirection="row">
                            <BoxCommon>
                                <Text color="white" type="H3">Digite seu nome</Text>
                                <Input onChange={(e) => setName(e.target.value)} value={name} maxlenght={15} text="" type="text"/>
                            </BoxCommon>
                            <BoxCommon ml='50px' >
                                <Text type="H3" color="white" >Email</Text>
                                <Input onChange={(e) => setEmail(e.target.value)} value={email} maxlenght={35} type="email"/>
                            </BoxCommon>
                        </BoxCommon>
                        <BoxCommon justifyContent="space-between" gap="30px">

                            <BoxCommon gap="50px" flexDirection="row" justifyContent="space-between">
                                    <BoxCommon gap="30px">
                                        <Text color="white" type="H3">Digite seu CPF</Text>
                                        <Input onChange={(e) => setCpf(e.target.value)} value={cpf} maxlenght={14} type="text"/>
                                    </BoxCommon>
                            </BoxCommon>

                            <BoxCommon justifyContent="space-between" width="64vh" alignItems="center" flexDirection="row">
                                <BoxCommon gap="30px">
                                    <Text color="white" type="H3">Data de Nascimento</Text>
                                    <Input onChange={(e) => setDateBorn(e.target.value)} value={dateBorn} type="date"/>
                                </BoxCommon>
                                <BoxCommon ml='50px' gap="20px" mt='40px' flexDirection="row">
                                    <Button color={green} onClick={() => saveStudent()}>Finalizar</Button>
                                </BoxCommon>
                            </BoxCommon>
                        </BoxCommon>
                    </BoxCommon>
                </Modal>

            </BoxCommon>
            </BoxCommon>
        </Body>
    )
}

export default Class;