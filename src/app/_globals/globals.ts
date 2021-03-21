import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  breed: string = '';
  breedsList: string[] = [];
  imagesList: string[] = [];

  apiUrl: string = 'https://dog.ceo/api/breed';

}
