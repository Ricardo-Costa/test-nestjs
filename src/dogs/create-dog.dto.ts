import { Dog } from "./dogs.interface";
import { ApiProperty } from "@nestjs/swagger";

export class TheDog implements Dog {

  @ApiProperty()
  public coleira: string

  @ApiProperty()
  private name: string

  @ApiProperty() public matricula: number

  // coleira: string;
  // private name: string;
  // matricula: number;
  #cod: number;

  constructor(coleira: string, name: string, matricula: number) {}

  getName(): string {
    this.name = 'Peteca';
    this.matricula = 123;
    return this.name +' '+ this.coleira;
  }
}