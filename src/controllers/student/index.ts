import { Router } from 'express';

import { iUserController } from "../../IControllers";
import container from "../../containers/di-container";
import SERVICE_IDENTIFIER from "../../containers/identifiers";

let studIstance = container.get<iUserController>(SERVICE_IDENTIFIER.IUserController);

const router = Router();

router.get('/student', (req, res, next) => {

    const query = req.query;

    if (query.hasOwnProperty('isAsync')) {
        studIstance.getUserDetils().then(response => {
            res.status(200).json({ staus: 'ok', data: response })
        }).catch(err => {
            res.status(err.stausCode || 500)
                .json({ staus: 'error', message: err.message || 'Internal server error' })
        });
    } else {
        studIstance.getUserDetilsCB((err, response) => {
            if (!err) {
                return res.status(200).json({ staus: 'ok', data: response })
            }

            res.status(err.stausCode || 500).json({ staus: 'error', message: err.message || 'Internal server error' })

        });
    }
});

export { router as studentRoute };