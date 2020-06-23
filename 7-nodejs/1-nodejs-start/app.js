const http = require('http')
const fs = require('fs')


http.createServer((req, res) => {
    //res.writeHead(200, {'content-type': 'application/json'}) // send a json data
    // res.writeHead(200,{'content-type' : 'text/plain'})   //send text data
    // res.writeHead(200, {
    //     'content-type': 'text/html'
    // }) //send html data
    // res.end('Hello World') when we use text/plain 
    // res.end('<h2>text</h2>') when we use text/html

    //send json text
    // let obj = {
    //     name: 'safa',
    //     lastName: 'bouhlel'
    // }
    //res.end(JSON.stringify(obj)) //we need to stringify our obj to sent it to server

    //sen html text
    // let myHtml =
    //     '<html>' +
    //     '<head>' +
    //     '<title>my first server page</title>' +
    //     '</head>' +
    //     '<body>' +
    //     '<h2>text</h2>' +
    //     '</body>' +
    //     '</html>'
    // res.end(myHtml)


    //send html text from file
    //reading file
    // fs.readFile('views/index.html', (err,data) => {
    //     console.log(err);
    //     res.end(data)
    // })

    if (req.url == '/1') {
        res.writeHead(200, {'content-type': 'text/html'}) //send html data
        let text = fs.readFileSync('views/index.html')
        res.end(text)
    } else {
        if (req.url == '/2') {
            res.writeHead(200, {'content-type': 'text/html'}) //send html data
            let text = fs.readFileSync('views/index1.html')
            res.end(text)
        }else {
            if (req.url == '/blsdf/style.css') {
                res.writeHead(200, {'content-type': 'text/css'}) //send html data
                let text = fs.readFileSync('views/style.css')
                res.end(text)
            }else {
                if (req.url == '/fgfgfgfg/ss.css') {
                    res.writeHead(200, {'content-type': 'text/css'}) //send html data
                    let text = fs.readFileSync('views/style.css')
                    res.end(text)
                }else {
                    res.writeHead(200, {'content-type': 'text/html'}) //send html data
                    res.end('404 no such as page')
                }
            }
            
        }
    }

    console.log(req.url);
}).listen(4000)