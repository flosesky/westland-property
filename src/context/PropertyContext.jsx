import { createContext, useEffect, useState } from "react"

export const PropertyContext = createContext()

function PropertyProvider({ children }) {

  const defaultProperties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Modern Luxury House",
      location: "Jakarta Selatan",
      price: "Rp 2.500.000.000",
      description: "Luxury modern house with premium facilities."
    },

    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      title: "Minimalist Villa",
      location: "Bandung",
      price: "Rp 1.800.000.000",
      description: "Comfortable minimalist villa with mountain view."
    },

    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      title: "Elegant Apartment",
      location: "Surabaya",
      price: "Rp 950.000.000",
      description: "Modern apartment located in city center."
    }
  ]

  const [properties, setProperties] = useState(() => {

    const savedProperties = localStorage.getItem("properties")

    return savedProperties
      ? JSON.parse(savedProperties)
      : defaultProperties
  })

  useEffect(() => {

    localStorage.setItem(
      "properties",
      JSON.stringify(properties)
    )

  }, [properties])

  const addProperty = (property) => {

    setProperties([
      ...properties,
      {
        ...property,
        id: Date.now()
      }
    ])

  }

  const deleteProperty = (id) => {

    setProperties(
      properties.filter(
        (property) => property.id !== id
      )
    )

  }

  const updateProperty = (updatedProperty) => {

    setProperties(
      properties.map((property) =>
        property.id === updatedProperty.id
          ? updatedProperty
          : property
      )
    )

  }

  return (
    <PropertyContext.Provider
      value={{
        properties,
        addProperty,
        deleteProperty,
        updateProperty
      }}
    >
      {children}
    </PropertyContext.Provider>
  )
}

export default PropertyProvider