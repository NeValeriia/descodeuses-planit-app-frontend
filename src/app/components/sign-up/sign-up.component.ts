import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  
  listGenre = [
    { text:'Femme', value:'f'},
    { text:'Homme', value:'h'}
  ];

  
  signUpForm! : FormGroup;

  constructor(private fb: FormBuilder,private signupService: SignupService) {

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        firstname: ['',[Validators.required]],
        lastname: ['',[Validators.required]],
        username: ['',[Validators.required]],
        password: ['',[Validators.required]],
        gender: ['',[Validators.required]]

      }
    );
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formValue = this.signUpForm.value;
      this.signupService.register(formValue).subscribe({
        next: () => console.log('User registered!'),
        error: (err) => console.error('Signup failed:', err)
      });
    }
  }

}
