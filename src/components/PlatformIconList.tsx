import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import Platform from '../entities/Platform';

interface Props {
    platform: Platform[];
}

function PlatformIconList({ platform }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };

    return (
        <HStack marginY={1}>
            {platform.map((platform) => (
                <Icon
                    as={iconMap[platform.slug]}
                    color="gray.500"
                    key={platform.id}
                />
            ))}
        </HStack>
    );
}

export default PlatformIconList;
