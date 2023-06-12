import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
    const { genres, isLoading } = useGenres();

    return (
        <List>
            {genres.map((genre) => (
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
