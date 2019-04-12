import { Component } from '@angular/core';

@Component({
  selector: 'app-collective-timer',
  templateUrl: './collective-timer.component.html',
  styleUrls: ['./collective-timer.component.css']
})
export class CollectiveTimerComponent {

  collectiveStartSeconds = 6215;
  collectiveSpent = "0 sec.";

  public collectiveTime() {
    this.collectiveStartSeconds ++;
    if(this.collectiveStartSeconds < 60) {
      this.collectiveSpent = this.collectiveStartSeconds + " sec.";
    } else if(this.collectiveStartSeconds%3600 === 0) {
      var hours = this.collectiveStartSeconds/60;
      this.collectiveSpent = hours + " hours 0 min 0 sec.";
    } else if(this.collectiveStartSeconds%3600 !== 0 && this.collectiveStartSeconds%60 === 0) {
      var hours = Math.floor(this.collectiveStartSeconds/3600);
      var minutes = Math.floor(this.collectiveStartSeconds/60) - hours * 60;
      var seconds = this.collectiveStartSeconds%60;
      this.collectiveSpent = hours + " hours " + minutes + " min " + seconds + " sec.";
    } else if(this.collectiveStartSeconds%3600 !== 0 && this.collectiveStartSeconds%60 !== 0) {
      var hours = Math.floor(this.collectiveStartSeconds/3600);
      var minutes = Math.floor(this.collectiveStartSeconds/60) - hours * 60;
      var seconds = this.collectiveStartSeconds%60;
      this.collectiveSpent = hours + " hours " + minutes + " min " + seconds + " sec.";
    } else if (this.collectiveStartSeconds%60 === 0) {
      var minutes = this.collectiveStartSeconds/60;
      this.collectiveSpent = minutes + "min 0 sec.";
    } else if(this.collectiveStartSeconds%60 !== 0) {
      var minutes = Math.floor(this.collectiveStartSeconds/60);
      var seconds = this.collectiveStartSeconds%60;
      this.collectiveSpent = minutes + " min " + seconds + " sec.";
    }
  }

  refreshCollectiveTime = setInterval(()=> this.collectiveTime(), 1000);

}
