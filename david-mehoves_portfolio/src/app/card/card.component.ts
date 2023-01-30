import { Component, Input, OnInit } from '@angular/core';
import blogPosts from "../../assets/blog-posts.json";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{
  title:string;
  body_s:string;
  body_l:string;
  img_location:string;
  nLength:number;

  @Input()
  content_id: any;
  @Input()
  length: any;

  

  constructor() {
    this.content_id = "-1";
    this.title = "my title";
    this.body_s = "my short body";
    this.body_l = "my long body";
    this.img_location = "";
    this.length = "10";
    this.nLength = 10;
  }
  ngOnInit(): void {
    this.nLength = +this.length;
    this.title = blogPosts[this.content_id as keyof typeof blogPosts]["title"];
    this.body_l = blogPosts[this.content_id as keyof typeof blogPosts]["body"];
    this.shorten();
    this.img_location = blogPosts[this.content_id as keyof typeof blogPosts]["img"];
  }


  shorten(): void{
    let wordList = this.body_l.split(' ');
    let wordCount = wordList.length;
    if (wordCount < this.nLength){
      this.body_s = this.body_l;
    }
    else {
      let shortWordList = wordList.slice(0,this.nLength);
      this.body_s = shortWordList.join(" ") + ".....";
    }
  }
}

