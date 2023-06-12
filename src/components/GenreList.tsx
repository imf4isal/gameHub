import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import skeletons from '../utils/skeletons';
import GenreListSkeleton from './GenreListSkeleton';

const GenreList = () => {
    const { data, isLoading } = useGenres();

    if (isLoading)
        return (
            <>
                <Spinner />
                {skeletons.map((skeleton) => (
                    <GenreListSkeleton key={skeleton} />
                ))}
            </>
        );

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} marginY={4}>
                    <HStack>
                        <Image
                            src={getCroppedImageUrl(genre.image_background)}
                            boxSize="25px"
                            borderRadius="5px"
                        />
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
