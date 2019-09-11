"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.get('/', (req, res, next) => {
    res.send('WORKING PERFECT');
});
const routes_1 = __importDefault(require("./routes"));
app.use('/v1', routes_1.default);
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map