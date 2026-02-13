const http = require('http')

// const myserver = http.createServer((req, res) => {
//     // console.log("Server req/res")
//     // res.end("This is my first server")

//     if(req.url == '/'){
//         req.end("this is my home page")
//     }else if(req.url == '/about'){
//     //    res.writeHead(200,{"content-type":"text/html"});
//     res.end(<img src='https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU='></img>)
//     //    res.end(`
//     //     <h1> this is image</h1>
//     //    <img src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU=">`);
//     }else{
//         res.end("404 page not fount")
//     }

// })

// myserver.listen(8000, () => Server started!)
const fs = require('fs')

// fs.writeFileSync("./cse-c.txt", 'hi we are coder in node')

// const result = fs.readFileSync("./cse-c.txt", "utf-8")

// fs.writeFile("./cse-c.txt", 'hi Brother', (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("write file successfully")
//     }
// })

//     fs.readFile("./cse-c.txt", "utf-8", (err, result) => {
//         if(err){
//             console.log("Error", err)
//         }else{
//             console.log(result)
//         }
//     })


fs.appendFileSync("./cse-c.txt", how are you?)

fs.appendFile("./cse-c.txt", ` what are you doing?`, (err) => {
    if(err){
        console.log("Error", err)
    }else{
        console.log("append file successfully")
    }
})       


// console.log(result)