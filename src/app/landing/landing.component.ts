import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  hi = 'welcome';
  constructor(private http: HttpClient) { }
  user = {};

  ngOnInit() {
  }
}
