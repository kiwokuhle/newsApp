import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsapiProvider {

  constructor(public http: HttpClient) {
    
    console.log('Hello NewsapiProvider Provider');
    
  }
  getnews(Category){
    let apikey = 'https://newsapi.org/v2/top-headlines?country=us&category'+Category+'=&apiKey=9d84d31505c14dcbb54b844b35d30afd' ;
   
 
    return new Promise ((resolve, reject) => {
     this.http.get(apikey ).subscribe(data =>{
        resolve(data);
     })
   
   
  });

  }
  

}
