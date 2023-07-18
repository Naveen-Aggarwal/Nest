"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuserService = void 0;
const common_1 = require("@nestjs/common");
let BuserService = class BuserService {
    constructor() {
        this.store = new Map();
    }
    addBuser(user) {
        this.store.set(user.id, user);
    }
    getBuser(id) {
        return this.store.get(+id);
    }
    getBusers() {
        return Array.from(this.store).map(([_, user]) => user);
    }
    updateBuser(id, user) {
        this.store.set(+id, user);
    }
    deleteBuser(id) {
        this.store.delete(id);
    }
};
BuserService = __decorate([
    (0, common_1.Injectable)()
], BuserService);
exports.BuserService = BuserService;
//# sourceMappingURL=busers.service.js.map