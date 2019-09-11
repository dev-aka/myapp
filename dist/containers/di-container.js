"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_1 = require("inversify");
/** import controller implementation */
const getStudent_1 = __importDefault(require("../controllers/student/getStudent/"));
/** import service implementation */
const services_1 = require("../services");
const identifiers_1 = __importDefault(require("./identifiers"));
const tags_1 = __importDefault(require("./tags"));
let container = new inversify_1.Container();
container.bind(identifiers_1.default.IUser).to(services_1.studentService).whenTargetNamed(tags_1.default.STUDENT);
container.bind(identifiers_1.default.IUser).to(services_1.user).whenTargetNamed(tags_1.default.USER);
container.bind(identifiers_1.default.IUserController).to(getStudent_1.default);
exports.default = container;
//# sourceMappingURL=di-container.js.map