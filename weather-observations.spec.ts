import { WheaterObservation } from "./weather-observations";


import {WeatherObservationsService} from "./weather-observations"
describe('weather elements list', ()=> {
it ("list of weather observations", () => {
const service = new WeatherObservationsService;
const mockObservation= [{id: "id", name : "name "} as WheaterObservation
    
];
const findSpy = jest.spyOn(service, 'find').mockReturnValueOnce(mockObservation)
const observations = service.find()

expect(findSpy).toHaveReturned()

expect(observations[0].id).toEqual(mockObservation[0].id);

})
})
//id,name,date,time,temperature,pressure,wind_direction (opcional)
