import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local"; 
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";


@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly userService : UserService){
        super();
    }

    validate( firstName : string , lastName : string , age : number ) :  User {
        const user : Promise<User[]> = this.userService.findAll();
        if(user == undefined) 
        throw new UnauthorizedException(`You are Not Authenticate User`)
    }
}