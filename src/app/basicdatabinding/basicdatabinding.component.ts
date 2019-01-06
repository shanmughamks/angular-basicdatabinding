import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-databinding',
    templateUrl: './basicdatabinding.component.html',
    styleUrls: []
})
export class DatabindingComponent {
    userName = '';
    allowReset = false;

    month =["January", "February", "March", "April",
    "May", "June", "July", "August", "September",
    "October", "November", "December"];

    isAvilable = true;
    
    changeMonth(event: Event){
        alert((<HTMLInputElement>event.target).value);
    }

    changeButtonStatus(event: Event) {
        if ((<HTMLInputElement>event.target).value.length > 0) {
            this.allowReset = true;
        }
    }

    clearUserName(){
        this.userName = '';
        this.allowReset = false;
    }
}