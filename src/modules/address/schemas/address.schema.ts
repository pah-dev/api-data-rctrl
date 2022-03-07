import { Schema } from 'mongoose';

export const AddressSchema = new Schema(
  {
    hash: { type: String, required: true, unique: true },
    type: { type: String, default: '' },
    visits: { type: Number, default: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
