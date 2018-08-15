import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsapiProvider} from '../../providers/newsapi/newsapi';
import { DisplayPage } from '../display/display';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  title;
  description;
 publishedAt;
 urlToImage;
 url;
 arr = [];



 



 constructor(public navCtrl: NavController, private newsService:NewsapiProvider) {
   
   this.newsService.getnews('').then((data:any)=>{
     console.log(data)

     this.title=data.articles[1].title;
     this.description=data.articles[1].description;
     this.urlToImage=data.articles[1].urlToImage;
     this.publishedAt=data.articles[1].publishedAt;
     

     for(var i = 2 ; i < 1000 ; i++){
       if (data.articles[i] != null)
       this.arr.push(data.articles[i] );
       
     }

   })
  }
  
  more(i){
   
    this.navCtrl.push(DisplayPage, {pr:i});
  }
}
 
   





