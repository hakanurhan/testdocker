const express = require("express");
const app = express();
const port = 3000;
const child_process = require("child_process");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sample response to GET request to /!");
});

app.post("/run", async (req, res) => {
  console.log(`Incoming request: ${JSON.stringify(req.body)}`);
  let p = child_process.exec(
    "/app/processor.sh 100 200",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      // Sample callbacks when process is finished is as follows
      // child_process.exec("curl -X POST URL")
      // axios.post(url, {success: true, result: 10})
    }
  );
  res.send({ success: true, pid: p.pid });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
