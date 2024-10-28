// app/(auth)/signup/page.js (Next.js 13+ with app directory)
"use client";
import axios from "axios";
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
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const SignupPage = () => {
  const router = useRouter(); // This should work now
  const {authenticate} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    try {
        const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`,{name,email,password, action: 'signup',})
        if(data){
            console.log(data)
            toast({
              title: "Success",
              description: "Account created successfully!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
        }
        
    } catch (error) {
        console.log(error,"Sing up error")
        toast({
          title: "User not add",
          description: "Internal server error ",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
    }

    // Validation: Check if passwords match
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

  };
  useEffect(()=>{
    if(authenticate){
      router.push('/')
    }
      },[authenticate,router])

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
          Sign Up
        </Heading>
        <Text mb={8}>Create a new account</Text>

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {/* Name */}
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            {/* Email */}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            {/* Password */}
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Confirm Password */}
            <FormControl id="confirmPassword" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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

            {/* Sign Up Button */}
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              fontSize="md"
              mt={4}
              w="full"
            >
              Sign Up
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default SignupPage;
