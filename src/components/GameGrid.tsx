import { Box, SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import skeletons from '../utils/skeletons';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
    gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
    const { data, error, isLoading, fetchNextPage, hasNextPage } =
        useGames(gameQuery);

    const fetchedGameCount =
        data?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;
    return (
        <Box padding={5}>
            {error && <p>{error.message}</p>}
            <InfiniteScroll
                dataLength={fetchedGameCount}
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<Spinner m={5} />}
            >
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                    spacing={6}
                >
                    {isLoading &&
                        skeletons.map((skeleton) => (
                            <GameCardSkeleton key={skeleton} />
                        ))}

                    {data?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.results.map((game) => (
                                <GameCard key={game.id} game={game} />
                            ))}
                        </React.Fragment>
                    ))}
                </SimpleGrid>
            </InfiniteScroll>
        </Box>
    );
}

export default GameGrid;
