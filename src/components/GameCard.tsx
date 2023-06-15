import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Game from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card
            _hover={{
                transform: 'scale(1.03)',
                transition: 'transform .15s ease-in-out',
            }}
            borderRadius={10}
            overflow="hidden"
        >
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconList
                        platform={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize="xl">
                    <Link to={'/games/' + game.slug}>{game.name}</Link>
                    <Emoji rating={game.rating_top} />{' '}
                </Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;
