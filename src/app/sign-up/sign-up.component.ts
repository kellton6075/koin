import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './../common.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              public router: Router,
              private commonService: CommonService) { }

    ngOnInit() {
      this.buildForm();
    }
    /**
     * @method buildForm()
     * @desc used to build form.
     */
    buildForm(): void {
      this.signUpForm = this.formBuilder.group({
        email: ['',
        [Validators.required, Validators.maxLength(50) ]
        ],
        password: ['',
        [Validators.required]
        ]
      });
    }
    submitRegister(): void {
      console.log("dshufhgjsdfjhf");
      
      this.commonService.signUpUser(this.signUpForm.value).subscribe(
        res => {
          if (res.status !== 'FAILURE') {
            this.commonService.loginUser(this.signUpForm.value).subscribe(
              resLogin => {
                if (resLogin.status !== 'FAILURE') {
                  setTimeout(() => this.router.navigate(['dashboard']), 1000);
                  // this.router.navigate(['dashboard']);
                } else {
                  alert('Invalid Credentials');
                }
              }, err => {
                //
              }
            );          } else {
            alert('Invalid Credentials');
          }
        }, err => {
          //
        }
      );
    }

}
