import { Injectable } from '@nestjs/common';
import { Dog } from "./dogs.interface";

@Injectable()
export class DogsService {
  create(): string {
    return 'nada aqui.....'
  }
}
