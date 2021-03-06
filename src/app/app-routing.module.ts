import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	// {
	//   path: '',
	//   redirectTo: 'folder/Inbox',
	//   pathMatch: 'full'
	// },
	// {
	// 	path: 'folder/:id',
	// 	loadChildren: () => import('./pages/folder/folder.module')
	// 		.then( m => m.FolderPageModule)
	// },
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module')
			.then(module => module.PagesModule),
	},
	{
		path: 'game',
		loadChildren: () => import('./game/game.module')
			.then(module => module.GameModule),
	},
	{ path: '', redirectTo: 'pages', pathMatch: 'full' },
	{ path: '**', redirectTo: 'pages' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
