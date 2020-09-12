import { Schema } from 'mongoose';

export const ChampSchema = new Schema(
  {
    idLeague: { type: Schema.Types.ObjectId, ref: 'Org' },
    idCategory: { type: Schema.Types.ObjectId, ref: 'Cat' },
    strSeason: String,
    data: [
      {
        idPlayer: { type: Schema.Types.ObjectId, ref: 'Driver' },
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
