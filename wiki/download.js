var peer = new Peer('wiki', {key: 'y4u2k1fnubdtpgb9'});
var conn = peer.connect('youtube');

console.log('ran the javascript');

conn.on('open', function(){
 console.log('sending the message'); 
 conn.send('hi! This is wiki!');
});

//conn.on('data', function(data){
    // Will print 'hi!'
   // document.body.innerHTML = "<video><source src="" type="video/mp4"> Your browser does not support HTML5 video</video>"
// console.log(data);
// });
