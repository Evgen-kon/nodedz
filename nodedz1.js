const http = require('http');

const server = http.createServer((req,res)=>
{
    if(req.url == '/'){
        res.writeHead(200,{
            'Content-Type':'text/html; charset=UTF-8',

        });
        res.end(`<a href = "/about">Другая страница</a><br /><h1>Количество загрузок = ${count1()}</h1>`);
    }
    else if(req.url =='/about') {
        res.writeHead(200,{
            'Content-Type':'text/html; charset=UTF-8',
        });
        res.end(`<a href = "/">Главная страница</a><br /><h1>Количество загрузок = ${count2()}</h1>`);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html; charset=UTF-8',});
        res.end("<h1>Страницы не существует</h1>");
    }
});
server.listen(3000);
function counter(){
    let n=1;
     return function schet(){
        return  n++;
    }
}
let count1 = counter();
let count2 = counter();
