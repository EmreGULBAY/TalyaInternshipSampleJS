import { createServer } from "./app.js";

const main = async () => {
  const app = createServer();
  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
