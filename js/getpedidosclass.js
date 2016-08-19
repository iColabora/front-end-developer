//#--Classe para criar objeto com pedidos--#
function getPedidosCompleto(getPedidosQuery, getSolicitantesQuery, getInsumosQuery, getMateriaisQuery){

	//#--Resultados dos querys--#
	var solicitantes;
	var pedidos;
	var insumos;
	var materiais;

	mysqlQuery(getSolicitantesQuery, function(result){
		solicitantes = JSON.parse(result);
	});
	mysqlQuery(getPedidosQuery, function(result){
		pedidos = JSON.parse(result);
	});
	mysqlQuery(getInsumosQuery, function(result){
		insumos = JSON.parse(result);
		console.log(insumos.length);
	});
	mysqlQuery(getMateriaisQuery, function(result){
		materiais = JSON.parse(result);
	});


	function addSolicitanteToPedido(nPedido, solicitante){
		pedidos[nPedido]["solicitante"] = solicitante;
	}

	function addMaterialToPedido(nPedido, nMaterial, material){
		pedidos[nPedido]["materiais"] = [];
		pedidos[nPedido].materiais.push(material);
	}

	function addInsumoToMaterial(nPedido, idMaterial, insumo){
		for(var i = 0; i<pedidos[nPedido].materiais.length; i++){
			if(pedidos[nPedido].materiais[i].id===idMaterial){
				pedidos[nPedido].materiais[i].insumos.push(insumo);
				console.log("here");
			}
		}
	}

	//#--Pega Materiais e insumos referentes a cada pedido--#
	for(var i = 0; i<pedidos.length; i++){

		for(var j = 0; j<solicitantes.length; j++){//Verifica quem é o solicitante de cada pedido
			if(pedidos[i].id_solicitante === solicitantes[j].id){
				addSolicitanteToPedido(i, solicitantes[j]);
			}
		}

		for(var j = 0; j<materiais.length; j++){

			if(pedidos[i].id === materiais[j].id_pedido){//Verifica se material faz parte do pedido
				materiais[j]["insumos"] = [];
				addMaterialToPedido(i, j, materiais[j]);

				//Material foi adicionado, então deve adicionar seus insumos
				for(var k = 0; k<insumos.length; k++){
					if(pedidos[i].id === insumos[k].id_pedido){
						addInsumoToMaterial(i, materiais[j].id, insumos[k]);
					}
				}
			}
		}

	}

	return pedidos;
}


var getSolicitantes = "SELECT * FROM solicitantes";
var getPedidos = "SELECT * FROM pedidos ORDER BY id ASC";
var getInsumos = "SELECT * FROM insumos";
var getMateriais = "SELECT * FROM materiais";

var mPedidos = getPedidosCompleto(getPedidos, getSolicitantes, getInsumos, getMateriais);

console.log(mPedidos);