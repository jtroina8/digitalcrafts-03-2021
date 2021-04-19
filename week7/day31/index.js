console.log("Hello World!")

const http = require("http")
const address = "127.0.0.1"
const PORT = 3002

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader("Content-Type", "text/plain");
    response.end("hello");
});

server.listen(PORT, address, () => {
    console.log(`server is on http://${address}:${PORT}`);
});

