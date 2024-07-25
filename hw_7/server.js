import http from "http";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();
console.log("PORT from .env:", process.env.PORT);

const MimeTypes = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "text/javascript",
    ".png" : "image/png",
    ".jpeg" : "image/jpeg"
};

function connectionLogic(res, filePath, ext) {
    res.setHeader("Content-Type", MimeTypes[ext]);
    fs.readFile("./public" + filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.end(data);
        }
    });
}

const PORT = process.env.PORT || 3050; 

const server = http.createServer();
server.on('request', (req, res) => {
    const url = req.url;

    switch (url) {
        case '/': {
            fs.readFile("./public/form.html", (err, data) => {
                if (err) {
                    console.error(err);
                    res.end();
                } else {
                    res.write(data);
                    res.end();
                }
            });
            break;
        }
        case "/api/order": {
            if (req.method === "POST") {
                let bodyData = "";
                req.on("data", (chunk) => {
                    bodyData += chunk;
                });
                req.on("end", () => {
                    const data = JSON.parse(bodyData);
                   if(data.email){
                    console.log(data.email);
                   }
                    if(data.message){
                    console.log(data.message)
                   }
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.write(JSON.stringify(bodyData));
                    res.end();
                });
            } else {
                res.statusCode = 404;
                res.end();
            }
            break;
        }
        default: {
            const extname = String(path.extname(url)).toLowerCase();
            console.log(extname);
            if (extname in MimeTypes) {
                connectionLogic(res, url, extname);
            } else {
                res.statusCode = 404;
                res.end();
            }
            break;
        }
    }
});

server.listen(PORT, () => {
    console.log("Server is listening on port", PORT);
});
