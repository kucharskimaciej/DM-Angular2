import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(data:Array<any>, [predicate]):Array<any> {
        const needle = predicate.toLowerCase();

        return data.filter(stack => {
            return JSON.stringify(stack).toLowerCase().indexOf(needle) !== -1;
        });
    }
}
