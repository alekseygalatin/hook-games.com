import { Component, OnInit } from '@angular/core';
declare function OnReady(): any;

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor() {}

  ngOnInit(){
    OnReady();
  }
}
