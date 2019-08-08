import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Ju', telephone: '0934868898',imageUrl: 'assets/imgs/JPG1.jpg'},
                  {name: 'Tim', telephone: '0936681712',imageUrl: 'assets/imgs/JPG2.jpg'},
                  {name: 'ma', telephone: '0897455689',imageUrl: 'assets/imgs/JPG3.jpg'},
                  {name: 'ma', telephone: '0897455689',imageUrl: 'assets/imgs/JPG4.jpg'},
                  {name: 'ma', telephone: '0897455689',imageUrl: 'assets/imgs/JPG5.jpg'},
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhonebookDetailPage",item);
  }
  
}//n
