import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

/**
 * What does this pipe do?
 * 
 * It sorts an array of objects based on any property or even used to sort a one dimensional array
 * it first checks if we do have an array, a column/property on basis of which we need to sort & 
 * if we do have a sorting order in case if we do not want to sort anything.
 * another check is to just verify if we have more than one object, otherwise there’s no reason to sort a single object/data.
 * the orderBy function which takes 3 arguments; (list, column/property, order of sorting)
 * updated : included a check to verify if it is a 1d array or multi dimensional array & perform sort.
 */

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

    transform(value: any[], order: any, column: string = ''): any[] {
        // Empty Array
        if (!value || order === '' || !order) { return value; }

        // Array with 1 item
        if (value.length <= 1) { return value; }

        // If Array of string or numbers, not object
        if (!column || column === '') {
            if (order === 'asc') { return value.sort() }
            else { return value.sort().reverse(); }
        }

        return orderBy(value, [column], [order]);
    }
}