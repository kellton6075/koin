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
      this.commonService.signUpUser(this.signUpForm.value).subscribe(
        res => {
          if (res.status !== 'FAILURE') {
            this.commonService.loginUser(this.signUpForm.value).subscribe(
              resLogin => {
                if (resLogin.status !== 'FAILURE') {
                  window.localStorage.setItem('token', res.data.token);
                  console.log(window.localStorage.getItem('token'), "tokeen");
                  window.localStorage.setItem('email', this.loginForm.value.email);
                  this.router.navigate(['dashboard']);
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
