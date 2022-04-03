import React from 'react'
import { useState } from 'react'
import { Modal, ModalOverlay, ModalCloseButton, ModalContent, ModalFooter, ModalBody, ModalHeader, HStack, Heading } from '@chakra-ui/react'
import {algoList} from '../Data/data.js'
import { Button, Text, Box } from '@chakra-ui/react'
import { GenerateButton } from './Button'
import { useDisclosure } from '@chakra-ui/react'
import { IoMdHelp } from 'react-icons/io'
import {FaRegLightbulb} from "react-icons/fa"

export function HelpModal() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [scrollBehavior, setScrollBehavior] = React.useState('inside')
	return (
		<>
			<Button leftIcon={<IoMdHelp />} colorScheme='gray' size='sm' variant='solid' onClick={onOpen}>
				Help
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior={scrollBehavior}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Box mt={"1rem"} mb={'0.5rem'}>
							<Text fontWeight={'bold'} fontSize="20">Visual Algo Introduction</Text>
						</Box>
					 
						<Box mb="1rem">
							Visual Algo is an interactive web application that enables learners to interact with algorithms through visual animations instead of just reading about them. 
						</Box>
						<Text fontWeight={"bold"} fontSize={20} mb = '0.5rem'>Site Guide</Text>
						<Text fontWeight='bold'>
							Generate New Array 
						</Text>
						<Box mb="1rem">
							Randomly generates new dataset.                                                                                                                                                                                  
						</Box>
						 
						<Text fontWeight='bold'>
							Reload Page
						</Text>
						<Box mb="1rem">
							Refreshes the page to stop the algorithm from running.
						</Box>
						 
						<Text fontWeight='bold'>
							Sorting Algorithms
						</Text>
						<Box mb="1rem">
							Shows a list of sorting algorithms, pressing any algorithm in the list will trigger the algorithm to start running.
						</Box>
						<Text fontWeight='bold'>
							Algorithm tips
						</Text>
						<Box mb="1rem">
							Provides a brief description of how every algorithm functions and its uses.
						</Box>
						
						<Text fontWeight='bold'>
							Test Your Knowledge
						</Text>
						<Box mb="1rem">
							Redirects to quiz page.
						</Box>
						

					</ModalBody>
					<ModalFooter justifyContent={'center'}>
						<GenerateButton myClass = 'closeBtn' handleClick={onClose}>
							Close
						</GenerateButton>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	 
	)
}

export function AlgoModal() {
	const [index, setIndex] = useState(0)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [scrollBehavior, setScrollBehavior] = React.useState('inside')
	
	let hasPrev = index > 0
	let hasNext = index < algoList.length-1
		
	function handleNextClick() {
		if (hasNext) {
			setIndex(index + 1) 
		}
	}
	function handlePrevClick() {
		if (hasPrev) {
			setIndex(index-1)
		}
	}
	
    
	let algoDesc = algoList[index]
	return (
		<>
			<GenerateButton myClass='algoHelp' handleClick={onOpen} leftIcon = {<FaRegLightbulb/>}> Algorithm Tips </GenerateButton>

			<Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior={scrollBehavior} size ={'lg'} key ={algoDesc.id}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton/>
					<ModalBody>
						<ModalHeader>
							{algoDesc.title}
						</ModalHeader>
						<Heading pb={3} fontSize= {16}>
							Description {index + 1} of {algoList.length}
						</Heading>
						<div>
							{algoDesc.description}
						</div>
					</ModalBody>
					<ModalFooter>
						<HStack spacing = '10px'>
							<GenerateButton myClass='closeBtn' handleClick={onClose} >Close</GenerateButton>
							<GenerateButton myClass = 'prevBtn' handleClick ={handlePrevClick} disabled={!hasPrev}>Previous</GenerateButton>
							<GenerateButton myClass='nextBtn' handleClick={handleNextClick} disabled = {!hasNext}>Next</GenerateButton>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
			
	);

}

