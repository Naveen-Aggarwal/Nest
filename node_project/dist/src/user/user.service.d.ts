import { Model } from "mongoose";
import { UserDocument } from "src/schemas/user/user.schema";
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
}
