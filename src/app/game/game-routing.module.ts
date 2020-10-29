import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartingPointComponent } from './starting-point/starting-point.component';

const routes: Routes = [{
	path: '',
	component: GameComponent,
	children: [
		{
			path: '',
			component: StartingPointComponent,
		},
		{ path: '', redirectTo: 'game', pathMatch: 'full' },
		{ path: '**', redirectTo: 'game' },
	],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GameRoutingModule { }
