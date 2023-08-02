import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  next: string="X";
  result: string="";
  games: string[] = [
  "",
  "",
  "",
  "","","","","",""
 ]
  winners: number[]=[]

 setMark(index:number){

  if(this.games[index]==""&&this.result==""){
    this.games[index]=this.next


    this.checkIfGameFinish();
    this.checkgameresult();
    if (this.result!="") {
      return;
    }
    if(this.next=="X")
      this.next="O"
    else
      this.next="X"
   }

  }
  newGame(){
    this.next="X";
    this.result="";
    this.winners=[];
    for(let i=0; i<this.games.length;i++){
      this.games[i]="";
    }
  }
  checkgameresult(){
    if (this.games[0]!=""&&this.games[0]==this.games[1]&&this.games[1]==this.games[2]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(0,1,2)
    } 
    else if (this.games[0]!=""&&this.games[0]==this.games[3]&&this.games[3]==this.games[6]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(0,3,6)
    }
    else if (this.games[2]!=""&&this.games[2]==this.games[5]&&this.games[5]==this.games[8]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(2,5,8)
    }
    else if (this.games[1]!=""&&this.games[1]==this.games[4]&&this.games[4]==this.games[7]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(1,4,7)
    }
    else if (this.games[3]!=""&&this.games[3]==this.games[4]&&this.games[4]==this.games[5]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(3,4,5)
    }
    else if (this.games[6]!=""&&this.games[6]==this.games[7]&&this.games[7]==this.games[8]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(6,7,8)
    }
    else if (this.games[0]!=""&&this.games[0]==this.games[4]&&this.games[4]==this.games[8]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(0,4,8)
    }
    else if (this.games[2]!=""&&this.games[2]==this.games[4]&&this.games[4]==this.games[6]) {
      this.result=`Oyunu ${this.next} kazandi`
      this.winners.push(2,4,6)
    }
    // else if (this.result==""&&this.games[]!="") {
      
    // }
  }
  checkWinnerButtonClass(index:number){
    if(this.winners.includes(index))
      return "btn btn-success button";
    
    else
      return "btn btn-primary button";

  }
  checkIfGameFinish(){
    let isFinish=false;
    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i]=="") {
        return;
      }
      else
        isFinish = true;      
    }
    if (isFinish) {
      this.result="endete unentscheiden!!!"
    }
  }
  checkResultClass(){
    if (this.result!=""&& this.result=="endete unentscheiden!!!") {
      return "alert alert-danger"
    }
    else
    return "alert alert-success"
  }
  }


