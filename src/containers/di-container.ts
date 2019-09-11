import "reflect-metadata";

import { Container } from "inversify";

/* import services interfaces*/
import {
  IUser
} from "../IService/";


/* import controller interfaces*/
import { iUserController }
  from "../IControllers";


/** import controller implementation */
import
Student
  from "../controllers/student/getStudent/";

/** import service implementation */
import {
  studentService,
  user
} from "../services";

import SERVICE_IDENTIFIER from "./identifiers";

import TAG from "./tags";

let container = new Container();

container.bind<IUser>(SERVICE_IDENTIFIER.IUser).to(studentService).whenTargetNamed(TAG.STUDENT);
container.bind<IUser>(SERVICE_IDENTIFIER.IUser).to(user).whenTargetNamed(TAG.USER);
container.bind<iUserController>(SERVICE_IDENTIFIER.IUserController).to(Student);

export default container;
