import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NewsapiProvider } from '../../providers/newsapi/newsapi';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Title} from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  titl;
  descrip;
  image;
 date;
 url;


  pr = this.navParams.get('pr');

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService:NewsapiProvider) {
    
   this.newsService.getnews('').then((data:any)=>{    
    var index = this.navParams.get('pr') + 2;
      if (data.articles[index] != null){
      this.titl= data.articles[index].title;
      this.image= data.articles[index].urlToImage; 
      this.descrip=data.articles[index].description; 
      this.date= data.articles[index].publishedAt;
      this.url= data.articles[index].url; 
      
    }

  })
  }




  ionViewDidLoad() {

  }

}
