import React from 'react';
import { Menu, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export function SortDropDownMenu({children,disabled}) {
    return (
         <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                colorScheme='gray'
                size={'sm'}
                disabled={disabled}>
                Algorithms
            </MenuButton>
            <MenuList>
                {children}
            </MenuList>
        </Menu>
    )
}