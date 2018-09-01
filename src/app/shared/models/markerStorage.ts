/// <reference path="C:/Users/Dude/tour-logistic/node_modules/@types/googlemaps/index.d.ts" />
// import { } from '@types/googlemaps';
import { Marker } from './marker'


export class MarkerStorage {   
    markers: Marker[] = [];
    pointCounter = 1;
    
    constructor(){
    }

    push(marker: Marker): void{
        if(marker.type !== "inter") this.pointCounter++; 
        this.markers.push(marker);
    }

    removeLast(){
        if (this.last.type !== "inter") this.pointCounter--;
        this.markers.pop().rmGoogleInstance();
    }

    get last(): Marker{
        return this.markers[this.markers.length - 1];
    }

    get penult(): Marker{
        return this.markers[this.markers.length - 2];
    }

    get length(): number{
        return this.markers.length;
    }

    get pointIndex(): number{
        return this.pointCounter;
    }
}