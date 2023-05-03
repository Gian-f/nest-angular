import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'O nome do usuário',
  })

  @IsString()
  name: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'O email do usuário',
  })

  @IsEmail()
  email: string;


  @ApiProperty({
    example: '(11) 99999-9999',
    description: 'O número de telefone do usuário',
  })

  @IsString()
  phone: string;
}
