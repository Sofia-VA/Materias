import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { ComunicacionPage } from '../comunicacion/comunicacion';
import { CalPage } from '../cal/cal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  dibujo=DibujoPage;
  com=ComunicacionPage;
  cal=CalPage;

  constructor(public navCtrl: NavController) {


  }
  clickHistoria()
  {
    this.navCtrl.push(this.historia);
  }
  clickDibujo()
  {
    this.navCtrl.push(this.dibujo);
  }
  clickComunicacion()
  {
    this.navCtrl.push(this.com);
  }
  clickCalculo()
  {
    this.navCtrl.push(this.cal);
  }


}
