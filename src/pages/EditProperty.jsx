import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import Navbar from "../components/Navbar"

function EditProperty() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  // GET PROPERTY DETAIL
  useEffect(() => {

    axios
      .get("http://localhost:5000/properties")
      .then((response) => {

        const property = response.data.find(
          (item) => item.id === parseInt(id)
        )

        if (property) {

          setTitle(property.title)
          setLocation(property.location)
          setPrice(property.price)
          setImage(property.image)

        }

      })
      .catch((error) => {
        console.log(error)
      })

  }, [id])

  // UPDATE PROPERTY
  const handleSubmit = async (e) => {

    e.preventDefault()

    const updatedProperty = {
      title,
      location,
      price,
      image
    }

    try {

      await axios.put(
        `http://localhost:5000/properties/${id}`,
        updatedProperty
      )

      alert("Property Updated Successfully")

      navigate("/dashboard")

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
            Edit Property
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>

              <label className="block mb-2 text-lg font-semibold">
                Property Title
              </label>

              <input
                type="text"
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
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-4 border rounded-xl"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Update Property
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default EditProperty