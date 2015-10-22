import {Pipe} from 'angular2/angular2';

@Pipe({
    name: 'arrayFromEnum'
})
export class EnumPipe {
    transform(value) {
        return Object.keys(value)
            .map(Number)
            .filter((v) => !isNaN(v))
            .map((v) => value[v]);
    }
}