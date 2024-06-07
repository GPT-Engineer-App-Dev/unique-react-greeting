import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.50">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="teal.500">Hello World</Heading>
        <Text fontSize="lg" color="gray.700">Welcome to your first React application with Chakra UI.</Text>
      </VStack>
    </Container>
  );
};

export default Index;