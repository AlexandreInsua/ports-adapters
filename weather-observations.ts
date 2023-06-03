export class WheaterObservation {
    private _id:string;
    private _name: string
    constructor(id:string, name: string){
        this._id= id;
        this._name = name
    }
    get id():string{
        return this._id;
    }
    get name(): string {
        return this._name
    }
}

export class WeatherObservationsService{

    find():WheaterObservation[]{

        return [new WheaterObservation("id", "name")];
    }
}

export class WeatherObservationsServiceTest implements WeatherObservationsServiceInterface{

    find():WheaterObservation[]{

        return [new WheaterObservation("id", "name")];
    }
}

export interface WeatherObservationsServiceInterface{

    find():WheaterObservation[];
}