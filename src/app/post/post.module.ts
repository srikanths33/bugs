import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PostRoutingModule } from './post-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CamelcasePipe } from './pipe/camelcase.pipe';
import { IdPipe } from './pipe/id.pipe';
  
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, CamelcasePipe, IdPipe],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CamelcasePipe
  ]
})
export class PostModule { }