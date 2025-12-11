const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Change this for each backend
const backendName = "SERVER-2";

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align:center;">
        <h1>Azure Front Door Demo</h1>
        <h2>Response served from: <span style="color:blue;">${backendName}</span></h2>
        <p>Time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
