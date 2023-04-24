#!/usr/bin/enc node

const express = require('express');
const { rps, rpsls } = require('./lib/rpsls');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app', (req, res) => {
  res.status(200).send('200 OK');
});

app.get('/app/rps', (req, res) => {
  const playerChoice = rps();
  res.status(200).json({ player: playerChoice });
});

app.get('/app/rpsls', (req, res) => {
  const playerChoice = rpsls();
  res.status(200).json({ player: playerChoice });
});

app.post('/app/rps/play', (req, res) => {
  const playerChoice = req.body.shot || req.body['shot'];
  const result = rps(playerChoice);
  res.status(200).json(result);
});

app.post('/app/rpsls/play', (req, res) => {
  const playerChoice = req.body.shot || req.body['shot'];
  const result = rpsls(playerChoice);
  res.status(200).json(result);
});

app.get('/app/rpsls/play/:shot', (req, res) => {
  const playerChoice = req.params.shot;
  const result = rpsls(playerChoice);
  res.status(200).json(result);
});

app.get('/app/rps/play/:shot', (req, res) => {
  const playerChoice = req.params.shot;
  const result = rps(playerChoice);
  res.status(200).json(result);
});

app.use('*', (req, res) => {
  res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

