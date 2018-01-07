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
  //private uploads: FirebaseListObservable<GalleryRecipe[]>;

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
          //console.log(upload.progress);
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
          
          
          //this.router.navigate(['gallery']);
        }
      );


    });
  }

  // uploadFile(upload: Upload) {
  //   const storageRef = firebase.storage().ref();
  //   const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
  //     .put(upload.file);

  //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  //     // three observers
  //     // 1.) state_changed observer
  //     (snapshot) => {
  //       // upload in progress
  //       upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
  //       //console.log(upload.progress);
  //     },
  //     // 2.) error observer
  //     (error) => {
  //       // upload failed
  //       console.log(error);
  //     },
  //     // 3.) success observer
  //     (): any => {
  //       upload.url = uploadTask.snapshot.downloadURL;
  //       upload.name = upload.file.name;
  //       this.saveFileData(upload);
  //       this.router.navigate(['gallery']);
  //     }
  //   );
  // }

  // private saveImageData(file:File){
  //   this.db.list(`${this.imagesPath}/`).push(file);
  // }

  private saveFileData(upload: Upload) {
    const newRef = this.db.list(`${this.imagesPath}/`).push(upload);
    return newRef;
    //console.log('File saved!: ' + upload.url);
  }

  private saveRecipeData(recipe: Recipe){
    this.db.list(`${this.recipePath}/`).push(recipe);
  }
}