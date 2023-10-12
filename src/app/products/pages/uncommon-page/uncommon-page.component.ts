import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'David';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // i18mPlural
  public clients: string[] = ['Maria','Pedro', 'Fernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperado.',
    '=2': 'tenemos 2 personas esperado.',
    'other': 'tenemos # clientes esperando.'
  }

  // keyValue Pipe
  public person = {
    name: 'David',
    age: 36,
    address: 'Madrid, España'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa')
    }, 3500)
  })

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  deleteClient():void{
    this.clients.pop();
  }



}
