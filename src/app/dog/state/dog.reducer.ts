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
  error: ''
};

const _dogReducer = createReducer(
  initialState,
  on(DogActions.setCurrentBreed,       (state, { breed })  => ({ ...state, breed: breed })),
  on(DogActions.loadBreedsListSuccess, (state, { breeds }) => ({ ...state, breedsList: breeds })),
  on(DogActions.loadBreedsListFail,    (state, { error })  => ({ ...state, error: error })),
  on(DogActions.loadImagesListSuccess, (state, { images }) => ({ ...state, imagesList: images })),
  on(DogActions.loadImagesListFail,    (state, { error })  => ({ ...state, error: error })),
);

export function dogReducer(state = initialState, action: Action): DogState {
  return _dogReducer(state, action);
}
