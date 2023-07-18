"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JOB_MODEL = exports.JobsSchema = exports.Job = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jobs_constants_1 = require("../../constants/jobs.constants");
const address_schema_1 = require("../user/address.schema");
const user_schema_1 = require("../user/user.schema");
let Job = class Job {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.USER_MODEL, required: true }),
    __metadata("design:type", Object)
], Job.prototype, "employer", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Job.prototype, "companyName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Job.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Job.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [] }),
    __metadata("design:type", Array)
], Job.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Job.prototype, "salary", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.keys(jobs_constants_1.JOB_TYPE),
        required: true,
    }),
    __metadata("design:type", String)
], Job.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: address_schema_1.AddressSchema,
        required: true
    }),
    __metadata("design:type", address_schema_1.Address)
], Job.prototype, "location", void 0);
Job = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true
    })
], Job);
exports.Job = Job;
const schema = mongoose_1.SchemaFactory.createForClass(Job);
exports.JobsSchema = schema;
exports.JOB_MODEL = Job.name;
//# sourceMappingURL=jobs.schema.js.map