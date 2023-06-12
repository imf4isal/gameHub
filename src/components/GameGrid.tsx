import useGames from '../hooks/useGames';

function GameGrid() {
    const { games, error } = useGames();

    return (
        <>
            {error && <p>Couldn't fetch game data.</p>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
}

export default GameGrid;
