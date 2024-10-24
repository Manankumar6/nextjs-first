"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Stack,

  FormHelperText,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useRouter } from "next/navigation"; // Ensure this import is here
import { useAuth } from "@/app/context/AuthContext";

const LoginPage = () => {
  const router = useRouter(); // This should work now
  const { authenticate,login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 


  const handleSubmit = async (e) => {
    e.preventDefault();
   login(email,password)
  };

  useEffect(() => {
    if (authenticate) {
      router.push('/')
    }
  }, [authenticate])
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.50"
      px={4}
    >
      <Box
        maxW="md"
        w="full"
        bg="white"
        boxShadow="lg"
        p={6}
        rounded="lg"
        textAlign="center"
      >
        <Heading as="h1" size="xl" mb={4}>
          Login
        </Heading>
        <Text mb={8}>Please enter your login details below</Text>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {/* Email */}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            {/* Password */}
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Login Button */}
            <Button
              type="submit"
              colorScheme="purple"
              size="lg"
              fontSize="md"
              mt={4}
              w="full"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
