import { Box, Container, Heading, Text, VStack, Spinner, Grid, GridItem } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Events = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();
  const { data: events, isLoading, error } = useEvents();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [session, navigate]);

  if (isLoading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Text>Error loading events: {error.message}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" p={0}>
      <Box as="nav" bg="white" boxShadow="sm" py={4} position="sticky" top={0} zIndex={10}>
        <Heading as="h1" size="lg" color="teal.500">Events</Heading>
      </Box>
      <Box py={20} bg="gray.50">
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Upcoming Events</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} maxW="container.lg" mx="auto">
          {events.map(event => (
            <GridItem key={event.id}>
              <Box p={6} bg="white" boxShadow="md" borderRadius="md" textAlign="center">
                <Heading as="h4" size="md" mb={4}>{event.name}</Heading>
                <Text fontSize="lg" mb={4}>{new Date(event.date).toLocaleDateString()}</Text>
                <Text>{event.venue_id}</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Events;