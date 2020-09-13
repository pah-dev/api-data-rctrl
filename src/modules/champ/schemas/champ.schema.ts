import { Schema } from 'mongoose';

export const ChampSchema = new Schema(
  {
    idLeague: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    idCategory: { type: Schema.Types.ObjectId, ref: 'Cats', required: true },
    idEspn: String,
    idTsdb: String,
    idMss: String,
    idRCtrl: String,
    strSeason: String,
    data: [
      {
        idPlayer: { type: Schema.Types.ObjectId, ref: 'Drivers' },
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
