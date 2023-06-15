import { Box, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
    return (
        <>
            <HStack padding="15px">
                <Image src={logo} boxSize="60px" />
                <Box flex={1}>
                    <SearchInput />
                </Box>
                <ColorModeSwitch />
            </HStack>
        </>
    );
}

export default NavBar;
