import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	model:any = {
		username:'',
		password:''
	}
	 error =false;
	 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
	proses(){
		if((this.model.username=='dewa')&&(this.model.password=='dewa')){
			this.navCtrl.push(TabsPage);
			}	
		else{
			this.reset();
			this.error = true;
		}
  }
  
  reset(){
	  this.model.username = '';
	  this.model.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }

}

