import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent implements OnInit {

    form:FormGroup;

    constructor(private fb: FormBuilder,private authservice:AuthService) {

        this.form = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required],
            confirm: ['',Validators.required]
        });


    }

    ngOnInit() {

    }


    signUp() {
        const val = this.form.value;
        // console.log(val)
        //TODO
        if(val.email && val.password && val.password ===val.confirm){
            this.authservice.signUp(val.email,val.password).subscribe(
                ()=>console.log('user created successfully'),
                console.error
            );
        }
        
      

    }

}
