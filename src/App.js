import React from 'react';
import { SortingVisual } from './components/SortingVisual';
import { VStack, Heading, IconButton, useColorMode, Box} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { HelpModal } from './components/Modal'
import { AlgoModal } from './components/Modal';

export default function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	

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
				<HelpModal/>
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




