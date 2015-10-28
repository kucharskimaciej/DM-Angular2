import {Pipe} from 'angular2/angular2';

@Pipe({
    name: 'arrayFromEnum',
    pure: false /* TODO: read up on pipe purity - should this be inpure? */

})
export class EnumPipe {
    transform(data) {
        return Object.keys(data)
            .map(Number)
            .filter((v) => !isNaN(v))
            .map((v) => data[v]);
    }
}