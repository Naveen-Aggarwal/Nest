import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
//import { UserSchema, USER_MODEL } from "src/schemas/user/user.schema";
@Module(
    {
        //imports : [MongooseModule.forFeature([{ name : USER_MODEL , schema : UserSchema  }])] ,
        providers : [UserService] ,
       // exports : [MongooseModule]
    }
) 
export class UserModule {}