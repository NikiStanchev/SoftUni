import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { GalleryRecipe } from '../models/galleryRecipe.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Upload } from '../models/upload.model';
import { Recipe } from '../models/recipe.model';

import * as  firebase from 'firebase';
import * as _ from 'lodash';

import { Router } from '@angular/router';

@Injectable()
export class UploadService {

  private imagesPath = '/images';
  private recipePath = '/recipes';

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase, private router:Router) { }

  uploadFile(files:FileList, recipe:Recipe){
    const storageRef = firebase.storage().ref();

    const filesIdx = _.range(files.length);
    _.each(filesIdx, (idx) => {
      const uploadFile = new Upload(files[idx]);
      const uploadTask = storageRef.child(`${this.imagesPath}/${recipe.recipeName}/${uploadFile.file.name}`)
          .put(uploadFile.file);


      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        // three observers
        // 1.) state_changed observer
        (snapshot) => {
          // upload in progress
          recipe.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        },
        // 2.) error observer
        (error) => {
          // upload failed
          console.log(error);
        },
        // 3.) success observer
        (): any => {
          uploadFile.url = uploadTask.snapshot.downloadURL;
          uploadFile.name = uploadFile.file.name;
          this.saveFileData(uploadFile).then((r)=>{
            recipe.imageKeys.push(r.key);
            if(files.length === recipe.imageKeys.length){
              this.saveRecipeData(recipe);
            }
          });
        }
      );
      
    });
    //this.router.navigate(['']);
  }

  private saveFileData(upload: Upload) {
    const newRef = this.db.list(`${this.imagesPath}/`).push(upload);
    return newRef;
  }

  private saveRecipeData(recipe: Recipe){
    this.db.list(`${this.recipePath}/`).push(recipe).then(()=>{
      this.router.navigate(['']);
    })
  }
}