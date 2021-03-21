import { createAction, props } from '@ngrx/store';

export const loadBreeds = createAction(
  '[Dog] Load Breeds'
);

export const loadBreedsSuccess = createAction(
  '[Dog] Load Breeds Success', props<{ breeds: string[] }>()
);

export const loadBreedsError = createAction(
  '[Dog] Load Breeds Error', props<{ error: string }>()
);

export const loadImagesList = createAction(
  '[Dog] Load Images List'
);

export const loadImagesListSuccess = createAction(
  '[Dog] Load Images List Success', props<{ images: string[] }>()
);

export const loadImagesListError = createAction(
  '[Dog] Load Breeds Error', props<{ error: string }>()
);
