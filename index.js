const http = require('http')
http.createServer((req, res)=>{
    if(req.url == "/html")
    {
        res.write( 
            "<html> <body> <h1>What is NodeJS</h1>  <h3> <h3>Node.js uses asynchronous programming!</h3> <h3>  how Node.js handles a file request: </h3><li>Sends the task to the computer's file system</li> <li>Ready to handle the next request.</li> <li>When the file system has opened and read the file, the server returns the content to the client.</li> <h3>Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.</h3> <h3>Benifits of NodeJS</h3> <li>Great performance!</li> <li>Node was designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications).</li> <li>The node package manager (npm) provides access to hundreds of thousands of reusable packages.</li> <li>Node.js is portable</li> <li> It is available on Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS, and NonStop OS. Furthermore, it is well-supported by many web hosting providers, that often provide specific infrastructure and documentation for hosting Node sites.</li> <li>It has a very active third party ecosystem and developer community, with lots of people who are willing to help.</li> </h3>  </body></html>"
    )
    res.end()

    }

    else if(req.url == "/json")
    {
        const responseData =  {
            What_is_NodeJS : 'Node.js uses asynchronous programming!',
            how_Nodejs_handles_a_file_request: "1. Sends the task to the computer's file system <br> 2. Ready to handle the next request. 3.When the file system has opened and read the file, the server returns the content to the client.",
            Info : "Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.",
            Benifits_of_NodeJS :"1.Great performance! 2.Node was designed to optimize throughput and scalability in web applications and is a good solution for many common web-development problems (e.g. real-time web applications). <br> 3.The node package manager (npm) provides access to hundreds of thousands of reusable packages. <br> 4. Node.js is portable. 5. It is available on Microsoft Windows, macOS, Linux, Solaris, FreeBSD, OpenBSD, WebOS, and NonStop OS. Furthermore, it is well-supported by many web hosting providers, that often provide specific infrastructure and documentation for hosting Node sites. 6. It has a very active third party ecosystem and developer community, with lots of people who are willing to help."
        }
        // res.write()
        const jsonstr = JSON.stringify(responseData)
        
        // const str = JSON.parse(jsonContent)
        res.end(jsonstr);
    }

}).listen(4000,()=>{
    console.log('server is running on port 4000')
})