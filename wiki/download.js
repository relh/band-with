var peer = new Peer('wiki', {key: 'y4u2k1fnubdtpgb9'});
var conn = peer.connect('endtube', {reliable: true});


console.log('ran the javascript');

conn.on('open', function(){

  var request = new XMLHttpRequest();
  request.open('GET', '/testVideo.mp4', true);

  request.send();
  console.log(conn)
  request.onload = function() {

    conn.send(request.responseText);
  }
});
