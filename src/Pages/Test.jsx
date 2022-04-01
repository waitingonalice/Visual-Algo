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
        setOptions(question && handleShuffle(
                [question[currentQuestion].correct_answer,
            ...question[currentQuestion].incorrect_answers,])
            );
    }, [currentQuestion,question])
    
    function handleShuffle(options) {
        return options.sort(() => Math.random()-0.5);
    }

    function handleAns(idx) {
        if (selected === idx && selected === question[currentQuestion].correct_answer) {
            return 'correct'
            
        } else if (selected === idx && selected !== question[currentQuestion].correct_answer) {
            return 'incorrect'
        } 
        else {
            return 'quiz-button'
        }
    }

    function handleSelectIdx(idx) {
        setSelected(idx)
        setError(false)
    }

    function handleNextClick() {
        if (!selected) {
            setError(true)
        
        } else if (currentQuestion > 8) {
            navigate('/results')
            
        } else if (selected === question[currentQuestion].correct_answer) {
            setError(false)
            setScore(score + 1);
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
            
        } else if (selected !== question[currentQuestion].correct_answer) {
            setError(false)
            setScore(score + 0);
            setCurrentQuestion(currentQuestion + 1);
            setSelected();
        }
       
    }
    
    function handleQuit() {
        setQuestion();
        setCurrentQuestion(0);
        setScore(score = 0);
    }
    console.log(selected)
    console.log(score)
    return (
        <>
            <Link to='/quiz'>
                <div className='quiz-title' onClick={handleQuit}>Visual Algo Quiz</div>
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
                                    {question[currentQuestion].category}
                                    <div>
                                        Question: {currentQuestion + 1}
                                    </div>
                                </div>
                                    {question[currentQuestion].question}
                                <div className='options'>
                                    {options &&
                                        options.map((idx) => (
                                            <QuizButton
                                                myClass={handleAns(idx)} 
                                                key={idx}
                                                handleClick={() => handleSelectIdx(idx)}
                                                disabled = {selected}
                                            >
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