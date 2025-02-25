import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface GenderRow {
    id: number;
    name: string;
    abbreviation: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null
}

export class GenderSequelize extends Model<GenderRow, Omit<GenderRow, 'id'>> {
    declare id: number;
    declare name: string;
    declare abbreviation: string;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date | null;
}

GenderSequelize.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abbreviation: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    timestamps: true,
    tableName: 'genders',
    underscored: true,
    paranoid: true,
});
