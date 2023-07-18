/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Types } from "mongoose";
import { JOB_TYPE } from "src/constants/jobs.constants";
import { Address } from "../user/address.schema";
export declare class Job {
    employer: string | Types.ObjectId;
    companyName: string;
    title: string;
    description: string;
    tags?: string[];
    salary?: String;
    type: JOB_TYPE;
    location: Address;
}
export type JobDocument = Job & Document;
export declare const JobsSchema: import("mongoose").Schema<Job, import("mongoose").Model<Job, any, any, any, import("mongoose").Document<unknown, any, Job> & Omit<Job & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Job, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Job>> & Omit<import("mongoose").FlatRecord<Job> & {
    _id: Types.ObjectId;
}, never>>;
export declare const JOB_MODEL: string;
