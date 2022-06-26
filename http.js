const http = require('http');


const server= http.createServer((req,res)=>{
     if(req.url=== '/'){
        res.end('welcome to the homepage')
    
     }
     if(req.url === '/about'){
         res.end("Welcome to about page")
      
     }

     res.end(`
       <h1>Oops Did'nt get </h1>
       <a href="/">Back home</a>
     `)
  
})

server.listen(5000);

