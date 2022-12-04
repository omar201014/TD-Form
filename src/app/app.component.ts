import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions:string[] =['Basic' , 'Advanced' , 'Pro']
  defaultSub:string = this.subscriptions[0]
  submitted:boolean=false
  user ={
    email:'',
    subscription:''
  }
  

  @ViewChild('form' ,{static:false}) formObjects:NgForm

  onSubmit(){
    this.submitted=true;
    this.user.email=this.formObjects.value.userMail
    this.user.subscription=this.formObjects.value.subscription

    this.formObjects.reset()
  }
}
