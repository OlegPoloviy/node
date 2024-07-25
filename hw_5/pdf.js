const fs = require("fs");
const zlib = require("zlib");
const path = require("path"); 

function transformPDF(pathPdf){

    if (path.extname(pathPdf) !== '.pdf') {
        console.error("The extension is not pdf!");
        return;
    }

    console.log(pathPdf);

    const gzip = zlib.createGzip();
    const readStream = fs.createReadStream(pathPdf);
    const output = fs.createWriteStream("output.pdf");

    readStream.pipe(gzip).pipe(output);

    output.on('finish', () => {
        console.log('File has been compressed successfully');
    });

    output.on('error', (err) => {
        console.error('Error:', err);
    });
}

transformPDF("book.pdf");