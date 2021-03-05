import { Schema } from 'mongoose';

export const CareerSchema = new Schema(
  {
    idCareer: { type: String, required: true, unique: true },
    idPlayer: { type: Schema.Types.ObjectId, ref: 'Drivers', required: true },
    idOrg: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    idCat: { type: Schema.Types.ObjectId, ref: 'Cats', required: true },
    idTeam: { type: Schema.Types.ObjectId, ref: 'Teams' },
    numSeason: { type: Number, default: new Date().getFullYear() },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
