import { Hono } from "hono";
import { GenderRoute } from "./gender/gender.route";

export class V1Routes {
    public get routes(): Hono {
        const routes = new Hono();
        routes.route("/genders", new GenderRoute().routes);

        return routes;
    }
}