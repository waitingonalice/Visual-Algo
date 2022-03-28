import React, { useEffect,useState } from 'react'
import './test.css'
import ErrorMessage from '../components/ErrorMessage'
import { CircularProgress, Center } from '@chakra-ui/react'
import { GenerateButton, QuizButton } from '../components/Button'
import {useNavigate, Link} from 'react-router-dom'

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
            
        }
        setError(false)
    }

    function handleNextClick() {
        if (currentQuestion > 8) {
           navigate('/results')
        } else if (selected) {
            setCurrentQuestion(currentQuestion + 1)
            setSelected();
        } else {
            setError(true)
        }
    }

    function handleQuit() {
        setQuestion();
        
    }

    console.log(question)
    

    return (
        <>
            <Link to='/quiz'>
                <div className='quiz-title'>Visual Algo Quiz</div>
            </Link>
            <div className='test-page'>
                <Center>
                    <div className='username'>
                        Welcome, {name}
                    </div>
                </Center>

                <Center>
                    <div className='questions-container'>
                        {question ?
                            <>
                                <div className='quiz-category'>
                                    {question[currentQuestion]?.category}
                                    <div>
                                        Question: {currentQuestion + 1}
                                    </div>
                                </div>
                                    {question[currentQuestion]?.question}
                                <div className='options'>
                                    {options &&
                                        options.map((idx) => (
                                            <QuizButton key ={idx} handleClick = {()=>handleCheckAns(idx)}>
                                                {idx}
                                            </QuizButton>
                                    ))}
                                    {error && <ErrorMessage> Please choose an option </ErrorMessage>}
                                </div>
                                <div className='next-button'>
                                    <GenerateButton handleClick={handleNextClick}>Next</GenerateButton>
                                </div>
                                
                            </>                         
                            :
                        <div className='circular'><CircularProgress isIndeterminate color='blue.300' size='120px' /></div> 
                        }
                    </div>
                </Center>
                </div>
        </>
    )
}

export default Test