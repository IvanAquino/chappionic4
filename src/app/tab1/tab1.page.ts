import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private chatList: Array<any> = [
    {
      user: { name: 'John Doe', avatar: 'https://ui-avatars.com/api/?name=John+Doe' },
      message: { snippet: 'See you later', created: '09:00 AM' }
    },
    {
      user: { name: 'Dave', avatar: 'https://ui-avatars.com/api/?name=Dave' },
      message: { snippet: "I'm comming", created: '13:40 PM' }
    },
    {
      user: { name: 'Foo', avatar: 'https://ui-avatars.com/api/?name=Foo' },
      message: { snippet: 'Here is raining', created: '14:00 PM' }
    },
    {
      user: { name: 'Bar', avatar: 'https://ui-avatars.com/api/?name=Bar' },
      message: { snippet: 'idk', created: '14:00 PM' }
    }
  ];

  constructor(
    private navCtrl: NavController
  ) {}

  private showConversationPage ()
  {
    this.navCtrl.navigateForward('conversation')
  }

}
