const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get('/', (request, response) => {
  console.log("/" + request);
  return response.json({
    name: 'Willian Marciel'
  });
});

module.exports = router;
