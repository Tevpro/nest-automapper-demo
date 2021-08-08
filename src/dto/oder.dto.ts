import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @ApiProperty({ example: 'topo chico' })
  drink: string;
  @ApiProperty({
    example: [
      'beef flour pepper jack jalapenos',
      'carnitas blue corn queso blanco',
      'corn brussels sprout',
    ],
  })
  taco: string[];
  notes: string;
}
