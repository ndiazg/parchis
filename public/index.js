$(document).ready(function () {
  var socket = io.connect('http://react:8080');
  socket.on('update_position', function (data) {
    console.log(data);
    for (var id in data){
      if (data.hasOwnProperty(id)) {
            var x = data[id].x;
            var y = data[id].y;
            //console.log('id:'+id+', x:'+x+', y:'+y);
            // jquery code to move div here
            $("#"+id).css({
              left: x + "px",
              top: y + "px"
            });
      }
    }

  });
  $(".p").draggable({
    drag: function (event, ui) {
      var coord = $(this).position();
      socket.emit('receive_position', {
        x: coord.left,
        y: coord.top,
        id: $(this).attr('id')
      });
    }
  });
});
