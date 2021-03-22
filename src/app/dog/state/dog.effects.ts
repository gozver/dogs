import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { DogService } from '../../_services/dog.service';

@Injectable()
export class DogEffects {

  loadBreedsList$ = createEffect(() => this.actions$.pipe(
    ofType('[DOG] LOAD_BREEDS_LIST'),
    mergeMap(() => this.dogService.loadBreedsList()
      .pipe(
        map(breeds => ({ type: '[DOG] LOAD_BREEDS_LIST_SUCCESS', breeds: Object.keys(breeds.message) })),
        catchError((err) => {
          console.log(err.status)
          return [({ type: '[DOG] LOAD_IMAGES_LIST_FAIL' })]
        })
      ))
    )
  );

  loadImagesList$ = createEffect(() => this.actions$.pipe(
    ofType('[DOG] LOAD_IMAGES_LIST'),
    mergeMap(({ breed }) => this.dogService.loadImagesList(breed)
      .pipe(
        map((images) => ({ type: '[DOG] LOAD_IMAGES_LIST_SUCCESS', images: images.message })),
        catchError((err) => {
          console.log(err.status)
          return [({ type: '[DOG] LOAD_IMAGES_LIST_FAIL' })]
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dogService: DogService
  ) { }
}
