import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ACCOUNT_STATUS, ACCOUNT_TYPE  } from "src/constants/account.constants";
import { Address, AddressSchema } from "./address.schema";

@Schema(
    {
        timestamps : true
    }
)
export class User {
    @Prop({ required: true})
    name : string

    @Prop( { required : true})
    email : string 

    @Prop( { required: true , select :false})
    password : string

    @Prop()
    age?: number

    @Prop()
    phone?: string

    @Prop({
        type : String ,
        enum : Object.keys(ACCOUNT_STATUS) ,
        default : ACCOUNT_STATUS.ACTIVE
    })
    status ?: ACCOUNT_STATUS;

    @Prop({
        type : String ,
        enum : Object.keys(ACCOUNT_TYPE) ,
        immutable : true ,
        required : true
    })
    accountType : ACCOUNT_TYPE; 

    @Prop({ default:[]})
    social ?: string[] 

    @Prop({ default : false})
    isEmailVerified ?: boolean ;

    @Prop({ type:AddressSchema , required: true})
    address : Address ;

    @Prop( raw({
        reference : { type : String},
        beta : { type : Boolean }
         })
    ) metadata : Record<string , any> | any ;
}
const schema = SchemaFactory.createForClass(User);

export type UserDocument = User & Document ;

export const  USER_MODEL = User.name ;
export const UserSchema = schema ;