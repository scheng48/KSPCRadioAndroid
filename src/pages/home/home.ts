import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as spinitron from 'spinitron-spinpapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  spinitron: any;

  constructor(public navCtrl: NavController) {

    this.spinitron = spinitron({
                    station: 'kspc',
                    userid: '6e5b1d00740645d0',
                    secret: '95a94f369975cfe9'
    });

    // this.request = this.spinitron.generateRequest('getCurrentPlaylist');
  }

}
