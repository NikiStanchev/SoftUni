import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';

import { GalleryRecipe } from '../models/galleryRecipe.model';

@Injectable()
export class RecipeService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if(auth !== undefined && auth !== null){
        this.uid = auth.uid;
      }
    })
   }

   getRecipes(): Observable<GalleryRecipe[]>{
     const data = this.db.list('uploads');
     return data;
   }

   getRecipe(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
    .then((snap) => snap.val());
  }

}