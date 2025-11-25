require("dotenv").config()
const express = require("express")
const axios = require("axios")
const cors = require("cors")

const app = express()
app.use(cors())

const NASA_KEY = process.env.NASA_KEY

app.get("/apod", async (req, res) => {

    const resultado = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`
    )

    res.json(resultado.data)
})

app.get("/search", async (req, res) => {
  const { termo, ano } = req.query

    const url = `https://images-api.nasa.gov/search?q=${termo}&year_start=${ano}&year_end=${ano}&media_type=image`
    const resultado = await axios.get(url)

    const items = resultado.data.collection.items.slice(0, 10).map((item) => ({
      title: item.data[0].title,
      description: item.data[0].description,
      image:
        item.links && item.links.length > 0
          ? item.links[0].href
          : null
    }))

    res.json(items)
})

app.listen(3000, () => console.log("Backend rodando na porta 3000"))
