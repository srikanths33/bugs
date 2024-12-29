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
  isConfirmed: boolean = false
  isDialogVisible:boolean=false;

  
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
  Confirm(): void {
    this.isConfirmed = true;
    this.isDialogVisible =false;  // Hide the modal
    this.router.navigateByUrl('post/index');  // Navigate to the desired page
  }

  // Triggered when the user cancels the action
  onCancel(): void {
    this.isDialogVisible = false;  // Close the modal if canceled
  }
  canDeactivate(): boolean {
    if (this.form  && !this.isSubmitted && !this.isConfirmed){
      // return window.confirm('You have unsaved changes. Are you sure you want to leave?');
      this.isDialogVisible = true;  // Show the confirmation modal
      return false; 
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
  
