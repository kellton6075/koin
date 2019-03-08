import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public router: Router) { }

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
    console.log("jsdgfdghsfj");
    
  }
}
