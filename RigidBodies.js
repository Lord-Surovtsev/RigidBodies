$(function() {
	var START = function() {
		console.log('start');
		interval = setInterval(function() {
			step();
		}, 40);
	}

	var STOP = function() {
		console.log('stop');
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
	}

	var canvas = $('#canvas').click(
		function(event) {
			var offset = $(this).offset();
			var x = event.pageX - offset.left;
			var y = event.pageY - offset.top;
			log("clisked at:" + x + " " + y);
		}
	)
	.hover(
		function() {
			START();
		},
		function() {
			STOP();
		}
	)[0];
	var _ctx = canvas.getContext('2d');
	var WIDTH = _ctx.canvas.width;
	var HEIGHT = _ctx.canvas.height;
	var FILL_STYLE = 'rgba(128, 0, 0, 1)';
	var STROKE_STYLE = 'rgba(0, 128, 0, 1)';
	_ctx.fillStyle = FILL_STYLE;
	_ctx.strokeStyle = STROKE_STYLE;
	
	
	var DRAW = function() {
		_ctx.fillRect(0, 0, WIDTH, HEIGHT);
	}

	var step = function() {
		console.log("step");
		////
		DRAW();
	}
});
