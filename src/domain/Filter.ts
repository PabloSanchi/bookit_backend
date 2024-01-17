import { Expose } from 'class-transformer';

class Filter {
    city: string;

    @Expose({ name: 'begin_date' })
    beginDate: string;

    @Expose({ name: 'end_date' })
    endDate: string;

    price: number;
    rooms: number;
}

export { Filter }