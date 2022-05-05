import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';

declare var Chart: any ;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
  data1={};
  data =[];
  labels=[];

  canvas: any;
  ctx: any;
  limit=15;
  constructor(private http: HttpClient ) { }
  getData(){
    this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit='+this.limit)
    .subscribe(data => {this.data1=data;
      console.log(this.data1)
      for (var i in this.data1) {
        this.labels[i]=this.data1[i].name;
        this.data[i] = this.data1[i].price_usd;
        this.ngAfterViewInit();
        //console.log(this.data,this.labels)
      }
    })
  }
  ngOnInit() {
    this.getData();
  //  this.ngAfterViewInit();
    setInterval(() => {
      this.getData();
        this.ngAfterViewInit();
    }, 300000);
  }
  ngAfterViewInit() {
    console.log(this.data,this.labels)
      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: this.labels,
            datasets: [{
                label: this.labels,
                data: this.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 100, 132, 1)',
                    'rgba(255, 150, 132, 1)',
                    'rgba(255, 170, 132, 1)',
                    'rgba(255, 205, 132, 1)',
                    'rgba(255, 177, 132, 1)',
                    'rgba(255, 220, 86, 1)',
                    'rgba(255, 233, 132, 1)',
                    'rgba(255, 230, 86, 1)',
                    'rgba(255, 246, 132, 1)',
                    'rgba(255, 140, 86, 1)',
                    'rgba(255, 50, 86, 1)',
                    'rgba(255, 45, 86, 1)'
                ],
                borderWidth: 0.6
            }]
        },
        options: {
          responsive: true,
          display:false
        }
      });
    }
}
