const Config = require('./env');
const bundleId = Config.BRAND;
let env;

if (bundleId.includes('DraIgraine')) env = require('./env/DraIgraine.json');
else if (bundleId.includes('DrPedro')) env = require('./env/DrPedro.json');

Object.assign(global, env);
export {};
