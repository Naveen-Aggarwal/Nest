import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument, USER_MODEL } from "src/schemas/user/user.schema";

@Injectable()
export class UserService {
    constructor( @InjectModel( USER_MODEL) private readonly userModel : Model<UserDocument>) {
        console.log(this.userModel)
    }
}