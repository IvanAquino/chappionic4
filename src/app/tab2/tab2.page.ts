import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private contactsList: Array<any> = [
    { name: 'Bar', avatar: 'https://ui-avatars.com/api/?name=Bar', status: 'Idk' },
    { name: 'Dave', avatar: 'https://ui-avatars.com/api/?name=Dave', status: 'Life is good' },
    { name: 'Foo', avatar: 'https://ui-avatars.com/api/?name=Foo', status: 'Doing anything :D' },
    { name: 'John Doe', avatar: 'https://ui-avatars.com/api/?name=John+Doe', status: 'Nothing' },
  ];

  constructor(
    private navCtrl: NavController
  ) {}

  private showConversationPage() {
    this.navCtrl.navigateForward('conversation')
  }

}
