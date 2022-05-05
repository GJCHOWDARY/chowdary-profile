import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    year: string;
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {
        this.year=this.diff_year_month_day()
     }

    diff_year_month_day() {
        let dt1 = new Date('08/01/2016');
        let dt2 = new Date();
        console.log(dt1, dt2)
        var time = (dt2.getTime() - dt1.getTime()) / 1000;
        var year = Math.abs(Math.round((time / (60 * 60 * 24)) / 365.25));
        var month = Math.abs(Math.round(time / (60 * 60 * 24 * 7 * 4)));
        var days = Math.abs(Math.round(time / (3600 * 24)));
        console.log("Year :- " + year + " Month :- " + month + " Days :-" + days)
        return year.toString();
    }
}
