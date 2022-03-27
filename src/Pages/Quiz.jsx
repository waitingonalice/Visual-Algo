import React from 'react'
import {useNavigate} from 'react-router-dom'
import { GenerateButton } from '../components/Button';
import { FaHome } from 'react-icons/fa';
import { Input, VStack,Select, Center, Heading } from '@chakra-ui/react';
import './quiz.css'

function Quiz() {
    let navigate = useNavigate();

   
    return (
        
        <div className='parent'>
            <div className='title'>
                <Heading>Visual Algo Quiz</Heading>
            </div>
            <Center>
                <div className='select-settings-card'>
                    <VStack> 
                        <Input className='input' placeholder='Enter Your Name'></Input>
                        <Select placeholder='Select Topic'>
                            <option value={'option1'}>Sorting Algorithms</option>
                        </Select>
                    </VStack>
                </div>
            </Center>
             <div className='buttons'>
                <GenerateButton leftIcon={<FaHome />} handleClick={() => navigate('/')}>
                    Back to home page
                </GenerateButton>
                <GenerateButton handleClick={() => navigate('/')}>
                    Proceed
                </GenerateButton>
            </div>
        </div>
    )
}

export default Quiz