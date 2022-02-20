import React from 'react';
import { SortingVisual } from './components/SortingVisual';
import { Button, IconButton } from '@chakra-ui/react';
import { VStack, Heading } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa'


export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='md'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading>
        Visual Algo
      </Heading>
      <SortingVisual />
    </VStack>
  );
}




