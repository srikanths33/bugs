import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: number;
  post!: Post;
  form!: FormGroup;
  isSubmitted = false;
  isconfirmed:boolean=false;

  // Flag to control the visibility of the custom confirmation modal
  isDialogVisible: boolean = false;
  
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.form.patchValue(data);
      // this.post = data;
    }); 
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
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

   // Triggered when the user confirms to leave the page
   Confirm(): void {
    this.isconfirmed=true;
    this.isDialogVisible = false;
  
    this.router.navigateByUrl('post/index');// Proceed with navigation
  }

  // Triggered when the user cancels the action
  onCancel(): void {
    this.isDialogVisible = false; // Close the modal if canceled
  }
  canDeactivate(): boolean {
    if (this.form && !this.isSubmitted && !this.isconfirmed) {
      this.isDialogVisible = true; // Show the custom modal
      return false; // Prevent navigation until user confirms
    }
    return true;
    //   return window.confirm('You have unsaved changes. Are you sure you want to leave?');
    // }
    // return true;
  }
  // submit(){
  //   console.log(this.form.value);
  //   this.postService.update(this.id, this.form.value).subscribe((res:any) => {
  //        console.log('Post updated successfully!');
  //        this.router.navigateByUrl('post/index');
  //   })
  // }
  submit(): void {
    // First, check if the form is valid before submitting
    if (this.form.valid) {
      this.postService.update(this.id, this.form.value).subscribe((res: any) => {
        // console.log('Post updated successfully!');
        this.isSubmitted = true;
        alert('Post updated successfully!');
         this.router.navigateByUrl('post/index'); // Redirect after submission
      });
    } else {
      console.log('Form is invalid.');
    }
  }
   
}