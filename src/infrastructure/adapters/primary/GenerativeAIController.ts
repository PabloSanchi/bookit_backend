import { Body, Controller, Inject, Post } from '@nestjs/common';
import { GenerativeService } from 'src/application/services/GenerativeService';
import { PromptCommand } from './command/PromptCommand';
import { Filter } from 'src/domain/Filter';

@Controller('/llm')
export class GenerativeAIController {
    
    constructor(
        @Inject(GenerativeService)
        private readonly generativeService: GenerativeService
    ) {}
    
    @Post('/filters')
    async generate(@Body() promptCommand: PromptCommand ): Promise<Filter> {
        return await this.generativeService.generate(promptCommand.prompt);
    }
}
