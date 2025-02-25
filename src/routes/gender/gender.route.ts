import { Hono } from "hono";
import { GenderController } from "../../controllers/gender.controller";

export class GenderRoute {
    public get routes(): Hono {
        const router = new Hono();
        const controller = new GenderController()

        router.get("/", controller.getGenders);
        router.get("/:id", controller.getGender);
        router.post("/", controller.createNewGender);

        return router
    }
}