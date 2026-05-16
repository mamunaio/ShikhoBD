const dns = require('dns');
const domain = '_mongodb._tcp.cluster0.bowezaw.mongodb.net';
dns.resolveSrv(domain, (err, addresses) => {
  if (err) {
    console.error('DNS SRV Resolve Error:', err);
  } else {
    console.log('SRV Addresses:', addresses);
  }
});
