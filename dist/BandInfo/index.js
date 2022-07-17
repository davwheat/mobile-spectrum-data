"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NRBandData = exports.LTEBandData = exports.AllBandData = void 0;
const LTEBandData_1 = require("./LTEBandData");
Object.defineProperty(exports, "LTEBandData", { enumerable: true, get: function () { return LTEBandData_1.LTEBandData; } });
const NRBandData_1 = require("./NRBandData");
Object.defineProperty(exports, "NRBandData", { enumerable: true, get: function () { return NRBandData_1.NRBandData; } });
const AllBandData = Object.assign(Object.assign({}, LTEBandData_1.LTEBandData), NRBandData_1.NRBandData);
exports.AllBandData = AllBandData;
//# sourceMappingURL=index.js.map