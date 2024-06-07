import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Events from "./pages/Events.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Box, Flex, Heading, HStack, Link } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Box as="nav" bg="white" boxShadow="sm" py={4} position="sticky" top={0} zIndex={10}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg" color="teal.500">SaaS Product</Heading>
          <HStack spacing={4}>
            <Button variant="link">Features</Button>
            <Button variant="link">Testimonials</Button>
            <Button variant="link">Pricing</Button>
            {session ? (
              <Button colorScheme="teal" onClick={logout}>Logout</Button>
            ) : (
              <Button colorScheme="teal" as={Link} to="/login">Login</Button>
            )}
          </HStack>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;