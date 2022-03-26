import React from "react";
import { Button } from '@chakra-ui/react';

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