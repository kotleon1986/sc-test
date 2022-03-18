import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchForm!: FormGroup
  public name = new FormControl('', Validators.required);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
  }

  onSubmit() {
    console.log(this.name.value);
  }
}
