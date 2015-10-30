import {Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';

export class Item {
    public id: number;
    public pictureUrl: string;
    public title: string;
    public artist: string;
    public price: number;
    public tags: string[];
    public album: {
        title: string;
        price: number;
    };

    constructor(options) {
        this.id = options.trackId;
        this.title = options.trackName;
        this.artist = options.artistName;
        this.price = Number(options.trackPrice);
        this.pictureUrl = options.artworkUrl100.replace("100x100", "300x300");
        this.tags = [
            options.primaryGenreName,
            options.trackExplicitness
        ];

        this.album = {
            title: options.collectionName,
            price: Number(options.collectionPrice)
        };
    }
}


@Injectable()
export class DataService {
    items:Array<Item> = [];

    constructor(private http:Http) {
        this.load();
    }

    load() {
        return this.http.get("./data.json").subscribe((result) => {
            return result.json().results.map((data) => {
                return new Item(data);
            }).map((item) => {
                this.items.push(item);
            });
        });
    }
}