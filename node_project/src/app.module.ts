import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModelsModule } from './schemas/mongoose-model.module';
import { UserModule } from './user/user.module';

// import { UsersController } from './users.controller';
// import { albumsController } from './albums.controller'
// import { UserController } from './user.controller';
// import { BusersController } from './busers.controller';
// import { BuserService } from './busers.service';]

@Module({
  imports: [ConfigModule.forRoot() , 
    JobsModule, UserModule, MongooseModelsModule ,
   // MongooseModule.forRoot(
     // "mongodb+srv://dev-N:HoGLrRsSDzYUgX2N@cluster0.vv0x4pv.mongodb.net/nest_app?retryWrites=true&w=majority") ,
  
      MongooseModule.forRootAsync({
      imports : [ConfigModule] ,
      useFactory  : (ConfigService:ConfigService) => {
        const username =  ConfigService.get("DATABASE_USER");
        const password =  ConfigService.get("DATABASE_PASSWORD");
        const host=  ConfigService.get("DATABASE_HOST");
        const db =  ConfigService.get("DATABASE_NAME");

        const uri = `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority`;
        return {uri , };  
      } ,
      inject : [ConfigService] 
    })
  ],
  controllers: [  ] ,
  providers: [  ]   
})
export class AppModule {}
