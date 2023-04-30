# Blue OSS
A (very poorly) reverse-engineered Twitter backend clone.

## A FAIR WARNING!
**DO NOT use this right now!!** A lot of things have yet to be done, many things are static and passwords are stored in plaintext.

## How do I set this up for testing/contribution?
1. Create your .env, set port to 443 unless you know what you're doing.
2. Install MongoDB, start on 27017.
3. `npm i`
4. `sudo nodemon src/index.ts` (there is no production setup as of now because you shouldn't run this in production environments until it is more fleshed out.)
5. Go to Twitter and logout of your account.
6. Set your proxy, either in-browser or system-wide, to `127.0.0.1:8000` (or whatever the proxy is bound to, see console)
7. Voila!
