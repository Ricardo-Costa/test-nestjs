import { Body, Controller, Header, HttpCode, Post } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { TheDog } from "./create-dog.dto";
import { ApiBody } from "@nestjs/swagger";

@Controller('dogs')
export class DogsController {
  constructor(readonly dogsService: DogsService) {}

  @Post('new')
  @ApiBody({ type: TheDog })
  @Header('Cache-Control', 'none')
  @HttpCode(201)
  create(@Body() dog: TheDog): TheDog {

    console.log(dog)

    let d = new TheDog(dog.coleira, "Vamp", dog.matricula);

    d.matricula = 123;

    console.log(d.getName())

    console.log(d)

    console.log(this.dogsService.create())

    return d;
  }
}
