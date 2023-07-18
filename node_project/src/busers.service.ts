import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./DTO";

@Injectable()
export class BuserService {
     private store = new Map<number , CreateUserDTO> () ; 

     addBuser( user : CreateUserDTO){
         this.store.set(user.id , user);
     }

     getBuser(id: number){
         return this.store.get(+id);
     }

     getBusers(){
         return Array.from(this.store).map(([_ , user]) => user);
     }

     updateBuser(id:number , user : CreateUserDTO){
         this.store.set(+id , user);
     }

     deleteBuser( id: number){
         this.store.delete(id);
     }
}