var peer = new Peer('youtube', {key: 'y4u2k1fnubdtpgb9'});
console.log('weee1');

peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hi!'
    console.log('weee');
    console.log(data);
  });
});
