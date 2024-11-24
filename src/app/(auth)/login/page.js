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
  Spinner,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useRouter } from "next/navigation"; // Ensure this import is here
import { useAuth } from "@/app/context/AuthContext";

const LoginPage = () => {
  const router = useRouter(); // This should work now
  const { authenticate,login,loading } = useAuth();
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
  }, [authenticate,router])
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.50"
      px={4}
      className="dark:bg-background "
    >
      <Box
        maxW="md"
        w="full"
        bg="white"
        boxShadow="lg"
        p={6}
        rounded="lg"
        textAlign="center"
         className="dark:bg-gray-900 text-foreground"
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
              <FormHelperText>We&apos;ll never share your email.</FormHelperText>
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
                    {showPassword ? <ViewOffIcon className="dark:text-foreground" /> : <ViewIcon className="dark:text-foreground" />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {/* Login Button */}
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              fontSize="md"
              mt={4}
              w="full"
            >
              {loading?<Spinner/>:"Login"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
