define([
	'app/model/socket',
	'app/model/jogador'
], function(socket, jogador) {
	'use strict';

	var jogo = {};

	jogo.entrar = function(apelido, callback) {
		socket.emitir('entrar', apelido);
		socket.escutar('entrada-registrada', callback);
	};

	return jogo;
});