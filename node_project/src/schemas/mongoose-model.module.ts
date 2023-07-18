import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JobsSchema, JOB_MODEL } from "./jobs";
import { UserSchema, USER_MODEL } from "./user/user.schema";

const MODELS = [
    { name : USER_MODEL , schema: UserSchema} ,
    { name : JOB_MODEL , schema : JobsSchema}
];

@Global()
@Module(
    {
        imports:[MongooseModule.forFeature(MODELS)],
        exports:[MongooseModule ],
    }
)
export class MongooseModelsModule {}