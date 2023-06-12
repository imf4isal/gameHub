import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';

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
                        <GenreList />{' '}
                    </GridItem>
                </Show>
                <GridItem area="main">
                    <GameGrid />
                </GridItem>
            </Grid>
        </>
    );
}

export default App;
