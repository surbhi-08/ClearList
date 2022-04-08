import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl, } from '@angular/forms';

@Component({
  selector: 'app-biomoneta-form',
  templateUrl: './biomoneta-form.component.html',
  styleUrls: ['./biomoneta-form.component.css']
})
export class BiomonetaFormComponent implements OnInit {

  forms:FormGroup;

  constructor(private formBuilder: FormBuilder){ }

  ngOnInit() {
    this.forms = this.formBuilder.group({
    
      ScenarioName : [],
      PreMoney : [],
      NewInvestment : [],
      InvestorName : [],
      InvestmentAmount : [],
      PostMoney: []


  
    });
  }

  submitForm() {
    console.log('Form Submitted with value: ', this.forms.value);
  }

}
