import { Schema } from 'mongoose';

export const ChampSchema = new Schema(
  {
    idOrg: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    idCat: { type: Schema.Types.ObjectId, ref: 'Cats', required: true },
    idEspn: String,
    idTsdb: String,
    idMss: String,
    idMyL: String,
    idRCtrl: String,
    strSeason: String,
    numSeason: Number,
    data: [
      {
        idDriver: { type: Schema.Types.ObjectId, ref: 'Drivers' },
        position: Number,
        totalPoints: Number,
      },
    ],
    sumPoints: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
