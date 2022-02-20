import React from 'react';
import { SortingVisual } from './components/SortingVisual';
import { VStack, Heading, Button, IconButton, useColorMode, Box, HStack, Center } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { IoMdHelp } from 'react-icons/io'

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  function HelpModal() {
    return (
      <>
        <Button leftIcon={<IoMdHelp />}
          colorScheme='gray'
          size='sm'
          variant='solid' >
          Help
        </Button>

      </> 
    )
  }

  function ColorMode() {
    return (
       <IconButton
          icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          isRound='true'
          size='md'
          onClick={toggleColorMode}
          float={"right"}
        />
    );
  }

  return (
    <>
      <Box className='topLayer' p={4}>
        <HelpModal></HelpModal>
        <ColorMode />
      </Box>
      
      
      <VStack p={4}>
        <Heading>
          Visual Algo
        </Heading>

        <SortingVisual />
      </VStack>
    </>
       
  );
}




