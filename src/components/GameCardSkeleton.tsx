import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
    return (
        <Card
            width={{ sm: '300px', md: '350px', lg: '250px', xl: '220px' }}
            borderRadius={10}
            overflow="hidden"
        >
            <Skeleton
                height="200px"
                startColor="gray.200"
                endColor="gray.400"
            />
            <CardBody>
                <SkeletonText startColor="gray.200" endColor="gray.400" />
                <Skeleton startColor="gray.200" endColor="gray.400" />
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;
