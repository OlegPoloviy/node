const fs = require("fs");

const writeable = fs.createWriteStream("text.txt");

//testing some methods to writeable

writeable.setDefaultEncoding("utf-8");

writeable.on("open", () => {

    writeable.write("Some random text\n");
    writeable.write("Before corking\n");

    writeable.cork();//corking stream so text will write to the buffer
    writeable.write("after corking\n");

    console.log(writeable.writableCorked);//returns true

    writeable.uncork(); 

    console.log(writeable.writableLength);//returns length in bytes

    writeable.end();

    console.log(writeable.writableEnded);//returns true
    console.log(writeable.destroyed);//returns false
});


writeable.on("error", (err) => {
    console.error("Error: ", err);
});

writeable.on("finish", () => {
    console.log("stream is closed");
});

//function that writes into the console buffers 
function writeToConsole(data){

    if (typeof data !== 'string' && !Buffer.isBuffer(data)) {
        throw new Error('Data must be a string or a buffer');
    }

    process.stdout.write(data);
}

writeToConsole('Hello, world!\n');
writeToConsole(Buffer.from('Hello, buffer!\n'));