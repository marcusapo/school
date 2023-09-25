import { Body } from "./style";
import Box from "@/components/box";
import Text from "@/components/text";
import { black, blue,red, green,yellow, white } from "@/styles/colors";
import Button from '../../components/button'
import Image from "@/components/Image";
import Container from "@/components/container";
import BoxCommon from "@/components/boxCommon";
import SideBar from "@/components/sideBar";
import { useRouter } from "next/router";
import DatePayment from "@/components/dateBox";
import Circle from "@/components/circle";
import Modal from "@/components/modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClassType } from "./models";
import Input from "@/components/input";
import Link from "next/link";

const Dashboard: React.FC = ({
  
}) => {
  const route = useRouter()
  const Logo = require('../../assets/Logo.png')

  const [visibleModalClass, setVisibleModalClass] = useState<boolean>(false)

  const [dataClass, setDataClass] = useState<ClassType[]>([])

  const [dateStart, setDateStart] = useState<string>('')
  const [dateEnd, setDateEnd] = useState<string>('')
  const [maxStudent, setMaxStudent] = useState<string>('')

  useEffect(() => {
    loadClasses()
  }, [])

  const loadClasses = () => {
    axios
    .get('http://127.0.0.1:8000/api/lerTurmas')
    .then((res) => {
      setDataClass(res.data)
    })
    .catch((err) => console.log(err))
  }

  const saveClass = () => {
    axios
    .post('http://127.0.0.1:8000/api/inserirTurma', {
      dataInicio: dateStart,
      dataFim: dateEnd,
      qtMaxAlunos: maxStudent
    })
    .then((res) => {
      setVisibleModalClass(false)
      loadClasses()
    })
    .catch((err) => console.log(err))
  }

  return (
    <Body>
      <SideBar>
        <BoxCommon ml='40px'>
          <Link href='/login'>
            <Image src={Logo}/>
          </Link>
        </BoxCommon>
        <BoxCommon mb='50px' ml='-100px' mt='30px'>
          <Text type="H3" color="black">Escola de Cristalina</Text>
          <Text type="H4" color="black">Fundamental e Médio</Text>
        </BoxCommon>
        <Box size="big" color={blue}>
          <DatePayment date="Setembro" dayNumber={19} dayString="Terça-feira" />
          <h3 id="helloUser">Olá, <br/>Marcus!</h3>
        </Box>
        <BoxCommon mt="20px" gap="40px" flexDirection="row">
          <Box color="white" size="small">
            <Text type="H2">{ dataClass.length }</Text>
            <Text color="black" type="H3">Turmas</Text>
          </Box>
          <Box color="white" size="small">
            <Text type="H2">14</Text>
            <Text type="H3" color="black">Alunos</Text>
          </Box>
        </BoxCommon>
      </SideBar>
      <BoxCommon ml='400px'>

        <Container>
            <BoxCommon mb='100px' width="900px" flexDirection="row" justifyContent="space-between">
              <Text type='H1' color={black}>Dashboard</Text>
              <Button color={green} onClick={() => setVisibleModalClass(true)}>Adicionar Turma</Button>
            </BoxCommon>
          <Text type='H2' color={black}>Turmas</Text>
          <BoxCommon mt='30px' gap="48px" flexWrap="wrap" flexDirection="row">
            {
              dataClass && dataClass?.map(turma => (
                <Box 
                  size="small"
                  color="white"
                  onClick={() => route.push({ pathname: 'class', query: { idTurma: turma.idturma } })}
                >
                  <BoxCommon mt='-20px' mb='0px' mr='100px'>
                    <Circle color={red}>
                      <Text type="H4" color="white">{ turma.idturma }</Text>
                    </Circle>
                  </BoxCommon>
                  <Text type="H2">{ turma.count}</Text>
                  <Text type="H3">Alunos</Text>
                </Box>
              ))
            }
          </BoxCommon>

          <Modal visible={visibleModalClass}>
              <BoxCommon ml='20px' mt='20px' mr='40px' justifyContent="space-between" flexDirection="row">
                  <Text color="white" type="H1" >Turma</Text>
                  <Text onclick={() => setVisibleModalClass(false)} color="white" type="H1">X</Text>
              </BoxCommon>
              <BoxCommon gap="40px">
                <BoxCommon mt='30px' ml='20px'>
                    <Text type="H3" color={white}>Data Início</Text>
                    <Input type="date" text={dateStart} onChange={(e) => setDateStart(e.target.value)} />
                </BoxCommon>
                <BoxCommon ml='20px'>
                  <Text type="H3" color={white}>Data Fim</Text>
                  <Input type="date" text={dateEnd} onChange={(e) => setDateEnd(e.target.value)} />
                </BoxCommon>
              <BoxCommon ml='20px'>
                <Text type='H3' color={white}>Máximo de Alunos</Text>
                <Input type="text" text={maxStudent} onChange={(e) => setMaxStudent(e.target.value)} />
              </BoxCommon>
              </BoxCommon>
              <BoxCommon mt='30px' ml='20px'>
                <Link href='/dashboard'>
                  <Button color={green} onClick={saveClass}>Adicionar</Button>
                </Link>
              </BoxCommon>
          </Modal>
        
        </Container>
      </BoxCommon>
    </Body>
  )
}

export default Dashboard