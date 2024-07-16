import fs from "fs";

//counting letters, spaces and strings
fs.readFile("ls_7_8\\events.js","utf-8",(err,data) => {
    if(err){
        throw err;
    }else{
        let letters = 0;
        let spaces = 0;
        let lines = 1;

        for(let i = 0; i <= data.length - 1; i++){
            const char = data[i];
            if (char === ' ') {
                spaces++;
            }else if(char === "\n"){
                lines++;
            }else if(isLetter(char)){
                letters++;
            }
        };
        console.log("the count of letters is: ",letters);
        console.log("the count of spaces is: ",spaces);
        console.log("the count of lines is: ",lines);
    }
})

function isLetter(char) {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

//reversing file
try{
    const data = fs.readFileSync("ls_7_8\\events.js","utf-8");
    const reversed = data.split('').reverse().join('');
    console.log(reversed);
}catch(err){
    console.error(err);
};

//show every second word
try{
    const data = fs.readFileSync("ls_7_8\\events.js","utf-8");
    for(let i = 0; i <= data.length - 1; i+=2){
        console.log(data[i])
    }
}catch(err){
    console.error(err);
};