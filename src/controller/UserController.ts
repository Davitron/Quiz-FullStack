import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";


export class UserController {

    private userRepository = getRepository(User);

    all = async (request: Request, response: Response, next: NextFunction) => {
        return this.userRepository.find();
    }

    one = (request: Request, response: Response, next: NextFunction) => {
        return this.userRepository.findOne(request.params.id);
    }

    save = async (request: Request, response: Response, next: NextFunction) => {
        return this.userRepository.save(request.body);
    }

    remove = async (request: Request, response: Response, next: NextFunction) => {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }
}