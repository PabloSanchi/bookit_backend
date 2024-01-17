import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IGenerativeAI } from 'src/application/ports/IGenerativeAI';
import OpenAI from 'openai';
import { Filter } from 'src/domain/Filter';
import { plainToClass } from 'class-transformer';



@Injectable()
export class GenerativeAIOpenAI implements IGenerativeAI {
    
    private openai: OpenAI;

    constructor(
        @Inject(ConfigService) private readonly configService: ConfigService,
    ) {
        this.openai = new OpenAI({
            apiKey: configService.get<string>('OPENAI_API_KEY'),
        });
    }

    async generate(prompt: string): Promise<Filter> {
        
        const metadata = this.getMetadata();

        const completion = await this.openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant designed to output JSON. You have to provide a json extracting the following entities (city, begin date, end date, number of people, price, rooms) so it looks something like the following { city: ..., "begin_date": ..., "end_date": ..., "number_of_people": ..., "price":  ..., "rooms": ... }. If you do not know the ansert set the field to null',
                },
                { 
                    role: 'user',
                    content: prompt + `, metadata: todays date is ${metadata.date} and it is ${metadata.dayOfWeek}`
                }
            ],
            model: 'gpt-3.5-turbo-1106',
            response_format: { type: 'json_object' },
        });

        const json = JSON.parse(completion.choices[0].message.content);

        return plainToClass(Filter, json);
    }

    private getMetadata() {
        
        const date = new Date();
        
        return {
            date: date.toISOString(),
            dayOfWeek: date.toLocaleString('en-us', {  weekday: 'long' }) 
        }
    }
}
