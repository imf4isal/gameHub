import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Platform } from '../hooks/useGames';
import usePlatform from '../hooks/usePlatforms';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatform();

    if (error) return null;

    return (
        <Box padding={3}>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    {selectedPlatform?.name || 'Platforms'}
                </MenuButton>
                <MenuList>
                    {data.map((platform) => (
                        <MenuItem
                            key={platform.id}
                            onClick={() => onSelectPlatform(platform)}
                        >
                            {platform.name}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default PlatformSelector;
