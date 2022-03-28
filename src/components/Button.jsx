import React from "react";
import { Button } from '@chakra-ui/react';
import './Button.css'
export function GenerateButton(props) {
    const myClass = `button ${props.type}`
    return (
        <Button
            className={myClass}
            onClick={props.handleClick}
            colorScheme='gray' size='sm'
            leftIcon={props.leftIcon}
            disabled = {props.disabled}
        >
            {props.children}
        </Button>
        ); 
}

export function QuizButton({children,handleClick}) {
    return (
        <button onClick={handleClick} className="quiz-button" type ='button'>
            {children}
        </button>
    )
}