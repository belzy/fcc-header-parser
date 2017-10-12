const http = require("http");

const server = http.createServer((request, response) => {
   
    const ip = request.headers["x-forwarded-for"];
    const language = request.headers["accept-language"].split(/[,]/)[0];
    const software = request.headers["user-agent"].split(/[(]|[)]/)[1];
    
    response.writeHead(200, {"Content-Type": "application/JSON"});
    response.end(JSON.stringify({"ipaddress": ip, "language": language, "software": software}));
});

server.listen(process.env.PORT);
