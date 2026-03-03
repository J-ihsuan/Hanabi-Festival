// Import built-in Node.js modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Set Port
const PORT = 3000;

// inRequest (Request): What the browser asks for.
// inResponse (Response): What the server sends back.
const server = http.createServer((inRequest, inResponse) => {
    // Determine which file to open. If the browser asks for "/", give it "index.html".
    let filePath = '.' + (inRequest.url === '/' ? '/index.html' : inRequest.url);

    // Read File
    fs.readFile(filePath, (error, content) => {
        // If there is an error, send a 404 message.
        if (error) {
            inResponse.writeHead(404);
            inResponse.end('File not found!');
            return;
        } else {
            // OK
            inResponse.writeHead(200);
            inResponse.end(content, 'utf-8');
        }
    });
});

// Starts the server to listen for visitors on Port 3000
// 0.0.0.0 tells the server to listen on all available network interfaces, making it accessible to other devices. (phone)
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});