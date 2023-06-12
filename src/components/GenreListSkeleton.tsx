import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreListSkeleton = () => {
    return (
        <HStack height={7} marginY={4}>
            <Skeleton height={6} width={6} />
            <SkeletonText
                noOfLines={1}
                skeletonHeight={3}
                spacing={1}
                width={100}
            />
        </HStack>
    );
};

export default GenreListSkeleton;
