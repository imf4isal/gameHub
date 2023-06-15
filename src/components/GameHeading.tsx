import { Heading } from '@chakra-ui/react';
import useGameQueryStore from '../store';

const GameHeading = () => {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);

    const heading = `${gameQuery.platform?.name || ''} ${
        gameQuery.genre?.name || ''
    } Games`;

    return (
        <Heading as="h1" marginBottom={7} marginTop={3}>
            {heading}
        </Heading>
    );
};

export default GameHeading;
