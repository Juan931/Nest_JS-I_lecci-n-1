import { Controller,Get,Post,Put,Delete,HttpStatus,Res, HttpCode } from '@nestjs/common';
import { Response, } from 'express';

@Controller('crud')
export class CrudController {
   
    @Get()
    getCrud(@Res() response:Response):Response{
      return response.status(HttpStatus.OK, ).send({//CODE 200
          name:"get"
      })
    }
    
    @Post()
    postCrud(@Res() response:Response):Response{
        return response.status(HttpStatus.ACCEPTED).send({//CODE 202
            name:"post"
        })
      }
    
    @Put()
    putCrud(@Res() response:Response):Response{
        return response.status(HttpStatus.CONFLICT).send({//CODE 409
            name:"put"
        })
      }  

    @Delete()
    deleteCrud(@Res() response:Response):Response{
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({//CODE 500
            name:"delete"
        })
      }    

}
