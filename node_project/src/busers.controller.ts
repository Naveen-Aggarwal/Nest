import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { BuserService } from "./busers.service";
import { CreateUserDTO } from "./DTO/create-user-dto";

@Controller('/busers')
export class BusersController{

    constructor(private buserService : BuserService){}

    @Post()
    addUser(@Body() createUserDTO : CreateUserDTO ){
        const rn = ~~(Math.random()*10000+1) 
        createUserDTO.id = rn ;
        this.buserService.addBuser(createUserDTO);
        return 'user Added!'
    }

    @Get()
    findUsers(){
        return this.buserService.getBusers();
    }    

    @Get(':id')
    findUser(@Param('id') id: number){
        return this.buserService.getBuser(+id);
    }
    

    @Patch(":id")
    updateUser(@Param('id') id:number , @Body() updateUserDTO : CreateUserDTO){
        this.buserService.updateBuser(+id , updateUserDTO);
        return 'USER UPDATED';
    }
    
    

    @Delete(':id')
    deleteUser(@Param('id') id: number){
        this.buserService.deleteBuser(id);
        return 'User DELETED';
    }


}