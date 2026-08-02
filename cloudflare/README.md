# Cloudflare Email Routing

The `pinde-inqury-dual-forwarder` Email Worker handles the active
`inqury@pindesys.com` route. Its deployed source is tracked in
`email-routing-worker.js` and forwards each message to both approved recipients:

- `doris.li@f1composite.com`
- `ori@f1composite.com`

Both destination addresses must remain verified in Cloudflare Email Routing.
The `pindesys.com` Email Routing DNS records are managed and locked by
Cloudflare.
