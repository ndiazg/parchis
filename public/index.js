$(document).ready(function () {
  var socket = io.connect('http://parques.gdiazo.com:8080');
  socket.on('update_position', function (data) {
    for (var id in data){
      if (data.hasOwnProperty(id)) {
            var x = data[id].x;
            var y = data[id].y;
            //console.log('id:'+id+', x:'+x+', y:'+y);
            // jquery code to move div here
            $("#"+id).css({
              left: x + "%",
              top: y + "%"
            });
      }
    }

  });
  $(".p").draggable({
    drag: function (event, ui) {
      var coord = $(this).position();
      var height = $('#game').height();
      var width = $('#game').width();
      console.log(height);
      socket.emit('receive_position', {
        x: 100*coord.left/width,
        y: 100*coord.top/height,
        id: $(this).attr('id')
      });
    }
  });
});
