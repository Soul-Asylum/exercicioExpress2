
const express =  require('express');
const app = express();
const routeProducts = require('./routes/routeProducts')


app.use(express.json());
app.use('/produtos', routeProducts)

app.use((req, res, next) => {
  res.status(404).send('Erro 404, not found');

  next();
})


app.listen(3000, () => console.log("Backend Rodando..."));