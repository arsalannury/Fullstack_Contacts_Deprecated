const express = require("express");

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

class RouteCreator {
  static readonly BASE_ROUTE = "/";
  static readonly USERS_ROUTE = "/users";
  static readonly COURES_ROUTE = "/coures";

  static readonly GetRouteHandler = (route: string) => {
    app.get(route, (req: any, res: any) => {
      res.status(200).send("route success");
    });
  };
}

// handle route for base-url
RouteCreator.GetRouteHandler(RouteCreator.BASE_ROUTE);

