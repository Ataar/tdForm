




import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit , AfterViewInit {
 
techArr : Array<any> = [
  {
    tech01:'Phone' , id:1
  },

  {
    tech01:'Email' , id:2
  }

]


  // -----------------------------------



  userMaxlength = false


// ----------------------------------
  @ViewChild('signup')signupForm !:NgForm

  ngOnInit(): void {

  //  console.log(this.signupForm)

  // ----------------------------------
 



 
     setTimeout(() => {
     this.signupForm?.controls['username'].valueChanges
     .subscribe(res=>{
      if(res.length>=12)
      {
        this.userMaxlength = true;
      }
      else
      {
        this.userMaxlength=false
      }
     })
    },500);
      
  }


  ngAfterViewInit(): void {
    
  }
  










  submittedData: any 
  onSignIn() {
    if (this.signupForm.valid) {
      this.submittedData = this.signupForm.value;
      console.log(this.submittedData);
    }

     this.signupForm.reset()
  }
  

 
  onChange(eve:Event)
  {
     let ele = eve.target as HTMLInputElement;
     console.log(ele.value)
  }
 
}

