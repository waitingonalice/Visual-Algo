import React, { useEffect,useState } from 'react'
import QuizQuestions from '../components/QuizQuestions'

function Test({ question, setQuestion, name, score, setScore }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [options, setOptions] = useState()

    //on every question, fetch its options
    useEffect(() => {
        console.log(options)
        setOptions(question &&
            [question[currentQuestion].correct_answer,
            ...question[currentQuestion].incorrect_answers])
    },[question])

    return (
        <div>
            <div className='username'>
                Welcome {name}
            </div>
            <div className='quiz'>
                <QuizQuestions
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    options={options}
                    setOptions={setOptions}
                />
            </div>

        </div>
    )
}

export default Test