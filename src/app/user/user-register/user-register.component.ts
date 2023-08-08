import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyServiceService } from 'src/app/services/alertify-service.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit 
{
  formSubmit?:boolean;
  registrationForm!: FormGroup;
  users:any[] = [];
  user?: User;
  constructor(private fb: FormBuilder,private userService:UserserviceService,private alertService:AlertifyServiceService) { }

  ngOnInit() {
    this.createRegistrationForm();
    // this.registrationForm = new FormGroup(
    //   {
    //     userName : new FormControl(null,Validators.required),
    //     email : new FormControl(null,[Validators.required,Validators.email]),
    //     password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //     confpass : new FormControl(null,Validators.required),
    //     mobile : new FormControl(null,[Validators.required,Validators.minLength(10)])
    //   },{ validators: this.passwordMatchingValidator });
  }
  createRegistrationForm()
  {
    this.registrationForm = this.fb.group(
      {
        userName:[null,Validators.required],
        email: [null,[Validators.required,Validators.email]],
        password: [null,[Validators.required,Validators.minLength(4)]],
        confpass: [null,Validators.required],
        mobile: [null,[Validators.required,Validators.minLength(11)]]
      },{ validators: this.passwordMatchingValidator }
    )
  }
  onSubmit()
  {
    this.formSubmit = true;
    if(this.registrationForm.valid)
    {
      console.log(this.registrationForm.value);
      console.log(this.user=this.registrationForm.value);
      this.userService.addUser(this.userData(),this.users);
      this.registrationForm.reset();
      this.formSubmit = false; 
      this.alertService.success('Congrats! You are registered Successfully');
    }
    else{
      this.alertService.error('Please provide the required fields');
    }
  }
  
  passwordMatchingValidator: ValidatorFn = (fg: AbstractControl): {[key: string]: boolean} | null => {
    const password = fg.get('password')?.value;
    const confpass = fg.get('confpass')?.value;
    
    return password === confpass ? null : { notMatched: true };
  };
  userData():User
  {
    return this.user =
    {
      username: this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobileNo:this.mobileNo.value
    }
  }
  get userName()
  {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email()
  {
    return this.registrationForm.get('email') as FormControl;
  }
  get password()
  {
    return this.registrationForm.get('password') as FormControl;
  }
  get confPass()
  {
    return this.registrationForm.get('confpass') as FormControl;
  }
  get mobileNo()
  {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
