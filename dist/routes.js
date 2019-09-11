"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("./controllers/student");
const router = express_1.Router();
router.use('/', student_1.studentRoute);
exports.default = router;
//# sourceMappingURL=routes.js.map