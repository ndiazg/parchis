var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
var lastPosition={
  p11: { x: 0, y: 0, id: 'p11' }, p12: { x: 0, y: 0, id: 'p12' }, p13: { x: 0, y: 0, id: 'p13' }, p14: { x: 0, y: 0, id: 'p14' },
  p21: { x: 0, y: 0, id: 'p21' }, p22: { x: 0, y: 0, id: 'p22' }, p23: { x: 0, y: 0, id: 'p23' }, p24: { x: 0, y: 0, id: 'p24' },
  p31: { x: 0, y: 0, id: 'p31' }, p32: { x: 0, y: 0, id: 'p32' }, p33: { x: 0, y: 0, id: 'p33' }, p34: { x: 0, y: 0, id: 'p34' },
  p41: { x: 0, y: 0, id: 'p41' }, p42: { x: 0, y: 0, id: 'p42' }, p43: { x: 0, y: 0, id: 'p43' }, p44: { x: 0, y: 0, id: 'p44' },
  p51: { x: 0, y: 0, id: 'p51' }, p52: { x: 0, y: 0, id: 'p52' }, p53: { x: 0, y: 0, id: 'p53' }, p54: { x: 0, y: 0, id: 'p54' },
  p61: { x: 0, y: 0, id: 'p61' }, p62: { x: 0, y: 0, id: 'p62' }, p63: { x: 0, y: 0, id: 'p63' }, p64: { x: 0, y: 0, id: 'p64' },
};

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('update_position', lastPosition);
  socket.on('receive_position', function (data) {
     lastPosition[data.id] = data;
     console.log(lastPosition);
     socket.broadcast.emit('update_position', lastPosition); // send `data` to all other clients
  });
});