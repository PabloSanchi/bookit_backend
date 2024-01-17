import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PromptCommand {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    prompt: string;
}
