import React from 'react'
import { Modal, ModalOverlay, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalBody } from '@chakra-ui/react'
import { Button, Text, Box } from '@chakra-ui/react'
import { GenerateButton } from './Button'
import { useDisclosure } from '@chakra-ui/react'
import { IoMdHelp } from 'react-icons/io'

export function HelpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button leftIcon={<IoMdHelp />} colorScheme='gray' size='sm' variant='solid' onClick={onOpen}>
        Help
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box mt={"1rem"} mb={'0.5rem'}>
              <Text fontWeight={'bold'} fontSize="20">Visual Algo Introduction</Text>
            </Box>
           
            <Box mb="1rem">
              Visual Algo is a project that enables learners to interact with algorithms through visual animations instead of just reading about them. 
            </Box>
            <Text fontWeight={"bold"} fontSize={20} mb = '0.5rem'>Site Guide</Text>
            <Text fontWeight='bold'>
              Generate New Array 
            </Text>
              <Box mb="1rem">
                Randomly generates new dataset.                                                                                                                                                                                  
              </Box>
             
            <Text fontWeight='bold'>
              Reset Array
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


export default HelpModal