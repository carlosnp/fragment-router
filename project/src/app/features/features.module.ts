import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeaturesService } from './features.service';
import { FEATURES_ROUTES } from './features.routes';


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(FEATURES_ROUTES)],
  providers: [FeaturesService]
})
export class FeaturesModule {}
