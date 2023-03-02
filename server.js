// const http=require ("http");
// const HOSTNAME=process.env.HOSTNAME ||"localhost";
// const PORT=process.env.PORT ||3000;
// const fs=require("fs");
// const {writeFile,writeFileSync} =require("fs");


//  write file

// const newContent="This an a new Content";
//  writeFile("Hi.txt",newContent,{flag:"a"},(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Content Writing done");
//  })

// try{
//     writeFileSync("Hi.txt",newContent);
//     console.log("content writen !");
// }
// catch(err){
//     console.log(err);
// }

// read file 
//  fs.readFile("Hi.txt","utf-8",(err,data)=>{

//     if(err){
//         console.log(err);
//         return; 
//     }else{
//         // console.log(data.toString());
//         console.log(data);
//     }
// });
// try{

//    const data = fs.readFileSync("Hi.txt","utf-8");
//    console.log(data);
// }catch(err){
//     console.log(err);

// }
// console.log("from out side");
//http server basic 
// const server=http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("Content-Type","text/plain");
//     res.end("Hello World");
// })

// server.listen(PORT,HOSTNAME,()=>{
//     console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
// })

const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
