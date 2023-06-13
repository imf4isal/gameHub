import { SimpleGrid } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import skeletons from '../utils/skeletons';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
    const { data, error, isLoading } = useGames(gameQuery);

    return (
        <>
            {error && <p>Couldn't fetch game data.</p>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding={5}
                spacing={6}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}

                {data.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
