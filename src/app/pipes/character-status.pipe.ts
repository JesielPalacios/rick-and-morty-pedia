import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterStatusIcon',
})
export class CharacterStatusIconPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Alive':
        return 'status-indicator alive';
      case 'Dead':
        return 'status-indicator dead';
      case 'unknown':
        return 'status-indicator unknown';
      default:
        return 'status-indicator unknown';
    }
  }
}

@Pipe({
  name: 'characterStatus',
})
export class CharacterStatusPipe implements PipeTransform {
  transform(statusText: string, gender: string): string {
    switch (statusText) {
      case 'Alive':
        if (gender === 'Male') {
          return 'Vivo';
        } else if (gender === 'Female') {
          return 'Viva';
        } else {
          return 'Estado desconocido';
        }
      case 'Dead':
        if (gender === 'Male') {
          return 'Muerto';
        } else if (gender === 'Female') {
          return 'Muerta';
        } else {
          return 'Estado desconocido';
        }
      case 'unknown':
        if (gender === 'Male') {
          return 'Estado desconocido';
        } else if (gender === 'Female') {
          return 'Estado desconocido';
        } else {
          return 'Estado desconocido';
        }
      default:
        return 'Estado desconocido';
    }
  }
}

@Pipe({
  name: 'characterSpecie',
})
export class CharacterSpeciesPipe implements PipeTransform {
  transform(specie: string, gender: string): string {
    switch (specie) {
      case 'Human':
        if (gender === 'Male') {
          return 'Humano👨🏾';
        }
        return 'Humana👩🏾';

      case 'Humanoid':
        return 'Humanoide🐱‍🏍';

      case 'Poopybutthole':
        return 'Culo lleno de caca💩';

      case 'Mythological Creature':
        return 'Criatura mitologica💫';

      case 'Disease':
        if (gender === 'Male') {
          return 'Enfermedad🧟🏾‍♂️';
        }
        return 'Enfermedad🧟🏾‍♀️';

      default:
        return specie + '🙊';
    }
  }
}

@Pipe({
  name: 'characterLocation',
})
export class CharacterLocationPipe implements PipeTransform {
  transform(location: string): string {
    if (location.toLowerCase() === 'unknown') {
      return 'Desconocida🤷🏾‍♂️';
    } else {
      return location;
    }
  }
}

@Pipe({
  name: 'characterGender',
})
export class CharacterGenderPipe implements PipeTransform {
  transform(gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Masculino🤴🏾';
    } else if (gender.toLowerCase() === 'female') {
      return 'Femenino👸🏾';
    }
    return 'Desconocido🤷🏾‍♂️';
  }
}

@Pipe({
  name: 'characterEpisodes',
})
export class CharacterEpisodesPipe implements PipeTransform {
  transform(episodes: any): [] {
    if (episodes.slice(-2).indexOf('/') != -1) {
      return episodes.slice(-1);
    }

    return episodes.slice(-2);
  }
}
