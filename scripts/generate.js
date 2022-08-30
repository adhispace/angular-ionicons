"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs-extra");
var upperCamelCase = require("uppercamelcase");
var del = require("del");
var iconsSourceDir = 'node_modules/ionicons/dist/ionicons/svg';
var iconsDestDir = "projects/angular-ionicons/icons";
var indexFile = "projects/angular-ionicons/src/lib/icons.ts";
var componentTemplate = fs.readFileSync("".concat(__dirname, "\\icon-template.tpl"), 'utf-8');
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var removeFileExtension;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                removeFileExtension = function (str) {
                    return str.substr(0, str.lastIndexOf('.'));
                };
                return [4 /*yield*/, del([iconsDestDir, indexFile])];
            case 1:
                _a.sent();
                return [4 /*yield*/, fs.mkdirSync(iconsDestDir)];
            case 2:
                _a.sent();
                fs.readdirSync("".concat(iconsSourceDir)).forEach(function (filename) {
                    'use strict';
                    var iconName = removeFileExtension(filename);
                    var exportName = upperCamelCase(iconName);
                    var svgContent = fs.readFileSync("".concat(iconsSourceDir, "/").concat(filename));
                    var payload = String(svgContent).match(/^<svg[^>]+?>(.+)<\/svg>$/) || [];
                    var output = componentTemplate
                        .replace(/__EXPORT_NAME__/g, "Ion".concat(exportName))
                        .replace(/__ICON_NAME__/g, iconName)
                        .replace(/__PAYLOAD__/, payload[1]);
                    fs.writeFileSync("".concat(iconsDestDir, "/").concat(iconName, ".ts"), output, 'utf-8');
                    fs.appendFileSync(indexFile, "export { Ion".concat(exportName, " } from '../../icons/").concat(iconName, "';\n"));
                });
                return [2 /*return*/];
        }
    });
}); })();
