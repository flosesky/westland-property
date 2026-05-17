import { Link } from "react-router-dom"

function PropertyCard({
  id,
  image,
  title,
  location,
  price
}) {

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-3">
          {title}
        </h2>

        <p className="text-gray-600 mb-4">
          {location}
        </p>

        <p className="text-red-500 text-3xl font-bold mb-5">
          {price}
        </p>

        <Link
          to={`/property/${id}`}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition"
        >
          View Detail
        </Link>

      </div>

    </div>
  )
}

export default PropertyCard