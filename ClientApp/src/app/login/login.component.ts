import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios:string;
  clave:String;
  public contactForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private router:Router) {
    this.contactForm = this.createForm();
   }
  ngOnInit() {
    
  }
login(){
  if(this.usuarios!=''&&this.clave!=''){
    if(this.usuarios=='admin'&&this.clave=='12345'){
      this.router.navigate(['/admin']);
    }else{
      alert('Usuario o contraseña no validos');
    }
  }else{
  }
  
  }
  get name() { return this.contactForm.get('usuario'); }
  get email() { return this.contactForm.get('pasword'); }

  createForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])
    });
  }

  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      this.onResetForm();
    }
  }

}
