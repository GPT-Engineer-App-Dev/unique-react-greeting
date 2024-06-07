import { Box, Container, Heading } from "@chakra-ui/react";
import { SupabaseAuthUI } from "../integrations/supabase/auth.jsx";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { session } = useSupabaseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Container centerContent>
      <Box p={6} my={12} w="full" maxW="md" borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Login
        </Heading>
        <SupabaseAuthUI />
      </Box>
    </Container>
  );
};

export default Login;