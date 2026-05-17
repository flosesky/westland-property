import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import Navbar from "../components/Navbar"

function Detail() {

  const { id } = useParams()

  const [property, setProperty] = useState(null)

  useEffect(() => {

    axios
      .get("http://localhost:5000/properties")
      .then((response) => {

        const foundProperty = response.data.find(
          (item) => item.id === parseInt(id)
        )

        setProperty(foundProperty)

      })
      .catch((error) => {

        console.log(error)

      })

  }, [id])

  if (!property) {

    return (
      <div className="min-h-screen bg-gray-100">

        <Navbar />

        <div className="flex justify-center items-center h-[80vh]">

          <h1 className="text-4xl font-bold text-red-500">
            Property Not Found
          </h1>

        </div>

      </div>
    )

  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto py-16 px-5">

        <img
          src={property.image}
          alt={property.title}
          className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
        />

        <div className="bg-white mt-10 p-10 rounded-2xl shadow-lg">

          <h1 className="text-5xl font-bold text-blue-700 mb-5">
            {property.title}
          </h1>

          <p className="text-2xl text-gray-600 mb-4">
            {property.location}
          </p>

          <p className="text-3xl text-red-500 font-bold mb-8">
            {property.price}
          </p>

          <p className="text-lg text-gray-700 leading-8">
            {property.description || "No description available."}
          </p>

        </div>

      </div>

    </div>
  )
}

export default Detail