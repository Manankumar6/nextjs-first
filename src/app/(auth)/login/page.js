"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input } from "@/components/ui/input";
import { BackgroundBeams } from "@/components/ui/background-beams";


const LoginPage = () => {
  const router = useRouter();
  const { authenticate, login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (authenticate) {
      router.push("/");
    }
  }, [authenticate, router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 relative ">
      <div className="w-full z-10 max-w-md bg-white dark:bg-transparent border border-opacity-50 border-slate-400   p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
          Login
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Please enter your login details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              placeholder="Your Email"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              We&apos;ll never share your email.
            </p>
          </div>

          {/* Password */}
          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 dark:text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Your Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-300"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <ViewOffIcon className="h-5 w-5" />
                ) : (
                  <ViewIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center mt-6 space-x-4">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Or</p>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        {/* Sign-up Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            New user?{" "}
            <Link href="/signup">
              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                Sign up
              </button>
            </Link>
          </p>
        </div>
      </div>
      <BackgroundBeams/>
    </div>
  );
};

export default LoginPage;
