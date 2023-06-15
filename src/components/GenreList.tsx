import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';
import skeletons from '../utils/skeletons';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const { data, isLoading } = useGenres();
    const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);
    const setGenre = useGameQueryStore((s) => s.setGenre);
    if (isLoading)
        return (
            <>
                <Heading fontSize="2xl" marginY={5}>
                    Genres
                </Heading>
                <Spinner />
                {skeletons.map((skeleton) => (
                    <GenreListSkeleton key={skeleton} />
                ))}
            </>
        );

    return (
        <>
            <Heading fontSize="2xl" marginY={5}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} marginY={4}>
                        <HStack>
                            <Image
                                src={getCroppedImageUrl(genre.image_background)}
                                objectFit="cover"
                                boxSize="25px"
                                borderRadius="5px"
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    selectedGenre?.id === genre.id
                                        ? 'bold'
                                        : 'normal'
                                }
                                onClick={() => setGenre(genre)}
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
