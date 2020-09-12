import { Schema } from "mongoose"

export const PilotSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    alias: String,
    bloodType: String,
    phone: String,
    country: String,
    email: String,
    club: [{type: Schema.Types.ObjectId, ref: 'club'}],
    pilotNumber: {type: Number, required: true},
    photoURL: String,
    //assignedRaceBand: RaceBand,
    //classs: Classs,
    createdAt: Date
});