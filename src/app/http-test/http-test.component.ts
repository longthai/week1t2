import { HttpModule, Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  private mod: String;
  constructor(private http: Http) { }

  getJson() {
    this.http.get('tsconfig.json').
    subscribe(
      (res:Response) => {
        const json = res.json();
        console.log(json);
        this.mod = JSON.stringify(json);
      }
    );  
  }

  getJsonfromAPI() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').
    subscribe(
      (res:Response) => {
        const json = res.json();
        console.log(json);
        this.mod = json;
      }
    );  
  }
 
  ngOnInit() {
    this.getJsonfromAPI();
  }

}
