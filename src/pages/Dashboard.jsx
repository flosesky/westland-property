import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import axios from "axios"

function Dashboard() {

  const [properties, setProperties] = useState([])

  // GET PROPERTIES
  const fetchProperties = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/properties"
      )

      setProperties(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchProperties()

  }, [])

  // DELETE PROPERTY
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    )

    if (!confirmDelete) return

    try {

      await axios.delete(
        `http://localhost:5000/properties/${id}`
      )

      fetchProperties()

      alert("Property Deleted Successfully")

    } catch (error) {

      console.log(error)

    }

  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-blue-700 mb-10">
          Admin Dashboard
        </h1>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-3">
              Total Properties
            </h2>

            <p className="text-5xl text-blue-700 font-bold">
              {properties.length}
            </p>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-3">
              Active Listings
            </h2>

            <p className="text-5xl text-green-600 font-bold">
              {properties.length}
            </p>

          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-3">
              Sold Properties
            </h2>

            <p className="text-5xl text-red-500 font-bold">
              0
            </p>

          </div>

        </div>

        {/* Add Property */}
        <div className="mb-10">

          <Link
            to="/add-property"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg transition"
          >
            Add New Property
          </Link>

        </div>

        {/* Property Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-blue-700 text-white">

              <tr>

                <th className="p-5 text-left">
                  Property
                </th>

                <th className="p-5 text-left">
                  Location
                </th>

                <th className="p-5 text-left">
                  Price
                </th>

                <th className="p-5 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {properties.map((property) => (

                <tr
                  key={property.id}
                  className="border-b"
                >

                  <td className="p-5 font-semibold">
                    {property.title}
                  </td>

                  <td className="p-5">
                    {property.location}
                  </td>

                  <td className="p-5 text-red-500 font-bold">
                    {property.price}
                  </td>

                  <td className="p-5 text-center">

                    <div className="flex justify-center gap-3">

                      <Link
                        to={`/edit-property/${property.id}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg transition"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(property.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Dashboard