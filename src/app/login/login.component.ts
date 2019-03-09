import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

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
    this.loginForm = this.formBuilder.group({
      email: ['',
      [Validators.required, Validators.maxLength(50) ]
      ],
      password: ['',
      [Validators.required]
      ]
    });
  }

  submitLogin(): void {
    this.commonService.loginUser(this.loginForm.value).subscribe(
      res => {
        if (res.status !== 'FAILURE') {
          window.localStorage.setItem('token', res.data.token);
          console.log(window.localStorage.getItem('token'), "tokeen");
          window.localStorage.setItem('email', this.loginForm.value.email);

          this.router.navigate(['dashboard']);
        } else {
          alert('Invalid Credentials');
        }
      }, err => {
        //
      }
    );
  }
}
