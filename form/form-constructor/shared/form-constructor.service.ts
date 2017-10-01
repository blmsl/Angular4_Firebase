import { Form } from './form';
import { Injectable } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
@Injectable()
export class FormConstructorService {
  private basePath: string = '/formsConstuctor/';
  
  constructor(private db: AngularFireDatabase) {}

  saveForm(form:Form): void  {
    this.db.list(`${this.basePath}`).set(form.id,form)
      .catch(error => this.handleError(error));
  }

   //  error handling 
  private handleError(error) {
    console.log(error)
  }
}


