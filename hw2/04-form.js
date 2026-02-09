const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/form');
});

app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
        <title>Form</title>
    </head>
    <body>
        <form action="submit" method="POST">
            <label for="uname">Name:</label>
            <input type="text" id="uname" name="uname" required></input>

            <label for="email">Email:</label>
            <input type="text" id="email" name="email" required></input>

            <button type="submit">Submit</button>
        </form>
    </body>
  </html>
  `);
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
          <title>Form Submitted</title>
      </head>
      <body>
      <h1>Form Data</h1>
      <p><strong>Username:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <a href="/form">Go back to form</a>
      </body>
    </html>
    `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
