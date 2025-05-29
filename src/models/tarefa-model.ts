interface ITarefa {
	id: string;
	nome: string;
	data: string;
	prioridade: string;
	categoria: string;
}

function createITarefa() {
	return {
		id: "",
		nome: "",
		data: "",
		prioridade: "",
		categoria: "",
	};
}

export { ITarefa, createITarefa };
