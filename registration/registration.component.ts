import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistarionService } from '../user-registarion.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User=new User("","",0,"");
  message:any;

  constructor(private service:UserRegistarionService) { }

  ngOnInit(){
  }

  public registerNow()
  {
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
  }

}
