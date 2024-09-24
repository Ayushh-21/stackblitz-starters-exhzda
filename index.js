const express = require('express');
const { resolve } = require('path');

let cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.use(express.static('static'));

const calculateReturns = (boughtAt, marketPrice, quantity) => {
  let result = (marketPrice - boughtAt) * quantity;
  return result;
};

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = req.query.quantity;

  res.send(calculateReturns(boughtAt, marketPrice, quantity).toString());
});

const totalReturns = (stock1, stock2, stock3, stock4) => {
  let result = stock2 + stock1 + stock3 + stock4;
  return result;
};

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalReturns(stock1, stock2, stock3, stock4).toString());
});

const calculateReturnPercentage = (boughtAt, returns) => {
  let result = ((boughtAt - returns) / boughtAt) * 100;
  return result;
};

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  res.send(calculateReturnPercentage(boughtAt, returns).toString());
});

const totalReturnPercentage = (stock1, stock2, stock3, stock4) => {
  let result = stock1 + stock2 + stock3 + stock4;
  return result;
};

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalReturnPercentage(stock1, stock2, stock3, stock4).toString());
});

const status = (returnPercentage) => {
  let result;
  if (returnPercentage > 0) {
    return (result = 'profit');
  } else {
    return (result = 'loss');
  }
};

app.get('/status', (req, res) => {
  let returnPercentage = req.query.returnPercentage;

  res.send(status(returnPercentage));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
