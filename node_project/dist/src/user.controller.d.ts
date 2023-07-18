import { CreateUserDTO } from "./DTO/create-user-dto";
export declare class UserController {
    addUser(createUserDTO: CreateUserDTO): string;
    getUsers(): any[];
    getUser(id: number): any;
    updateUser(id: number, updateUserDTO: CreateUserDTO): " UPDATE Successful!" | "NO Such user found to update!";
    deleteUser(id: number): string;
}
