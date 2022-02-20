import React from 'react';
import { Menu, MenuButton, MenuList, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export function SortDropDownMenu(props) {
    return (
         <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme = 'gray'>
                Sorting Algorithms
            </MenuButton>
            <MenuList>
                {props.children}
            </MenuList>
        </Menu>
    )
}