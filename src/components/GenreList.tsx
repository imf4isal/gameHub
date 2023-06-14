import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import skeletons from '../utils/skeletons';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading } = useGenres();

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
                                onClick={() => onSelectGenre(genre)}
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
