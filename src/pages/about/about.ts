import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { NewsapiProvider} from '../../providers/newsapi/newsapi';
import { CategoryPage } from '../category/category';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService:NewsapiProvider) {
    
}

Category(Category){

  this.navCtrl.push(CategoryPage, {Category: Category})
}

}
