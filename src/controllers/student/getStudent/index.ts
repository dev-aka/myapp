import { inject, injectable, named } from "inversify";
import SERVICE_IDENTIFIER from "../../../containers/identifiers";
import TAG from "../../../containers/tags";
import { IUser } from '../../../IService';
import { iUserController } from '../../../IControllers'

@injectable()
export default class Student implements iUserController {
    iUserInstance: IUser;
    constructor(@inject(SERVICE_IDENTIFIER.IUser) @named(TAG.STUDENT) iUser: IUser) {
        this.iUserInstance = iUser;
    }

    async getUserDetils() {
        return await this.iUserInstance.getUserDetils();
    }

    getUserDetilsCB(cb) {
        this.iUserInstance.getUserDetailsCB((err, data) => {
            cb(err, data)
        });
    }
}