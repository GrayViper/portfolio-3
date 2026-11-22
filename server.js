const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon"
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split("?")[0]);
  if (reqPath === "/" || reqPath === "") reqPath = "/index.html";
  if (reqPath === "/details") reqPath = "/details.html";
  if (reqPath === "/projects") reqPath = "/projects.html";
  if (reqPath === "/education") reqPath = "/education.html";
  if (reqPath === "/certifications") reqPath = "/certifications.html";
  if (reqPath === "/achievements") reqPath = "/achievements.html";

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, "");
  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found</title></head>
        <body style="font-family:sans-serif;text-align:center;padding:50px;">
          <h2>404 - File Not Found</h2>
          <p><a href="/" style="color:#2fa36b;font-weight:bold;">← Return to Home</a></p>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*"
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`⚡ Chakka Chinni Krishna · Pokédex Portfolio Server`);
  console.log(`==================================================`);
  console.log(`➜ Home (Meadow):    http://localhost:${PORT}/`);
  console.log(`➜ Details:          http://localhost:${PORT}/details.html`);
  console.log(`➜ Quest 1 (Projects):       http://localhost:${PORT}/projects.html`);
  console.log(`➜ Quest 2 (Education):      http://localhost:${PORT}/education.html`);
  console.log(`➜ Quest 3 (Certifications): http://localhost:${PORT}/certifications.html`);
  console.log(`➜ Quest 4 (Achievements):   http://localhost:${PORT}/achievements.html`);
  console.log(`==================================================\n`);
});
