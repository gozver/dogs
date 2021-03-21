import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DogService } from '../../_services/dog.service';

@Injectable()
export class DogEffects {

  loadBreedsList$ = createEffect(() => this.actions$.pipe(
    ofType('[Dog] Load Breeds'),
    mergeMap(() => this.dogService.loadBreedsList()
      .pipe(
        map(breeds => ({ type: '[Dog] Load Breeds Success', payload: Object.keys(breeds.message) })),
        catchError(() => of({ type: '[Dog] Load Breeds Error' }))
      ))
    )
  );

  loadImagesList$ = createEffect(() => this.actions$.pipe(
    ofType('[Dog] Load Images List'),
    mergeMap(() => this.dogService.loadImagesList()
      .pipe(
        map(images => ({ type: '[Dog] Load Images List Success', payload: Object.keys(images.message) })),
        catchError(() => of({ type: '[Dog] Load Images List Error' }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dogService: DogService
  ) { }
}
