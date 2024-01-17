import { Inject } from '@nestjs/common';
import { IGenerativeAI } from '../ports/IGenerativeAI';
import { Filter } from 'src/domain/Filter';

export class GenerativeService {
    constructor(
        @Inject(IGenerativeAI)
        private readonly generativeRepository: IGenerativeAI,
    ) {}

    async generate(prompt: string): Promise<Filter> {
        return await this.generativeRepository.generate(prompt);
    }
}
