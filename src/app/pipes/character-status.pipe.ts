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
    if (location === 'unknown') {
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
    if (gender === 'Male') {
      return 'Masculino ♂️';
    } else if (gender === 'Female') {
      return 'Femenino ♀️';
    }
    return 'Desconocido🤷🏾‍♂️';
  }
}

function getIdFromUrl(url: string): any {
  if (url.slice(-2).indexOf('/') != -1) {
    return url.slice(-1);
  } else {
    return url.slice(-2);
  }
}

@Pipe({
  name: 'characterEpisodes',
})
export class CharacterEpisodesPipe implements PipeTransform {
  transform(episode: any, key: string, episodeId: any): any {
    let _episodeId;

    _episodeId = getIdFromUrl(episodeId);

    function transformData(episode: any) {
      switch (key) {
        case 'id':
          return episode.id;
        case 'name':
          return episode.name;

        default:
          episode.name;
      }
    }

    if (episode.length) {
      return transformData(episode[_episodeId - 1]);
    } else {
      return transformData(episode);
    }
  }
}

@Pipe({
  name: 'characterLastEpisode',
})
export class CharacterLastEpisodePipe implements PipeTransform {
  transform(episode: any, key: string): any {
    let _episode;

    function transformData(episode: any) {
      switch (key) {
        case 'id':
          return episode.id;
        case 'name':
          return episode.name;

        default:
          episode.name;
      }
    }

    if (episode.length) {
      _episode = episode[episode.length - 1];
      return transformData(_episode);
    } else {
      return transformData(episode);
    }
  }
}

@Pipe({
  name: 'characterLocationUrl',
})
export class CharacterLocationUrlPipe implements PipeTransform {
  transform(location: any, key?: any): any {
    if (location) {
      return 'ubicacion/' + getIdFromUrl(location);
    } else if (key === true) {
      return 'personaje/' + getIdFromUrl(location);
    } else {
      return 'personajes';
    }
  }
  // transform(location: any, key?: any): any {
  //   for (let i = 0; i < location.length; i++) {
  //     const element = location[i];
  //   }

  //   if (location.slice(-3).indexOf('/') != -1) {
  //     return location.slice(-3).replace('/', '').replace('r', '');
  //   } else {
  //     return location.slice(-3);
  //   }
  //   return location;
  // }
}
