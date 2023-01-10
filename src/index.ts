import express from 'express';
import path from 'path';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/:name', (req, res) => {
  res.send({
    status: "ok",
    message: `${req.params.name} is added to the list`
  }) 
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
