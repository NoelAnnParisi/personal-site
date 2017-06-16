const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });


app.listen(PORT, (err)=> {
	if (!err){
		console.log(`YAHS QWEEN!`);
	}
})
