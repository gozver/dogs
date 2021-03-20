import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Globals } from '../globals/globals';
import { MessageService } from './message.service';

import { Dog } from '../models/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(
    private http: HttpClient,
    private globals: Globals,
    private messageService: MessageService
  ) { }

  loadDogsBreeds(): Observable<{ message: [], status: string }> {
    console.log('--<> Running loadDogsBreeds service');

    return this.http.get<{ message: [], status: string }>(`${this.globals.apiUrl}s/list/all`, {}).pipe(
      tap(data => console.log('--<> Dogs obtained from loadDogsBreeds')), // : ' + JSON.stringify(data))),
      catchError(this.handleError<{ message: [], status: string }>('loadDogsBreeds', { message: [], status: status }))
    );
  }


  loadDogsImages(): Observable<{ message: [], status: string }> {
    console.log('--<> Running loadDogsImages service');

    return this.http.get<{ message: [], status: string }>(`${this.globals.apiUrl}/${this.globals.breed}/images`, {}).pipe(
      tap(data => console.log('--<> Dogs obtained from loadDogsImages')), // : ' + JSON.stringify(data))),
      catchError(this.handleError<{ message: [], status: string }>('loadDogsImages', { message: [], status: status }))
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
