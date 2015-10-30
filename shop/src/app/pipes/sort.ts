import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {
    transform(data: Array<any>, [property, reversed]): Array<any> {
        const sorted = data.map(v => v) // clone
            .sort((a, b) => {
                if(a[property] > b[property]) return 1;
                if(a[property] == b[property]) return 0;
                return -1;
            });
        if(reversed) sorted.reverse();

        return sorted;
    }
}
