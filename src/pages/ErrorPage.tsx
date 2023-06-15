import { Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <Heading>Ohho</Heading>
            <Text>
                {isRouteErrorResponse(error)
                    ? 'This page does not exist'
                    : 'Unexpected error occurred.'}
            </Text>
        </>
    );
};

export default ErrorPage;
