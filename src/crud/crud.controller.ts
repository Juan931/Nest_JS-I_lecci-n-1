import { Controller,Get,Post,Put,Delete,HttpStatus,Res, HttpCode } from '@nestjs/common';
import { Response, response } from 'express';

@Controller('crud')
export class CrudController {
   
    @Get()
    getCrud(@Res() response:Response):Response{
      return response.status(200).send({
          name:"get"
      })
    }
    
    @Post()
    postCrud(@Res() response:Response):Response{
        return response.status(200).send({
            name:"post"
        })
      }
    
    @Put()
    putCrud(@Res() response:Response):Response{
        return response.status(200).send({
            name:"put"
        })
      }  

    @Delete()
    deleteCrud(@Res() response:Response):Response{
        return response.status(200).send({
            name:"delete"
        })
      }    

}



