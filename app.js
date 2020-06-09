const express = require('express');

const app = express();
const router = express.Router();

var path = __dirname + '/views/';
const PORT = 3333;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get('/', (request, response) => {
  return response.json({
    name: 'Willian Marciel'
  });
});

app.use(express.static(path));
app.use("/", router);

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`)
});
