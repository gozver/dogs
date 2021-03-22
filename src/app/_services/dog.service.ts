import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Globals } from '../_globals/globals';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(
    private http: HttpClient,
    private globals: Globals,
  ) { }

  loadBreedsList(): Observable<{ message: [], status: string }> {
    return this.http.get<{ message: [], status: string }>(`${this.globals.apiUrl}s/list/all`, {});
  }

  loadImagesList(breed: string): Observable<{ message: [], status: string }> {
    return this.http.get<{ message: [], status: string }>(`${this.globals.apiUrl}/${breed}/images1`, {});
  }
}
