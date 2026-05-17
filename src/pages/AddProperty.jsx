import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Navbar from "../components/Navbar"

function AddProperty() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newProperty = {
      title,
      location,
      price,
      image,
      description: "New property added by admin."
    }

    try {

      await axios.post(
        "http://localhost:5000/properties",
        newProperty
      )

      alert("Property Added Successfully")

      navigate("/properties")

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-3xl mx-auto py-16 px-5">

        <div className="bg-white shadow-2xl rounded-2xl p-10">

          <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">
            Add New Property
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Property Title
              </label>

              <input
                type="text"
                placeholder="Enter property title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border rounded-xl"
              />

            </div>

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Location
              </label>

              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-4 border rounded-xl"
              />

            </div>

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Price
              </label>

              <input
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-4 border rounded-xl"
              />

            </div>

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Image URL
              </label>

              <input
                type="text"
                placeholder="Paste image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-4 border rounded-xl"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl"
            >
              Add Property
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default AddProperty