import {
  create,
  router as _router,
  defaults,
  rewriter as _rewriter,
} from "json-server";
const server = create();
const router = _router("db.json");
const middlewares = defaults();
const rewriter = _rewriter({
  "/budi/register": "/users",
  "/budi/login": "/users",
  "/budi/refresh": "/users",
});

server.use(middlewares);
server.use(rewriter);
server.use(router);
server.listen(5173, () => {
  console.log("JSON Server is running");
});
