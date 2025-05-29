import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, type Routes } from "@angular/router";
const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "home",
		loadChildren: () =>
			import("./home/home.module").then((m) => m.HomePageModule),
	},
	{
		path: "tarefa-nova",
		loadChildren: () =>
			import("./tarefa-nova/tarefa-nova.module").then(
				(m) => m.TarefaNovaPageModule,
			),
	},
	{
		path: "tarefa-atualiza/:id",
		loadChildren: () =>
			import("./tarefa-atualiza/tarefa-atualiza.module").then(
				(m) => m.TarefaAtualizaPageModule,
			),
	},
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
