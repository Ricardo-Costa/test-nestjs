import { SetMetadata } from '@nestjs/common';

export const Dogs = (...args: string[]) => SetMetadata('dogs', args);
