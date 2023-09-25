import './style'
import Image from "@/components/Image";
import Input from "@/components/input";
import BoxCommon from "@/components/boxCommon";
import { BodyLogin, Line } from "./style";
import Text from '@/components/text';
import Button from '@/components/button';
import Link from 'next/link';
import { blue, green, red } from '@/styles/colors';
import { LoginProps } from './models';

const LoginWindow: React.FC<LoginProps> = ({

}) => {

    const Logo = require('../../assets/logo.png')

    return (
        <BodyLogin>
            <BoxCommon flexDirection="column" mb='320px' gap="40px" alignItems="center" >
                <Image src={Logo}/>
                <BoxCommon ml='-185px' gap='30PX'>
                    <Text type='H3' color='black'>Nome</Text>
                    <Input maxlenght={15} type="text" text='Email'/>
                    <Text type='H3'>Senha</Text>
                    <Input maxlenght={15} type="password" text='Senha'/>
                </BoxCommon>
                <Line></Line>
                <BoxCommon ml='-185px' gap='23px' flexDirection='row'>
                    <Link href='/dashboard'>
                        <BoxCommon flexDirection='row' gap='20px'>
                            <Button color={red}>Cadastrar</Button>
                            <Button color={blue}>Login</Button>
                        </BoxCommon>
                    </Link>
                </BoxCommon>
            </BoxCommon>
        </BodyLogin>
    )
}

export default LoginWindow;