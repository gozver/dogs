import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Globals } from '../_globals/globals';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(
    private http: HttpClient,
    private globals: Globals,
    private messageService: MessageService
  ) { }

  loadBreedsList(): Observable<{ message: [], status: string }> {
    console.log('--<> Running loadBreedsList service');

    return this.http.get<{ message: [], status: string }>(`${this.globals.apiUrl}s/list/all`, {}).pipe(
      tap((data) => {
        console.log('--<> Dogs obtained from loadBreedsList: '); // + JSON.stringify(Object.keys(data.message)));
        this.globals.breedsList = Object.keys(data.message);
        console.log(this.globals.breedsList);
      }),
      catchError(this.handleError<{ message: [], status: string }>('loadBreedsList', { message: [], status: status }))
    );
  }

  loadImagesList(): Observable<{ message: [], status: string }> {
    console.log('--<> Running loadImagesList service');

    return this.http.get<{ message: [], status: string }>(`${this.globals.apiUrl}/${this.globals.breed}/images`, {}).pipe(
      tap((data) => {
        console.log('--<> Dogs obtained from loadImagesList: '); // + JSON.stringify(data))),
        this.globals.imagesList = data.message;
        console.log(this.globals.imagesList);
      }),
      catchError(this.handleError<{ message: [], status: string }>('loadImagesList', { message: [], status: status }))
    );
  }

  // Log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // Handle a Http operation that failed.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
