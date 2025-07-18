/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [], "controllers": [[import("./app.controller"), { "AppController": { "ping": {}, "login": {}, "loginCallback": {} } }], [import("./breeze-connect/breeze-connect.controller"), { "BreezeConnectController": { "getFunds": {}, "getDematHoldings": {} } }]] } };
};