import { Box, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

function NavBar() {
    return (
        <>
            <HStack padding="15px">
                <Link to="/">
                    <Image src={logo} boxSize="60px" objectFit="cover" />
                </Link>
                <Box flex={1}>
                    <SearchInput />
                </Box>
                <ColorModeSwitch />
            </HStack>
        </>
    );
}

export default NavBar;
