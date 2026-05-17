import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import PropertyCard from "../components/PropertyCard"

function Properties() {

  const [properties, setProperties] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {

    axios
      .get("http://localhost:5000/properties")
      .then((response) => {
        setProperties(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(search.toLowerCase()) ||
    property.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-5xl font-bold text-blue-700 mb-10 text-center">
          All Properties
        </h1>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">

          <input
            type="text"
            placeholder="Search property or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {filteredProperties.map((property) => (

            <PropertyCard
              key={property.id}
              id={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
            />

          ))}

        </div>

      </div>

    </div>
  )
}

export default Properties