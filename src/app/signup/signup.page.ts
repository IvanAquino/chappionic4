import { Component, OnInit } from '@angular/core';
import { countryCodes } from 'src/common/CountryCodes';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private countries: Array<any> = countryCodes;
  private confirmData: any = { code: '+1' }
  private logoPath = "assets/imgs/chat.png";

  constructor(
    private platform: Platform,
    private navCtrl: NavController
  ) {
    if (!this.platform.is('cordova')) this.logoPath = `/${this.logoPath}`;
  }

  ngOnInit() {
  }

  showEnterCodePage ()
  {
    this.navCtrl.navigateRoot('enter-code')
  }

}
