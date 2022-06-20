const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const mc = require("./controller/messages_controller");

app.get("/api/messages", mc.read);
app.post("/api/messages", mc.create);
app.put(`/api/messages/:id`, mc.update);
app.delete(`/api/messages/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Up to no good on port ${port}`);
});
