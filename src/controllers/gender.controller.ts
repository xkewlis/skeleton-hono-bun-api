import { Context } from "hono";
import { genderService } from "../services/gender.service";
import { CustomError } from "../utils/custom.error";

export class GenderController {
    public getGenders = async (c: Context) => {
        try {
            const genders = await genderService.getAllGenders();
            return c.json(genders);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    public getGender = async (c: Context) => {
        try {
            const id = Number(c.req.param("id") ?? 0);
            if (!id) {
                return c.json({ error: "Id is required" }, 400);
            }
            const gender = await genderService.getGenderById(id);
            return c.json(gender);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    public createNewGender = async (c: Context) => {
        try {
            const body = await c.req.json();
            if (!body.name || !body.abbreviation) {
                return c.json({ error: "Name and abbreviation are required" }, 400);
            }
            const gender = await genderService.createGender(body.name, body.abbreviation);
            return c.json(gender, 201);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

}
