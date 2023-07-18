import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JobDocument, JOB_MODEL } from "src/schemas/jobs";

@Injectable()
export class JobService {
    constructor(@InjectModel(JOB_MODEL) private readonly jobModel : Model<JobDocument>){} 
};