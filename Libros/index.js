const express = require('express')
const app = express()

//const app = http.createServer((request, response) => {
//  response.writeHead(200, { "Content-Type": "text/plain" });
//  response.end("Hola");
//});

app.get('/', (request,response) => {
  response.send('<h1>HAAAAA</h1>')
})

/*pp.get('/libros/:id',(request,response) => {
  const id = request.params.id
  console.log({id});
  response.send(id)
})*/

app.delete

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server runnign on ${PORT}`)
});
