import { Request, Response } from 'express';
interface QueryParams {
    age: number;
    name: string;
}
export declare class UsersController {
    rHandler(req: Request, res: Response): void;
    reqHandler(req: Request, res: Response): import("express-serve-static-core").ParamsDictionary;
    req2Handler(req: Request): import("express-serve-static-core").ParamsDictionary;
    req3Handler(req: Request): import("express-serve-static-core").ParamsDictionary;
    req4handler(req: Request): import("express-serve-static-core").ParamsDictionary;
    reHand(): {
        url: string;
        statusCode: number;
    };
    redirect(): string;
    redirectf(): string;
    getVideos(params: Record<string, any>): string;
    getQuery(query: QueryParams): string;
    getHeader(headers: Record<string, any>): Record<string, any>;
    getBodyData(body: Record<string, any>): Record<string, any>;
}
export {};
