import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import skeletons from '../utils/skeletons';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid() {
    const { data, error, isLoading } = useGames();

    return (
        <>
            {error && <p>Couldn't fetch game data.</p>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding={10}
                spacing={5}
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
