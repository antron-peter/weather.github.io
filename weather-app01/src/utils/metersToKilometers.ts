export function metersToKilometers(visibilityInMeters:number):string{
    const visibilityInKiloMeters = visibilityInMeters / 1000;
    return `${visibilityInKiloMeters.toFixed(0)}km`
}