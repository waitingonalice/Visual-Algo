import React, { useEffect,useState } from 'react'
import './test.css'
import ErrorMessage from '../components/ErrorMessage'
import { CircularProgress, Center } from '@chakra-ui/react'
import { GenerateButton } from '../components/Button'
import {useNavigate} from 'react-router-dom'

const Test = ({ question, setQuestion, name, score = 0, setScore }) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [options, setOptions] = useState();
    const [error, setError] = useState(false)
    const [selected, setSelected] = useState()
    let navigate = useNavigate();

    //for every question, fetch its options
    useEffect(() => {
        setOptions(question &&
            [question[currentQuestion]?.correct_answer,
            ...question[currentQuestion]?.incorrect_answers,]);
    }, [currentQuestion, question])
    
    function handleSelect() {
        
    }

    function handleCheckAns(idx) {
        setSelected(idx);
        if (idx === question[currentQuestion].correct_answer) {
            setScore(score + 1);
            setError(false)
        }
    }

    function handleNextClick() {
        if (currentQuestion > 8) {
           navigate('/results')
        } else if (selected) {
            setCurrentQuestion(currentQuestion + 1)
            setSelected();
        } else {
            setError("Please choose an option")
        }
    }

    function handleQuit() {
        
    }

    console.log(question)
    

    return (
        <div className='test-page'>
            <Center>
                <div className='username'>
                    Welcome, {name}
                </div> 
            </Center>
            
            <div className='questions-component'>
                {question ?
                    <>
                        <div className='quiz-category'>
                            {question[currentQuestion]?.category}
                        </div>
                        
                        <div className='questions-card'>
                            <div>
                                Question: {currentQuestion+1}
                            </div>

                            {question[currentQuestion]?.question}

                            <div className='options'>
                                {options &&
                                    options.map((idx) => (
                                        <GenerateButton handleClick = {handleCheckAns}>
                                            {idx}
                                        </GenerateButton>
                                ))}
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                            </div>
                            <GenerateButton handleClick={handleNextClick}>Next</GenerateButton>
                        </div>
                        
                    </>
                    :
                    <CircularProgress isIndeterminate color='blue.300' size='120px' />
                }
            </div>
        </div>
    )
}

export default Test