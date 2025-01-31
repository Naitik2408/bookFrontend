import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, AlertCircle, BookOpen, PenTool } from "lucide-react";
import { useDispatch } from "react-redux";
import {login} from "../Redux/authSlice";
import { use } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Set loading to true when the request starts

  //   try {
  //     // Send a POST request to the backend login endpoint
  //     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/loginUser`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: "include",
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();
      
  //     if (response.ok) {
  //       // Save the token to localStorage or context
  //       console.log("login data:  ", data)
  //       localStorage.setItem('token', data.token);
        

  //       // Dispatch the loginSuccess action with user data
  //       dispatch(login({ user: data.user }));

  //       // Redirect to the dashboard or another page
  //       navigate('/dashboard');
  //     } else {
  //       // Handle login errors
  //       setError('Invalid credentials');
  //     }
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //     setError('An error occurred. Please try again.');
  //   } finally {
  //     setLoading(false); // Set loading to false when the request completes
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts
  
    try {
      // Send a POST request to the backend login endpoint
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/loginUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        // Save the token to localStorage or context
        console.log("login data:  ", data)
        localStorage.setItem('token', data.token);
        
        // Dispatch the loginSuccess action with user data
        dispatch(login({ user: data.user }));
  
        // Redirect to the dashboard or another page
        navigate('/dashboard');
      } else {
        // Handle login errors
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Set loading to false when the request completes
    }
  };


  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Left Section - Login Form */}
      <div className="p-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-orange-600">
              <BookOpen size={32} />
              <span className="text-2xl font-bold">Author Portal</span>
            </div>
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
              Welcome Back, Wordsmith
            </h1>
            <p className="text-gray-600">
              Access your writing dashboard and manuscript management
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-100 text-red-700 rounded-lg">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Email
                </label>
                <input
                  type="email"
                  placeholder="author@yourpublication.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent pr-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-orange-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-orange-600 hover:text-orange-700"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3.5 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  <PenTool size={20} />
                  Access Author Dashboard
                </>
              )}
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm ">
              <span className="px-2 bg-transparent text-gray-500 pt-5">
                Secure login powered by
              </span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="p-3 rounded-lg border border-gray-300 hover:bg-orange-50 transition-colors">
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google Scholar"
                className="w-6 h-6"
              />
            </button>
            <button className="p-3 rounded-lg border border-gray-300 hover:bg-orange-50 transition-colors">
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            New author?{" "}
            <a
              href="/signup"
              className="font-medium text-orange-600 hover:text-orange-700 transition-colors"
            >
              Register your credentials
            </a>
          </p>
        </div>
      </div>

      {/* Right Section - Publication Showcase */}
      <div className="hidden md:flex bg-gradient-to-br from-orange-500 to-amber-600 p-12 items-center justify-center min-h-screen relative overflow-hidden">
        <div className="max-w-2xl text-white text-center space-y-12 z-10">
          {/* Floating Book Elements */}
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/10 rounded-full mix-blend-screen blur-xl"></div>
          <div className="absolute bottom-20 -right-20 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>

          {/* Main Illustration Container */}
          <div className="relative h-[400px] w-full">
            {/* Desk Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-3/5 bg-white/5 rounded-t-2xl shadow-xl">
              {/* Laptop Illustration */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-3/5 bg-white/10 p-4 rounded-lg shadow-lg">
                <div className="h-32 bg-white/20 rounded-md flex items-center justify-center">
                  <span className="text-sm italic opacity-75">
                    Manuscript in progress...
                  </span>
                </div>
              </div>

              {/* Books Stack */}
              <div className="absolute left-8 bottom-8 flex space-x-2">
                <div className="w-8 h-12 bg-amber-200/30 rounded-sm"></div>
                <div className="w-8 h-14 bg-orange-200/30 rounded-sm"></div>
                <div className="w-8 h-10 bg-amber-200/30 rounded-sm"></div>
              </div>

              {/* Coffee Cup */}
              <div className="absolute right-8 bottom-8">
                <div className="w-6 h-8 bg-white/20 rounded-t-full"></div>
                <div className="w-8 h-2 bg-white/20 rounded-b-full mt-[-2px]"></div>
              </div>
            </div>

            {/* Floating Creative Elements */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 animate-float">
              <svg
                className="w-20 h-20 text-white/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>

          {/* Animated Progress Card */}
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs mx-auto transform transition hover:scale-105 duration-300">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Daily Writing Streak</h3>
                <p className="text-sm opacity-90">47 days consecutive</p>
                <div className="mt-2 w-full bg-white/20 rounded-full h-2">
                  <div className="bg-orange-200 rounded-full h-2 w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid with Hover Effects */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-white/10 rounded-lg transform transition hover:scale-105 duration-300">
              <div className="text-2xl font-bold">4.8M+</div>
              <div className="text-sm">Words Published</div>
              <div className="mt-2 w-full bg-white/20 rounded-full h-1">
                <div className="bg-orange-200 rounded-full h-1 w-full"></div>
              </div>
            </div>
            <div className="p-4 bg-white/10 rounded-lg transform transition hover:scale-105 duration-300">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Reader Engagement</div>
              <div className="mt-2 w-full bg-white/20 rounded-full h-1">
                <div className="bg-orange-200 rounded-full h-1 w-3/4"></div>
              </div>
            </div>
            <div className="p-4 bg-white/10 rounded-lg transform transition hover:scale-105 duration-300">
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm">Editor Response</div>
              <div className="mt-2 w-full bg-white/20 rounded-full h-1">
                <div className="bg-orange-200 rounded-full h-1 w-1/2"></div>
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-12 italic opacity-90">
          &quot; There is no greater agony than bearing an untold story inside you.&quot;
            <div className="mt-2 text-sm">- Maya Angelou</div>
          </div>
        </div>

        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEyIDZjMi45NzMgMCA1Ljg5My 1uNzA3IDguNDE2LTEuOTYyTDEyIDEybC04LjQxNi03Ljk2MkM2LjEwNyA1LjI5MyA5LjAyNyA2IDEyIDZ6bTAgMTJjLTIuOTczIDAtNS44OTMuNzA3LTguNDE2IDEuOTYyTDEyIDEybDguNDE2IDcuOTYyQzE3Ljg5MyAxOC43MDcgMTUuOTczIDE4IDEyIDE4em0wLTEyQzYuNDc3IDAgMS45MSAzLjA3Ni4yMjkgNy4wODhsMTEuNzcxIDExLjEyNCAxMS43Ny0xMS4xMkMyMi4wOSAzLjA3NyAxNy41MjMgMCAxMiAwem0wIDEyLjg3OUwuMjMgNy4wODhDMS45MSAzLjA3NiA2LjQ3NyAwIDEyIDBzMTAuMDkgMy4wNzYgMTEuNzcgNy4wODhMMTIgMjQuODc5eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=')] repeat"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
