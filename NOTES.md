# Belaterwashere

## Generic notes:
- First redirects: `https://capital.belaterbewasthere.com/len.php?s=678&_id=129843478&utm=gfhklew45`
  - the subdomain can be varied, as seen in the google results
  - host belaterbewasthere.com
belaterbewasthere.com has address 162.241.175.38
- Secondary domains: 
  - `https://redrelaxfollow.com/?p=miywmn3cg45gi3bpge4dana&sub1=Ben_Morris&sub2=fusers.v2&n=1`
    - seen on firefox on mac
  - `https://greenrelaxfollow.com ` (seen on mobile)

## Behaviour
- Script tags injected in the to `<head>` of the webpage
  - Script tag is obfuscated and uses `eval(String.fromCharCode(`
- Script adds a new script tag, directing to load a script from : `https://bes.belaterbewasthere.com/corn/flex.js?tp=799`
- _The script does something_: Yet unsure of exactly what happens

 - towards the end it seems to try to make three API calls:
   - it retrieves a `_wpnonce` value from the first call, then attempt 2 more calls
     - I suspect this is a persistence mechanism: aiming to use credentials of an Admin checking the page to perform some action, such as attach weak plugin or create backdoor for malicous user
- Page is redirected to `https://capital.belaterbewasthere.com/len.php?s=678&_id=129843478&utm=gfhklew45`
- The browser gets redirected to one of the secondary domains
- The `greenrelaxfollow` and `redrelaxfollow` pages attempt to force a user to allow notifications.

## Domains
### `belaterbewasthere.com`
```
host belaterbewasthere.com
belaterbewasthere.com has address 162.241.175.38
```

## Reverse Engineerings points of interest:

### Main execution branches:
- If `wp-settings-time` exists in cookies:
  - Long, yet unreversed code
- else:
  - Cancel window load,
  - navigate to `https://capital.belaterbewasthere.com/len.php?s=678&_id=129843478&utm=gfhklew45`

### Standard obfuscation patterns:
- strings encoded with unicode. eg/ `'string'` is encoded as `'\x73\x74\x72\x69\x6e\x67'`
- array shuffling
- Base64 decoding
- Nop sections: 
  - encoding and decoding of data
    - `for(var _0x39fa62=0x0,_0x31aa32=_0x1f7823['length'];_0x39fa62<_0x31aa32;_0x39fa62++){_0x58b7c1+='%'+('00'+_0x1f7823['charCodeAt'](_0x39fa62)['toString'](0x10))['slice'](-0x2);}_0x1f7823=decodeURIComponent(_0x58b7c1);` is uriEncode of `_0x1f7823` into `_0x58b7c1`, followed by a decode of `_0x58b7c1` into `_0x1f7823`.
- splitting unique strings into sections:
  - regexes used are often split between 2 string definitions
  - the initially declared array of 52 string elements seems to be obfucation of some base64 data.
- other methods of getting values
  - all numbers noted in hex. eg/ `0x0`
  - `true`/`false` encoded as `!![]` and`![]` respectively (shorter represenations)


### Anti-prettifiers?
```js
/** The below is after partial simplification and prettifying: **/
var _0x29532a = function (_0x2babe0) {
  this['IWaIAq'] = _0x2babe0;
  this['LhXTbG'] = [1, 0, 0];
  this['nssEcv'] = function () {
    return 'newState';
  };
};
// .... ///
var _0x2112f8 = /\w+ *\(\) *{\w+ *['|"].+['|"];? *}/;

// This could be checking if the file has been prettified, as prettification would likely add newlines to the function `this['nssEcv']`
// in the original it's `this['nssEcv']=function(){return'newState';}`, which passes the regex
var _0x42fc30 = _0x2112f8['test'](this['nssEcv']['toString']()) ? 
  --this['LhXTbG'][1] : // intended path
  --this['LhXTbG'][0];  // prettified path

return this['JNhbcC'](_0x42fc30);
```
This portion of code is interesting, as it uses `Function.prototype.toString()` to get the string representation of a function.
It could be just checking to see if the previous function (`_0x29532a`) had been run (and thus attached the refernce to `this`), but this regex will also fail if the source could has been prettified and newline characters have been added to the function.

### Inifinte loop techinques
- a common infinite loop technique i'm seeing is to have a `for` loop where the condition is that `x < y`, but in each iteration it will push to the array, set `y` to the array legnth and also increment x, so the result is the same at each iteration until the array cannot allocate more.

### Decoding the strings
Details are in the [StringDecoding.md](./StringDecoding.md) document, as there's a lot of data to present and cover

### MISC
- Requires jQuery is present in the document
- Has a portion to detect if `atob` is present on the global context and add it if not
  - `atob` is not present in `NodeJs`
    - but this script is not designed to run in NodeJs
  - Suspect it's the use of am exploit bundler
- There are many process trapping mechanisms: infinite loops, infinite recursion, etc
  - I've yet to figure out under what circumstances these are triggered, as I've been seeing them in my control runs of the script in a browser environment, but they obviously did not occur when the original sript run

## Code labels
Whilst doing the analysis, I found it useful to come up with some labels that I could comment next to features to find them later.
Primarily the anti-RE techniques, so they can be neutered when running it dynamically to check functionality.
| Label | Description |
| --- | --- |
| ANTPRT | Anti-prettifier: This function checks if the code has been prettified |
| INFLP | Inifinite Loop: This section of code will trap execution and never return |

