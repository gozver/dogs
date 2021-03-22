import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import { DogService } from '../../_services/dog.service';
import { TranslateService } from "@ngx-translate/core";

import Swal from "sweetalert2";

@Injectable()
export class DogEffects {

  loadBreedsList$ = createEffect(() => this.actions$.pipe(
    ofType('[DOG] LOAD_BREEDS_LIST'),
    mergeMap(() => this.dogService.loadBreedsList()
      .pipe(
        map(breeds => ({ type: '[DOG] LOAD_BREEDS_LIST_SUCCESS', breeds: Object.keys(breeds.message) })),
        catchError((err) => {
          this.showPopup(err);
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
          this.showPopup(err);
          return [({ type: '[DOG] LOAD_IMAGES_LIST_FAIL' })]
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dogService: DogService,
    private translate: TranslateService
  ) {
  }

  showPopup(err: any) {
    this.translate.get('t.popup').subscribe((translation: any)=> {
      Swal.fire({ icon: 'error', title: `Error ${err.status}`, text: translation});
    });
  }
}
