import { createAction, props } from '@ngrx/store';

export const  setCurrentBreed = createAction(
  '[DOG] SET_CURRENT_BREED', props<{ breed: string }>()
);

export const loadBreedsList = createAction(
  '[DOG] LOAD_BREEDS_LIST'
);

export const loadBreedsListSuccess = createAction(
  '[DOG] LOAD_BREEDS_LIST_SUCCESS', props<{ breeds: string[] }>()
);

export const loadBreedsListFail = createAction(
  '[DOG] LOAD_BREEDS_LIST_FAIL', props<{ error: string }>()
);

export const loadImagesList = createAction(
  '[DOG] LOAD_IMAGES_LIST', props<{ breed: string }>()
);

export const loadImagesListSuccess = createAction(
  '[DOG] LOAD_IMAGES_LIST_SUCCESS', props<{ images: string[] }>()
);

export const loadImagesListFail = createAction(
  '[DOG] LOAD_IMAGES_LIST_FAIL', props<{ error: string }>()
);
