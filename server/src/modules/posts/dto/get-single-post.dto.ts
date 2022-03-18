import { IsNotEmpty, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetSinglePostDto {
  @Min(1, { message: 'ID cannot be negative or zero' })
  @IsInt({ message: 'ID can be integer only' })
  @IsNotEmpty({ message: 'ID is required' })
  @Type(() => Number)
  id: number;
}
