import { Module  } from "@nestjs/common";
import { JobService } from "./jobs.service";
import { MongooseModule } from "@nestjs/mongoose";
//import { JobsSchema, JOB_MODEL } from "src/schemas/jobs";

@Module({
   // imports : [MongooseModule.forFeature([{ name : JOB_MODEL, schema : JobsSchema}])] ,
    providers : [JobService] ,
   // exports : [MongooseModule]
})
export class JobsModule {} ; 