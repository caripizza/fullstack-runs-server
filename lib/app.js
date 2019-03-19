const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./middleware/connection');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');

app.use(require('morgan')('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(cors());
app.use(express.json());

app.use('/dogs', connection, require('./routes/dogs'));

// app.get('/', (req, res) => {
//   res.status(200).send(`
//     <html>
//       <body>
//         <p>Welcome to the Dog List App!</p>
//         <a href="/dogs">View dogs</a><br>
//       </body>
//     </html>
//   `
//   );
// });

app.use(notFound);
app.use(handler);

module.exports = app;
