import { GenderDto } from "../dtos/gender.dto";
import { GenderSequelize } from "../models/Gender";
import { CustomError } from "../utils/custom.error";

class GenderService {
    async getAllGenders(): Promise<GenderDto[]> {
        try {
            const genderInstances = await GenderSequelize.findAll();
            return genderInstances.map(gender => {
                const plainObject = gender.toJSON();
                return new GenderDto(plainObject.name, plainObject.abbreviation);
            });

        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async getGenderById(id: number): Promise<GenderDto> {
        try {
            const gender = await GenderSequelize.findByPk(id);
            if (!gender) throw CustomError
            const plainObject = gender.toJSON();
            return new GenderDto(plainObject.name, plainObject.abbreviation);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }

    async createGender(name: string, abbreviation: string): Promise<GenderDto> {
        try {
            const newGender = await GenderSequelize.create({ name, abbreviation });
            return new GenderDto(newGender.name, newGender.abbreviation);
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalSever()
        }
    }
}

export const genderService = new GenderService();
