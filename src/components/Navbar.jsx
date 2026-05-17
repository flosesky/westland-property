import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold">
        Westland Property
      </h1>

      <ul className="flex gap-8 text-lg items-center">

        <li>
          <Link to="/" className="hover:text-red-300 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/properties" className="hover:text-red-300 transition">
            Properties
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-red-300 transition">
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-red-300 transition">
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
          >
            Login
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar