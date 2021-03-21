import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from "@ngrx/store";

import { DogState } from '../state/dog.reducer';

import { Globals } from '../../_globals/globals'
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

  constructor(
    public globals: Globals,
    private dogService: DogService,
    private dogStore: Store<DogState>
  ) { }

  ngOnInit() {
    if (this.globals.breedsList.length === 0) {
      this.dogStore.dispatch({ type: '[Dog] Load Breeds' });

      // this.dogService.loadBreedsList().subscribe(response => {
      //   this.globals.breedsList = Object.keys(response.message);
      //
      //   console.log('---> Breeds List: ')
      //   console.log(this.globals.breedsList);
      // });
    }
  }

  // Getter for easy access to dogForm fields
  get df() {
    return this.dogForm.controls;
  }

  loadImagesList(): void {
    this.globals.breed = this.df.breed.value;
    console.log(`---> Selected breed: ${this.globals.breed}`);

    this.dogStore.dispatch({ type: '[Dog] Load Images List' });

    // this.dogService.loadImagesList().subscribe(response => {
    //   this.globals.imagesList = response.message;
    //
    //   console.log('---> Images List: ')
    //   console.log(this.globals.imagesList);
    // });
  }
}
