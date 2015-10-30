import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(data:Array<any>, [predicate]):Array<any> {
        return data.filter(t => {
            return JSON.stringify(t).toLowerCase().indexOf(predicate) !== -1;
        });
    }
}
