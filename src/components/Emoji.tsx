import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

interface Props {
    rating: number;
}

const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '20px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '20px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '30px' },
};

const Emoji = ({ rating }: Props) => {
    return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
