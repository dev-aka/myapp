"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const di_container_1 = __importDefault(require("../../containers/di-container"));
const identifiers_1 = __importDefault(require("../../containers/identifiers"));
let studIstance = di_container_1.default.get(identifiers_1.default.IUserController);
const router = express_1.Router();
exports.studentRoute = router;
router.get('/student', (req, res, next) => {
    const query = req.query;
    if (query.hasOwnProperty('isAsync')) {
        studIstance.getUserDetils().then(response => {
            res.status(200).json({ staus: 'ok', data: response });
        }).catch(err => {
            res.status(err.stausCode || 500)
                .json({ staus: 'error', message: err.message || 'Internal server error' });
        });
    }
    else {
        studIstance.getUserDetilsCB((err, response) => {
            if (!err) {
                return res.status(200).json({ staus: 'ok', data: response });
            }
            res.status(err.stausCode || 500).json({ staus: 'error', message: err.message || 'Internal server error' });
        });
    }
});
//# sourceMappingURL=index.js.map