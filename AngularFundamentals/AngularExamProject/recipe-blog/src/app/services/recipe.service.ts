import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase';

import { GalleryRecipe } from '../models/galleryRecipe.model';

import { Router } from '@angular/router';

@Injectable()
export class RecipeService {
  private uid: string;
  items: Observable<any[]>;
  private authEmail:string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router:Router) {
    this.afAuth.authState.subscribe(auth => {
      this.authEmail = auth.email;
      if(auth !== undefined && auth !== null){
        this.uid = auth.uid;
      }
    });
   }

  getRecipes(){
    return firebase.database().ref('recipes').once('value')
      .then((snap) => snap.val());
  }

  getImage(key:string){
    return firebase.database().ref('images/' + key).once('value')
    .then((snap) => snap.val());
  }

   getRecipe(key: string) {
    return firebase.database().ref('recipes/' + key).once('value')
    .then((snap) => snap.val());
  }

  getEmail(){
    return this.authEmail;
  }

  deleteRecipe(name:string, key:string){
    const storageRef = firebase.storage().ref();
    this.deleteRecipeImages(name, key);
  }

  deleteRecipeImages(name:string, key:string){
    const storageRef = firebase.storage().ref();
    (this.getRecipe(key).then(r=>{
      for(let imgKey of r.imageKeys){
        this.getImage(imgKey).then(i=>{
          storageRef.child(`images/${name}/${i.name}`).delete();
          this.db.list(`images/${imgKey}`).remove();
        })
      }
    })).then(()=>{
      this.delRecipe(key);
      this.router.navigate(['gallery']);
    })
  }

  delRecipe(key:string){
    this.db.list(`recipes/${key}`).remove();
  }

  editRecipe(key:string, obj:Object){
    firebase.database().ref(`recipes/${key}`).update(obj).then(()=>{
      this.router.navigate(['gallery']);
    })
  }
}