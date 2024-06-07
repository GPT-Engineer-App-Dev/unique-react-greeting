import { Container, Text, VStack, Heading, Box, Button, Grid, GridItem, Image, Flex, Avatar, Stack, HStack } from "@chakra-ui/react";
import { FaCheckCircle, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="white" boxShadow="sm" py={4} position="sticky" top={0} zIndex={10}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg" color="teal.500">SaaS Product</Heading>
          <HStack spacing={4}>
            <Button variant="link">Features</Button>
            <Button variant="link">Testimonials</Button>
            <Button variant="link">Pricing</Button>
            <Button colorScheme="teal">Get Started</Button>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bgGradient="linear(to-r, teal.500, green.500)" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to Our SaaS Product</Heading>
        <Text fontSize="xl" mb={6}>The best solution for your business needs</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="gray.50">
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Features</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} maxW="container.lg" mx="auto">
          <GridItem>
            <Box textAlign="center">
              <FaCheckCircle size="3em" color="teal.500" />
              <Heading as="h4" size="md" mt={4}>Feature One</Heading>
              <Text mt={2}>Description of feature one.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign="center">
              <FaCheckCircle size="3em" color="teal.500" />
              <Heading as="h4" size="md" mt={4}>Feature Two</Heading>
              <Text mt={2}>Description of feature two.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box textAlign="center">
              <FaCheckCircle size="3em" color="teal.500" />
              <Heading as="h4" size="md" mt={4}>Feature Three</Heading>
              <Text mt={2}>Description of feature three.</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box py={20}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Testimonials</Heading>
        <Flex overflowX="scroll" maxW="container.lg" mx="auto" px={4}>
          <Box minW="300px" p={4} bg="white" boxShadow="md" borderRadius="md" mr={4}>
            <Stack direction="row" align="center" mb={4}>
              <Avatar name="User One" src="https://via.placeholder.com/150" />
              <Box>
                <Text fontWeight="bold">User One</Text>
                <Text fontSize="sm" color="gray.500">CEO, Company One</Text>
              </Box>
            </Stack>
            <Text>"This SaaS product has transformed our business!"</Text>
          </Box>
          <Box minW="300px" p={4} bg="white" boxShadow="md" borderRadius="md" mr={4}>
            <Stack direction="row" align="center" mb={4}>
              <Avatar name="User Two" src="https://via.placeholder.com/150" />
              <Box>
                <Text fontWeight="bold">User Two</Text>
                <Text fontSize="sm" color="gray.500">CTO, Company Two</Text>
              </Box>
            </Stack>
            <Text>"Incredible features and amazing support."</Text>
          </Box>
          <Box minW="300px" p={4} bg="white" boxShadow="md" borderRadius="md">
            <Stack direction="row" align="center" mb={4}>
              <Avatar name="User Three" src="https://via.placeholder.com/150" />
              <Box>
                <Text fontWeight="bold">User Three</Text>
                <Text fontSize="sm" color="gray.500">COO, Company Three</Text>
              </Box>
            </Stack>
            <Text>"Highly recommend this product to everyone."</Text>
          </Box>
        </Flex>
      </Box>

      {/* Pricing Section */}
      <Box py={20} bg="gray.50">
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Pricing</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} maxW="container.lg" mx="auto">
          <GridItem>
            <Box p={6} bg="white" boxShadow="md" borderRadius="md" textAlign="center">
              <Heading as="h4" size="md" mb={4}>Basic Plan</Heading>
              <Text fontSize="2xl" fontWeight="bold" mb={4}>$10/month</Text>
              <Text>Feature A</Text>
              <Text>Feature B</Text>
              <Text>Feature C</Text>
              <Button colorScheme="teal" mt={4}>Choose Plan</Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={6} bg="white" boxShadow="md" borderRadius="md" textAlign="center">
              <Heading as="h4" size="md" mb={4}>Pro Plan</Heading>
              <Text fontSize="2xl" fontWeight="bold" mb={4}>$30/month</Text>
              <Text>Feature A</Text>
              <Text>Feature B</Text>
              <Text>Feature C</Text>
              <Button colorScheme="teal" mt={4}>Choose Plan</Button>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={6} bg="white" boxShadow="md" borderRadius="md" textAlign="center">
              <Heading as="h4" size="md" mb={4}>Enterprise Plan</Heading>
              <Text fontSize="2xl" fontWeight="bold" mb={4}>$50/month</Text>
              <Text>Feature A</Text>
              <Text>Feature B</Text>
              <Text>Feature C</Text>
              <Button colorScheme="teal" mt={4}>Choose Plan</Button>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto" px={4}>
          <Text>&copy; {new Date().getFullYear()} SaaS Product. All rights reserved.</Text>
          <HStack spacing={4}>
            <FaFacebook size="1.5em" />
            <FaTwitter size="1.5em" />
            <FaLinkedin size="1.5em" />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;