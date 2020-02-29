//Script event auto linked ipv4 nextdns: network-change

$httpClient.get('https://link-ip.nextdns.io/a8b8b1/0b9f528c59b79e08', function(error, response, data){
  if (error) {
console.log(error + '‼️');
  } else {
console.log(data);
$done();
  }
});
