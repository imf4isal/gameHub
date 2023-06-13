import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms';

const PlatformSelector = () => {
    const { data, error } = usePlatform();

    if (error) return null;

    return (
        <Box paddingX={5}>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Platforms
                </MenuButton>
                <MenuList>
                    {data.map((platform) => (
                        <MenuItem key={platform.id}>{platform.name}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default PlatformSelector;
