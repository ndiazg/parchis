$(document).ready(function () {
  var socket = io.connect('http://parques.gdiazo.com:8080');
  socket.on('update_position', function (data) {
    for (var id in data){
      if (data.hasOwnProperty(id)) {
        var x = data[id].x;
        var y = data[id].y;
        $("#"+id).css({
          left: x + "%",
          top: y + "%"
        });
      }
    }
  });
  socket.on('start_rolling', function(data) {
    $('#d1').removeClass('dice-1 dice-2 dice-3 dice-4 dice-5 dice-6');
    $('#d2').removeClass('dice-1 dice-2 dice-3 dice-4 dice-5 dice-6');
  });
  socket.on('stop_rolling', function(data) {
    $('#d1').addClass('dice-' + data.d1);
    $('#d2').addClass('dice-' + data.d2);
  })
  $('#rollo').click(function(){
    socket.emit('roll',{});
    setTimeout(function(){socket.emit('stop_rolling',{});},1000);
  });
  $(".p").draggable({
    drag: function (event, ui) {
      var coord = $(this).position();
      var height = $('#game').height();
      var width = $('#game').width();
      socket.emit('receive_position', {
        x: 100*coord.left/width,
        y: 100*coord.top/height,
        id: $(this).attr('id')
      });
    }
  });
});
