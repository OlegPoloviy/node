import http from "http";

const PORT = 3060;

const server = http.createServer();

server.on('request' ,async(req,res) => {
    const url = req.url;
    switch(url){
        case "/" : {
            res.end("Hello world");
            break;
        }
        //getting data from post method
        case "/data":{
            let json = ""

            if(req.method === 'POST'){
                req.on("data", data => {
                    json = data.toString();
                    console.log(json);
                    res.end(json);
                });
            }else {
                res.end("this is not a POST method!")
            }
            break;
        }
        //creating proxy
        case "/proxy": {
            const response  = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const data = await response.json();
            res.end(JSON.stringify(data));
            break;
        }
        default:{
            res.statusCode = 404;
            res.end("Error");
        }

    }
   
});

server.listen(3060,() => {
    console.log(`server started on ${PORT}`);
})