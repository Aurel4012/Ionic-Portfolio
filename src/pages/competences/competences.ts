import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-competences',
  templateUrl: 'competences.html'
})
export class CompetencesPage {

	private data = '';

  constructor(public navCtrl: NavController,public http: Http) {
  	http.get('http://portfolio.digitalstrategie.fr/api/skill?api_token=xxxx')
      .subscribe(data => { this.data = data.json()});
  }

}
