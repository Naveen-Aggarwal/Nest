import { Controller, Req , Get , Post , Put , Patch , Delete , HttpCode , HttpStatus  , Res , 
Header , Param , Query , Headers , Body } from '@nestjs/common';
import { Request , Response } from 'express';
//import { PassThrough } from 'stream';

interface QueryParams {
  age: number ;
  name: string ;
}

@Controller("/users")
export class UsersController {
  
  @Get("/profile") 
  @Header('X-name' , 'NiCk ')
  rHandler(@Req() req : Request  , @Res() res : Response) {
        //console.log(req.params);
        res.status(200);  // highproperty
        res.json({
           parameters : req.params                  // on injecting @res , response will not happen automaticaaly by return , need to use res.json .
        } )
     }
  

  @Post("/profile") 
  @HttpCode(200)
  reqHandler(@Req() req : Request , @Res( { passthrough : true }) res : Response ) {
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
  @Delete("profile")
  @HttpCode(HttpStatus.FOUND)
  req4handler(@Req() req : Request){
    return req.params ;
  }

  @Get('/dynamicRout')
  reHand(){
   const rn = ~~(Math.random()*10+1) 
   if(rn<5) return{
    url : '/user/account',
    statusCode : 302,
   };
   else{
    return {
      url : '/user/wallet',
      statusCode : 302
    };
   }
  }

  @Get('/account')
  redirect(){
    return 'Redirected to ACCOUNT Page';
  }
  @Get('/wallet')
  redirectf(){
    return 'Redirected to WALLET Page';
  }


  //Route paramereter id:

  @Get('/videos/:id')    
  getVideos(@Param() params : Record<string , any> ){
    console.log(params)
    return 'success';
  }

 

  //Query params ?name=naveen
  @Get('/videos')    
  getQuery(@Query() query : QueryParams ){
    console.log(query.age , query.name)
    return 'success';
  }

  //headers extract
  
  @Get('/header')
  getHeader(@Headers() headers : Record<string , any> ){
    console.log(headers);
    return headers;
  }

  //body 
  @Post('/video')
  getBodyData(@Body() body : Record<string , any> ){
    console.log(body);
    return body;
  }
}