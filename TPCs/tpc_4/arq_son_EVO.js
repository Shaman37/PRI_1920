var http = require('http');
var fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.method === 'GET') { 
        if(req.url === '/index' | req.url === '/'){
            fs.readFile('website/index.html', (erro,dados) => {
                if(!erro){
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
                    res.write(dados);
                    res.end();
                }
                else{
                    console.log(`Erro de leitura no ficheiro ${url[2]}`);
                    res.end();
                }
            } );
        }
        const url = req.url.split('/');
        if(req.url.startsWith('/musicas/')){
            if(url[2] === 'doc2html.xsl'){
                fs.readFile('doc2html.xsl', (erro,dados) => {
                    if(!erro){
                        res.writeHead(200, { 'Content-Type': 'text/xsl; charset=utf-8'})
                        res.write(dados);
                        res.end();
                    }
                    else{
                        console.log(`Erro de leitura no ficheiro ${url[2]}`);
                        res.end();
                    }
                } );
            }
            else {
                fs.readFile(`website/musicas/${url[2]}`, (erro,dados) => {
                    if(!erro){
                        res.writeHead(200, { 'Content-Type': 'text/xml'})
                        res.write(dados);
                        res.end();
                    }
                    else{
                        console.log(`Erro de leitura no ficheiro ${url[2]}`);
                        res.end();
                    }
                } );
            }
        }
    }
});

server.listen(3001);
console.log('Servidor à escuta na porta 3001...');