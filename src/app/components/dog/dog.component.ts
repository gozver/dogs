import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Dog } from '../../models/dog';

import { Globals } from '../../globals/globals'
import { DogService} from "../../services/dog.service";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  dogForm: FormGroup = new FormGroup({
    breed: new FormControl(),
    images: new FormControl()
  });

  constructor(
    public globals: Globals,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    this.dogService.loadDogsBreeds().subscribe(response => {
      this.globals.breedsList = Object.keys(response.message);

      console.log('---> Breeds List: ')
      console.log(this.globals.breedsList);
    });
  }

  // Getter for easy access to form fields
  get dfc() {
    return this.dogForm.controls;
  }

  loadDogImages(): void {
    console.log(`---> Selected breed: ${this.dfc.breed.value}`);
    this.globals.breed = this.dfc.breed.value;

    this.dogService.loadDogsImages().subscribe(response => {
      this.globals.imagesList = response.message;

      console.log('---> Images List: ')
      console.log(response.message)
    });
  }
}
