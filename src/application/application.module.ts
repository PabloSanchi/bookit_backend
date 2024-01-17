import { Module } from '@nestjs/common';
import { GenerativeService } from './services/GenerativeService';
import { IGenerativeAI } from './ports/IGenerativeAI';
import { GenerativeAIOpenAI } from 'src/infrastructure/adapters/secondary/GenerativeAIOpenAI';
import { GenerativeAIController } from 'src/infrastructure/adapters/primary/GenerativeAIController';

@Module({
    imports: [],
    controllers: [
        GenerativeAIController
    ],
    providers: [
        GenerativeService,
        {
            provide: IGenerativeAI,
            useClass: GenerativeAIOpenAI
        }
    ],
})
export class ApplicationModule {}
