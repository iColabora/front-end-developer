$(document).ready(function(){function e(){$("#solicitante_endereco").val(""),$("#solicitante_cidade").val(""),$("#solicitante_uf").val(""),$("#entrega_endereco").val(""),$("#entrega_cidade").val(""),$("#entrega_uf").val("")}function a(a){var t=a.replace(/\D/g,"");if(""!=t){var l=/^[0-9]{8}$/;l.test(t)?($("#solicitante_endereco").val("..."),$("#solicitante_cidade").val("..."),$.getJSON("//viacep.com.br/ws/"+t+"/json/?callback=?",function(a){"erro"in a?(e(),alert("CEP não encontrado")):($("#solicitante_endereco").val(a.logradouro),$("#solicitante_cidade").val(a.localidade),$("#solicitante_uf").val(a.uf),$("#entrega_endereco").val(a.logradouro),$("#entrega_cidade").val(a.localidade),$("#entrega_uf").val(a.uf))})):alert("Formato inválido!")}else e()}$("#solicitante_cep").blur(function(){a($(this).val())}),$("#entrega_cep").blur(function(){a($(this).val())})});