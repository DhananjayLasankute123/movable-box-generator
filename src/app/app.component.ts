import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'box-generator-material';
  count = 0;
  containers = [];
  index: any;
  toggleSwitch = true;

  addBox() {
    this.count = this.count + 1;
    (this.containers.length === 24) ? '' : this.containers.push(this.count);
    this.index = -1;
  }

  click(event) {
    this.index = event.path[0].innerText;
  }

  @HostListener('document:keydown', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if (this.toggleSwitch) {
      if (event.key === 'Delete')
      {
        const ind = this.containers.indexOf(parseInt(this.index));
        const numDelete = (ind === -1) ? 0 : 1;
        this.containers.splice(ind, numDelete);
        this.index = -1;
      }
    } else {
      event.returnValue = false;
      event.preventDefault();
    }
  }

  checkClicked(value) {
    if (value){
      this.toggleSwitch = false;
    } else{
      this.toggleSwitch = true;
    }
  }

}
