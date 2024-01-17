import { Expose } from 'class-transformer';

class Filter {
    city: string;

    @Expose({ name: 'begin_date' })
    beginDate: string;

    @Expose({ name: 'end_date' })
    endDate: string;

    @Expose({ name: 'number_of_people' })
    numOfPeople: number;

    price: number;
    rooms: number;
}

export { Filter }