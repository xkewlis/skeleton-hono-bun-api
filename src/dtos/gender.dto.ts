export class GenderDto {
    constructor(
        public name: string,
        public abbreviation: string
    ){}

    static create(object: { [key: string]: any}): [string?, GenderDto?] {
        if (!object.name) return ['name is required'];
        if (!object.abbreviation) return ['abbreviation is required'];
        return [undefined, new GenderDto(object.name, object.abbreviation)];
    }
}