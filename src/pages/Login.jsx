import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    // Dummy Login
    if (username === "admin" && password === "admin123") {
      navigate("/dashboard")
    } else {
      alert("Username or Password Incorrect")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center py-20 px-5">

        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
            Admin Login
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Login