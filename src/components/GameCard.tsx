import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

function GameCard({ game }: Props) {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize="xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList
                        platform={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;
