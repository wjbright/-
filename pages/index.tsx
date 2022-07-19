import type { NextPage } from 'next'
import Head from 'next/head'
import { Center, Heading, VStack, Text, HStack, Box } from '@chakra-ui/react'
import devIcon from "../public/dev-icon.png";
import Image from 'next/image';
import { useState } from 'react';

const roles: Array<string> = ['Software Engineer', 'Product Manager', 'Data Analyst']
const Bullet = () => <Box h='2' w='2' bg='brand.lightBlue' borderRadius={'50'}></Box>
const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

const renderRoles = (roles: Array<string>, color: string, setHoverColor: any) => {
  return roles.map((role, index) => {
    return (
      <HStack key={role} h='3'>
        <Text 
          size={['xs', 'sm']} 
          textAlign="center"
          color={'brand.lightBlue'}
          onMouseOut={() => setHoverColor(getRandomColor())}
          _hover={{color, cursor: 'pointer'}}
        >
          {role}
        </Text>
        {roles.length -1 !== index ? <Bullet /> : null}
      </HStack>
    )
  }
  )
}
const Home: NextPage = () => {
  const [hoverColor, setHoverColor] = useState(getRandomColor());


  return (
    <Center bg={'brand.deepBlue'} width="100%" height="100vh" p='3'>
        <Head>
          <title>Bright Williams</title>
          <meta name="Bright Williams Personal website" content="The story of Bright Williams is one of greatness" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <VStack>
            <Image src={devIcon} alt='dev icon' style={{filter: 'brightness(0) invert(1)'}}/>
            <Heading as='h2' size={'2xl'} color={'brand.lightBlue'}>queen</Heading>
            <HStack pt='6'>{renderRoles(roles, hoverColor, setHoverColor)}</HStack>
          </VStack>
        </main>

    
    </Center>
  )
}

export default Home
