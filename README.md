# Blue OSS
A (very poorly) reverse-engineered Twitter backend clone.

## A FAIR WARNING!
**DO NOT use this right now!!** A lot of things have yet to be done, there are many stubs and (client-side) errors.

## How do I set this up for testing/contribution?
1. Create your .env, set port to 443 unless you know what you're doing.
2. Install MongoDB, start on 27017.
3. `npm i`
4. `sudo nodemon src/index.ts` (there is no production setup as of now because you shouldn't run this in production environments until it is more fleshed out.)
5. Go to Twitter and logout of your account.
6. Install the CA in `certs`, then set your proxy either in-browser or system-wide to `127.0.0.1:8000` (or whatever the proxy is bound to, see console)
7. Voila!

## Tips
If you don't want to run all of your system traffic with a self-signed CA through some rando's GitHub project (which is fair), the following wildcards are all the traffic which the project requires:
- `*twitter.com*` (for main API calls, and state injection in the future)
- `*twimg.com*` (for profile pictures and banners, although current implementation is yucky)
- `*arkoselabs.com*` (for my super-special captcha bypass which utilizes XSS in Arkose's captcha to automatically do it)
You can use a browser extension (I personally use FoxyProxy in HTTP proxy mode) for this proxy if you want to use these wildcards.
