import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MagicComponent } from './magic/magic.component';
import { PostureComponent } from './posture/posture.component';
import { ArmesComponent } from './armes/armes.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MagicComponent,
    PostureComponent,
    ArmesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'magic', component: MagicComponent },
      { path: 'posture', component: PostureComponent},
      { path: 'arme', component: ArmesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
