import { Schema } from 'mongoose';

export const CatSchema = new Schema(
  {
    idLeague: { type: String, required: true, unique: true },
    idOrg: { type: Schema.Types.ObjectId, ref: 'Orgs', required: true },
    idEspn: { type: String, default: '' },
    idTsdb: { type: String, default: '' },
    idMss: { type: String, default: '' },
    idMyL: { type: String, default: '' },
    idRCtrl: { type: String, default: '' },
    strLeague: { type: String, required: true },
    strLeagueShort: { type: String, default: '' },
    strLeagueAlternate: { type: String, default: '' },
    idSoccerXML: { type: String, default: '' },
    idAPIfootball: { type: String, default: '' },
    strSport: { type: String, default: '' },
    strDivision: { type: String, default: '' },
    idCup: { type: String, default: '' },
    strCurrentSeason: { type: String, default: '' },
    intFormedYear: { type: String, defaut: '' },
    strGender: { type: String, defaut: '' },
    strCountry: { type: String, defaut: '' },
    strWebsite: { type: String, default: '' },
    strFacebook: { type: String, default: '' },
    strTwitter: { type: String, default: '' },
    strInstagram: { type: String, default: '' },
    strYoutube: { type: String, default: '' },
    strRSS: { type: String, default: '' },
    strDescriptionEN: { type: String, default: '' },
    strDescriptionDE: { type: String, default: '' },
    strDescriptionFR: { type: String, default: '' },
    strDescriptionCN: { type: String, default: '' },
    strDescriptionIT: { type: String, default: '' },
    strDescriptionJP: { type: String, default: '' },
    strDescriptionRU: { type: String, default: '' },
    strDescriptionES: { type: String, default: '' },
    strDescriptionPT: { type: String, default: '' },
    strDescriptionSE: { type: String, default: '' },
    strDescriptionNL: { type: String, default: '' },
    strDescriptionHU: { type: String, default: '' },
    strDescriptionNO: { type: String, default: '' },
    strDescriptionIL: { type: String, default: '' },
    strDescriptionPL: { type: String, default: '' },
    strFanart1: { type: String, default: '' },
    strFanart2: { type: String, default: '' },
    strFanart3: { type: String, default: '' },
    strFanart4: { type: String, default: '' },
    strBanner: { type: String, default: '' },
    strBadge: { type: String, default: '' },
    strLogo: { type: String, default: '' },
    strPoster: { type: String, default: '' },
    strTrophy: { type: String, default: '' },
    strNaming: { type: String, default: '' },
    strComplete: { type: String, default: '' },
    strLocked: { type: String, default: '' },
    rank: { type: Number, default: 999 },
    chYearIni: { type: Number, default: new Date().getFullYear() },
    chYearFin: { type: Number, default: new Date().getFullYear() },
    chTypes: [{ type: String }],
    evYearIni: { type: Number, default: new Date().getFullYear() },
    evYearFin: { type: Number, default: new Date().getFullYear() },
    infoInCat: { type: Boolean, default: false },
    isOnlyImg: { type: Boolean, default: false },
    isWorking: { type: Boolean, default: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
