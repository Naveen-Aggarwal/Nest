import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { JOB_TYPE } from "src/constants/jobs.constants";
import { AddressSchema , Address } from "../user/address.schema";
import { USER_MODEL } from "../user/user.schema";

@Schema(
    {
        timestamps : true
    }
)
export class Job {
    @Prop({ type: Types.ObjectId , ref : USER_MODEL , required:true})
    employer: string | Types.ObjectId  ;

    @Prop({ required: true})
    companyName : string

    @Prop( { required : true})
    title : string 

    @Prop( { required: true })
    description : string 

    @Prop({ default: []})
    tags?: string[]

    @Prop()
    salary?: String ;

    @Prop({
        type : String ,
        enum : Object.keys(JOB_TYPE) ,
        required: true , 
    })
     type : JOB_TYPE;

    @Prop({
        type : AddressSchema ,
        required : true
    })
    location: Address; 



}
const schema = SchemaFactory.createForClass(Job);

export type JobDocument  = Job & Document
export const JobsSchema = schema ;

export const JOB_MODEL = Job.name;