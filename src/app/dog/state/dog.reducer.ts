import { Action, createReducer, on } from '@ngrx/store';
import * as DogActions from './dog.actions';

export const dogFeatureKey = 'dog';

export interface DogState {
  breed: string;
  breedsList: string[];
  imagesList: string[];
  error: string
}

export const initialState: DogState = {
  breed: '',
  breedsList: [],
  imagesList: [],
  error: 'error'
};

const _dogReducer = createReducer(
  initialState,
  on(DogActions.loadBreedsSuccess, (state, { breeds })   => ({ breed: '', breedsList: breeds, imagesList: [], error: '' })),
  on(DogActions.loadBreedsError,   (state, { error })    => ({ breed: '', breedsList: [], imagesList: [], error: error })),

  on(DogActions.loadImagesListSuccess, (state, { images }) => ({ breed: '', breedsList: [], imagesList: images, error: '' })),
  on(DogActions.loadImagesListError,   (state, { error })  => ({ breed: '', breedsList: [], imagesList: [], error: error })),
);

export function dogReducer(state = initialState, action: Action): DogState {
  return _dogReducer(state, action);
}
