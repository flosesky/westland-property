import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/Navbar"
import PropertyCard from "../components/PropertyCard"

function Home() {

  const [properties, setProperties] = useState([])

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

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* HERO */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-gray-100 px-5">

        <h1 className="text-6xl font-bold text-blue-700 mb-6">
          Find Your Dream Property
        </h1>

        <p className="text-gray-600 text-xl max-w-2xl">
          Trusted property platform for modern living and premium investment opportunities
        </p>

        <button className="mt-8 bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-xl text-lg">
          Explore Properties
        </button>

      </section>

      {/* FEATURED */}
      <section className="py-20 px-10 bg-white">

        <h2 className="text-5xl font-bold text-center text-blue-700 mb-14">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {properties
            .filter((property) => property.featured === 1)
            .map((property) => (

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

      </section>

      {/* ABOUT */}
      <section className="bg-gray-100 py-20 px-10 text-center">

        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          About Westland Property
        </h2>

        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-8">
          Westland Property is a trusted property platform that provides premium houses,
          villas, apartments, and commercial properties for modern living and investment.
        </p>

      </section>

      {/* CONTACT */}
      <section className="py-20 px-10 bg-white text-center">

        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Contact Us
        </h2>

        <p className="text-gray-700 text-lg mb-2">
          Email: info@westlandproperty.com
        </p>

        <p className="text-gray-700 text-lg mb-2">
          Phone: +62 812 3456 7890
        </p>

        <p className="text-gray-700 text-lg">
          Jakarta, Indonesia
        </p>

      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white text-center py-5">

        <p>
          © 2026 Westland Property. All Rights Reserved.
        </p>

      </footer>

    </div>
  )
}

export default Home