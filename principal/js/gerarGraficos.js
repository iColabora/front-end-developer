function converterData(a){var e=new Date(a),r=e.getDate(),t=e.getMonth()+1,o=e.getFullYear();return r+"/"+t+"/"+o}function graficoPedidosDia(){var a="SELECT data_de_compra as dtcompra, count(*) as qtde FROM pedidos GROUP BY data_de_compra ";mysqlQuery(a,function(a){var e=JSON.parse(a),r=0;label="N. Pedidos",e.forEach(function(a){r+=1,date=converterData(a.dtcompra),labels.push(date),data.push(a.qtde)})});var e=$("#grafPedDia");Chart.defaults.global.responsive=!0;new Chart(e,{type:"bar",data:{labels:labels,datasets:[{label:label,data:data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}function graficoPedidosSolicitante(){var a="SELECT sol.nome as nome, count(*) as qtde FROM pedidos ped  INNER JOIN solicitantes sol ON ped.id_solicitante = sol.id GROUP BY ped.id_solicitante";mysqlQuery(a,function(a){var e=JSON.parse(a),r=0;label="N. Pedidos",e.forEach(function(a){r+=1,labels.push(a.nome),data.push(a.qtde)})});var e=$("#grafPedSolicitante");Chart.defaults.global.responsive=!0;new Chart(e,{type:"bar",data:{labels:labels,datasets:[{label:label,data:data,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}function pedidosPendentes(){}var cores=["Red","Blue","Yellow","Green","Purple","Orange"],labels=[],label="",data=[];null!=document.getElementById("grafPedDia")?graficoPedidosDia():null!=document.getElementById("grafPedSolicitante")&&graficoPedidosSolicitante();