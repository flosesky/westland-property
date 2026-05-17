const express = require("express")
const cors = require("cors")

const db = require("./db")

const app = express()

app.use(cors())
app.use(express.json())

// HOME
app.get("/", (req, res) => {

  res.json({
    message: "Backend Running Successfully"
  })

})


// GET ALL PROPERTIES
app.get("/properties", (req, res) => {

  const sql = "SELECT * FROM properties"

  db.query(sql, (err, result) => {

    if (err) {

      console.log(err)

      res.status(500).json({
        message: "Failed to fetch properties"
      })

    } else {

      res.json(result)

    }

  })

})


// ADD PROPERTY
app.post("/properties", (req, res) => {

  const {
    title,
    location,
    price,
    image,
    description
  } = req.body

  const sql = `
    INSERT INTO properties
    (title, location, price, image, description)
    VALUES (?, ?, ?, ?, ?)
  `

  db.query(
    sql,
    [title, location, price, image, description],
    (err, result) => {

      if (err) {

        console.log(err)

        res.status(500).json({
          message: "Failed to add property"
        })

      } else {

        res.status(201).json({
          message: "Property Added Successfully"
        })

      }

    }
  )

})


// UPDATE PROPERTY
app.put("/properties/:id", (req, res) => {

  const { id } = req.params

  const {
    title,
    location,
    price,
    image
  } = req.body

  const sql = `
    UPDATE properties
    SET
      title = ?,
      location = ?,
      price = ?,
      image = ?
    WHERE id = ?
  `

  db.query(
    sql,
    [title, location, price, image, id],
    (err, result) => {

      if (err) {

        console.log(err)

        res.status(500).json({
          message: "Failed to update property"
        })

      } else {

        res.json({
          message: "Property Updated Successfully"
        })

      }

    }
  )

})


// DELETE PROPERTY
app.delete("/properties/:id", (req, res) => {

  const { id } = req.params

  const sql = `
    DELETE FROM properties
    WHERE id = ?
  `

  db.query(sql, [id], (err, result) => {

    if (err) {

      console.log(err)

      res.status(500).json({
        message: "Failed to delete property"
      })

    } else {

      res.json({
        message: "Property Deleted Successfully"
      })

    }

  })

})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})