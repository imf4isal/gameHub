import { SimpleGrid } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import skeletons from '../utils/skeletons';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
    const { data, error, isLoading } = useGames(
        selectedGenre,
        selectedPlatform
    );

    return (
        <>
            {error && <p>Couldn't fetch game data.</p>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                padding={5}
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
