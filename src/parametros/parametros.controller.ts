import { Controller,Get,Post,Put,Delete,HttpStatus,Res,Query,Logger,Body, } from '@nestjs/common';
import {Response, } from 'express';

@Controller('parametros')
export class ParametrosController {
    @Get()
    getCrud(@Res() response:Response,@Query() query:any ):Response {
        Logger.log(query);
        return response.status(HttpStatus.OK, ).send({//CODE 200
            name:"get",
            query:'EjemploGet1=1&queryEjemploGet2=2&queryEjemploGet3=3 '
        })

    }
    //http://localhost:3000/parametros?queryEjemploGet1=1&queryEjemploGet2=2&queryEjemploGet3=3
    //{"name":"get","query":{"queryEjemploGet1":"1","queryEjemploGet2":"2","queryEjemploGet3":"3"}}

    @Delete()
    deleteCrud(@Res() response:Response,@Query() query:any ):Response {
        
        Logger.log(query);
            return response.status(HttpStatus.OK, ).send({//CODE 200
            name:"delete",
            query:'queryEjemploDelete: 1 '
        })

    }
    //http://localhost:3000/parametros?queryEjemploDelete=1
    //{"name":"Delete","query":{"queryEjemploDelete":"1"}}


    @Post()
    postCrud(@Res() response:Response,@Query() query:any ,@Body() body: JSON):Response {
        
        Logger.log(body);
        return response.status(HttpStatus.CREATED).send({//CODE 202
            name:"post",
            body:{'infoBodyPost':'jsonEnviadoEnElBody'}
        })

    }
         // http://localhost:3000/parametros?queryEjemploPost=1 
        //{ name: “post”, "query":“infoBodyPost”: “jsonEnviadoEnElBody” }

    @Put()
    putCrud(@Res() response:Response,@Query() query:any ,@Body() body: JSON ):Response {
        Logger.log(query);
        return response.status(HttpStatus.CONFLICT).send({//CODE 409
            name:"put",
            query:'queryEjemploPut=1',
            body:{'infoBodyPust':'jsonEnviadoEnElBody'}

        })
       // http://localhost:3000/parametros?queryEjemploPut=1
       // { name: “post”, "query":“queryEjemploPut”: 1, “infoBodyPust”: “jsonEnviadoEnElBody” }. 
    }
    

}

