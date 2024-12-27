import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    
  form!: FormGroup;  
  isSubmitted = false;

  
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  // submit(){
  //   console.log(this.form.value);
  //   this.postService.create(this.form.value).subscribe((res:any) => {
  //        console.log('Post created successfully!');
  //        this.router.navigateByUrl('post/index');
  //   })}
  canDeactivate(): boolean {
    if (this.form  && !this.isSubmitted){
      return window.confirm('You have unsaved changes. Are you sure you want to leave?');
    }
    return true;
  }

  submit(): void {
    // First, check if the form is valid before submitting
    if (this.form.valid) {
      this.postService.create(this.form.value).subscribe((res: any) => {
        this.isSubmitted = true;
        // console.log('Post created successfully!');
        alert('Post created successfully!')
        this.router.navigateByUrl('post'); // Redirect after submission
      });
    } else {
      
      console.log('Form is invalid.');
    }
  }
  }
  
