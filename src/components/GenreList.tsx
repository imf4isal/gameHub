import {
    Button,
    HStack,
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
}

const GenreList = ({ onSelectGenre }: Props) => {
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
                        <Button
                            onClick={() => onSelectGenre(genre)}
                            variant="link"
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
