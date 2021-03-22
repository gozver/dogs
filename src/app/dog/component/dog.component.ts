import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";

import { AppState } from "../../app.state";
import { DogService } from "../../_services/dog.service";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  dogForm: FormGroup = new FormGroup({
    breed: new FormControl(),
    breedsList: new FormControl(),
    imagesList: new FormControl()
  });

  $breedsList = this.dogStore.select(state => state.dog.breedsList); //.pipe(tap(breedsList => console.log(breedsList)));
  $imagesList = this.dogStore.select(state => state.dog.imagesList); //.pipe(tap(imagesList => console.log(imagesList)));

  constructor(
    private dogService: DogService,
    private dogStore: Store<AppState>
  ) { }

  ngOnInit() {
    this.dogStore.dispatch({ type: '[DOG] LOAD_BREEDS_LIST' });
  }

  // Getter for easy access to dogForm fields
  get df() {
    return this.dogForm.controls;
  }

  loadImagesList(): void {
    this.dogStore.dispatch({ type: '[DOG] SET_CURRENT_BREED', breed: this.df.breed.value });
    this.dogStore.dispatch({ type: '[DOG] LOAD_IMAGES_LIST', breed: this.df.breed.value });
  }
}
