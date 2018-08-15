import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsapiProvider } from '../../providers/newsapi/newsapi';
import{DisplayPage} from '../display/display';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  selCategory = this.navParams.get("category");

  arr = [];
  img;
  dt;
  text;
  date;

  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService:NewsapiProvider) {
    this.newsService.getnews(this.selCategory).then((data: any) => {

      console.log(data);
      this.dt = data.articles;

      this.img = this.dt[1].urlToImage;
      this.text = this.dt[1].title;
      this.date = this.dt[1].publishedAt;
      for (var i = 2; i < 20; i++) {
        this.arr.push(data.articles[i]);


        //this.arry[i]=data.articles[i];

      }

  });
  }
  show(i){
    this.navCtrl.push(DisplayPage, {pr:i});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

}
