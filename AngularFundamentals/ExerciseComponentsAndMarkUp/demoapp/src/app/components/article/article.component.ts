import { 
  Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'note-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements  OnChanges {

  @Input() article;
  @Output() deleteArticleEmitter : EventEmitter<any> = new EventEmitter();

  counter = 0;
  limit = 0;
  hide = false;
  displayImage = false;
  constructor() { }

  ngOnChanges(){
    this.counter = 0;
    this.limit = 0;
    this.hide = false;
    this.displayImage = false;
  }

  trunc(string){
    if(string){
      return string.slice(0, this.counter*250);
    }
  }

  readMore(){
    if(this.article){
      this.limit = Math.ceil(this.article.text.length / 250) - 1;
    }
    
    if(this.limit === this.counter){
      this.hide = true;
    } else{
      this.hide = false;
    }
    this.counter = this.counter + 1;
  }

  hideText(){
    this.hide = false;
    this.counter = 0;
  }

  hideImage(){
    this.displayImage = false;
  }

  showImage(){
    this.displayImage = true;
  }

  deleteArticle(targetId:number):void{
    this.deleteArticleEmitter.emit(targetId)
  }
}
