import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import './index.css';

function App() {
    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '180px 1fr',
                }}
            >
                <GridItem area="nav">
                    <NavBar />
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" marginX={5}>
                        <GenreList />
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <Box marginLeft={5}>
                        <GameHeading />
                        <HStack spacing={2}>
                            <PlatformSelector />
                            <SortSelector />
                        </HStack>
                    </Box>
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
