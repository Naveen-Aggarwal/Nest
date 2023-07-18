import { Controller, Req , Get , Post , Put , Patch } from '@nestjs/common';
import { Request } from 'express';
@Controller("/albums")

export class albumsController {
    
    @Get() 
    r0Handler(@Req() req : Request ) {
          console.log(req.params);
          return  req.params ; 
       }

  @Get("/profile") 
  rHandler(@Req() req : Request ) {
        console.log(req.params);
        return  req.params ; 
     }
  

  @Post("/profile") 
  reqHandler(@Req() req : Request ) {
        console.log(req.params);
        return  req.params ; 
     }
  
  @Put("/profile") 
  req2Handler(@Req() req : Request ) {
        console.log(req.params);
        return  req.params ; 
     }
  
  @Patch("/profile") 
  req3Handler(@Req() req : Request ) {
        console.log(req.params);
        return  req.params ; 
     }
  
}