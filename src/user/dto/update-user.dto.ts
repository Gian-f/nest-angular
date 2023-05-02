import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ example: 'John Doe', description: 'Nome do usuário' })
    @IsString()
    name?: string;

    @ApiProperty({ example: 'gianfelipe@example.com', description: 'E-mail do usuário' })
    @IsString()
    email?: string;
    
    @ApiProperty({ example: '(11) 99999-9999', description: 'Telefone do usuário' })
    @IsString()
    phone?: string;
  }