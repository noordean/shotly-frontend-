import express from 'express';

const app = express();
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3030);

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});
