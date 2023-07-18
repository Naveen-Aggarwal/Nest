import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-user-dto";

let USERS = [];

@Controller('/user')
export class UserController {

    @Post()
    addUser(@Body() createUserDTO : CreateUserDTO ){
        const rn = ~~(Math.random()*10000+1) 
        createUserDTO.id = rn ;
        USERS.push(createUserDTO)
        return "User added!! successfully.";
    }

    @Get()
    getUsers(){
        return USERS;
    }

    @Get(':id')
    getUser(@Param("id") id : number){
       return USERS.find( (user) => user.id === +id);
    }

    @Patch(":id")
    updateUser(@Param('id') id : number , @Body() updateUserDTO : CreateUserDTO){
        const useridx = USERS.findIndex( (user)=> user.id === +id ) ;

       console.log("777777777777",useridx);
        if(useridx || useridx==0 ){
            console.log(useridx, USERS[useridx]);
            console.log(updateUserDTO);
            USERS[useridx]= updateUserDTO ;
            return " UPDATE Successful!";
        } else if(useridx ==-1) {
            return 'NO Such user found to update!';
        }
    }

    @Delete(':id')
    deleteUser(@Param('id') id : number){
       USERS =  USERS.filter ( user => user.id !== +id);
       return 'USER Deleted Successfully'
    }

}