import { Schema } from 'mongoose';

export const ChampSchema = new Schema(
  {
    idChamp: { type: String, required: true, unique: true },
    idOrg: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    idCat: { type: Schema.Types.ObjectId, ref: 'Cats', required: true },
    idEspn: { type: String, default: '' },
    idTsdb: { type: String, default: '' },
    idMss: { type: String, default: '' },
    idMyL: { type: String, default: '' },
    idRCtrl: { type: String, default: '' },
    strSeason: { type: String, default: '' },
    numSeason: { type: Number, required: true },
    data: [
      {
        idDriver: { type: Schema.Types.ObjectId, ref: 'Drivers' },
        idTeam: { type: Schema.Types.ObjectId, ref: 'Teams' },
        position: { type: Number, default: 0 },
        cups: { type: Number, default: 0 },
        difference: { type: Number, default: 0 },
        totalPoints: { type: Number, default: 0 },
      },
    ],
    sumPoints: { type: Number, default: 0 },
    typeChamp: { type: String, default: 'D' },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
