const http = require("http")

const PORT = 4000

const server = http.createServer()

const friends = [
  {
    id: 0,
    name: "Nikola Tesla"
  },
  {
    id: 1,
    name: "Isaac Newton"
  },
  {
    id: 2,
    name: "Albert Einstein"
  }
]

server.on("request", (req, res) => {
  const items = req.url.split("/")
  if (items[1] === "friends") {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    if (items.length === 3) {
      const friendIndex = parseInt(items[2])
      res.end(JSON.stringify(friends[friendIndex]))
    } else {
      res.end(JSON.stringify(friends))
    }
  }
})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
