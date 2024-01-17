import { Filter } from "src/domain/Filter";

export interface IGenerativeAI {
    generate(prompt: string): Promise<Filter>;
}

export const IGenerativeAI = Symbol('IGenerativeAI');
