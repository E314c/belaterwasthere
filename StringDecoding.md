# String Decoding

The first thing to notice is that the array of strings at the beginning are initially shuffled by 290 places.
This results in a final order of the array `_0x5112` as:
```js
[
  "w5paIRt4",
  "w5tSwpDCu0DCjDLDu0k=",
  "DsOKAcK6wpzDng==",
  "w6NgfcK7PAwUwpo=",
  "wpPCv8K4wq3Dt8KA",
  "w6zCtsOqwoR3S3M=",
  "CFHDkWt/bcOU",
  "FcOFwo0=",
  "PQ8vw4o=",
  "T28APsOI",
  "w5fDsW7DvA==",
  "w53DksK9IcOJ",
  "PBbDj8Oow5TDmsOjRgM=",
  "DcOYwovCocKA",
  "w652J0QsdSo=",
  "GAXCig==",
  "wrheKnQ0wpg5",
  "w7jCuMO2wpk=",
  "w5vDj8KhPcOUVcOR",
  "XlR1w5LCkA==",
  "w5jCkGxYRMOwwoA=",
  "U19xw4g=",
  "w43Clm8ew4vDlSo=",
  "TngQJMOd",
  "w4VPw6PCqMOQwptj",
  "woLDiWliw4U8wqnChcOd",
  "KQEzw5fDisKOwqU=",
  "NMKJW8Orw40=",
  "w4N/JMORBsKYwo/CjVc=",
  "w5vCu39zwqPChsKweA==",
  "wrTCkw8Ww6FO",
  "eETDmktlT1rCokdowpoZw6AGw6LDg8OGwq/Dn8Oiwq7CmSkFfQHDn8Omwqg=",
  "b8KMSsKlw4nCiE3DjMOUw6QPwoTDkxXCocKCwoB2wop4wps=",
  "KXXCu1Vfw4PDoAo9wp3CtyAzQsK2ZVLDnxYdwqZnJUo=",
  "IRrCkcK5wr7CpMKTwrDCl8KBHcKjMwzCq8OvU8K4w7PCkcOww7UWECc1woLCrgnDoMKKw7BGw7jDjsKfw5BaS8Ofw64=",
  "V8OSw57Csl8UwqXDrcOFYA==",
  "DSsJ",
  "DMKtwp9lD8KrYMOJEMK+ScObWA==",
  "w4pPw6o=",
  "SSXDvD8=",
  "w5bCnnZIQw==",
  "w7rDsMOVwoE=",
  "YQbCgCg8w4c=",
  "w7vCkRR2YcKjwr4=",
  "RErCjDZ6csKO",
  "dg/Cn8Kjw47DncK1",
  "wqTDv8Krwrs=",
  "XG/Clh7Dq1zDk8OQ",
  "wp3Cj1FDE8KYwrtJbg==",
  "CcOgJsOL",
  "wo/CqcK9wrg=",
  "w4LDi8OywqXDvEBuw4PDlMKmHcOVwpvCvCLChsOww5bDjsKgwrBTw7IBJsOwwpt7GX7DgmhYw6sVwqgYw48=",
  "wqlUNGs6wpc5"
]
```

## `_0x55dc`
`_0x55dc` is the function that does the decoding of the system's strings. it takes two arguments:
- `_0x5e10dc` {string} string representation of a number
- `_0x3184f5` {string} (? possibly a masking system?)

```js
// For this example I have stripped out any anti-re techniques and shims.
/**
 * This function takes in parameter to retrieve strings for other locations in the code
 * @param {string} index string representation of a number
 * @param {string} mask (? possibly a masking system?)
 * @returns {string} a string used for method calls
 */
var _0x55dc = function (index, mask) {
  index = index - 0; // For string to number conversion
  var encodedValue = dictionary[index];

  // -- Initialisation of this class -- //
  if (_0x55dc.isInitialised === undefined) {

    /**
     * @param {string} b64String Base64 encoded value
     * @param {string} encodeMask String (Used later with 'charCodeAt)
     * @returns {string}
     */
    var decode = function (b64String, encodeMask) {

      var numberArray = [], 
      temp, // Used for holding values when shuffling
      newString = '', 
      tmpStr = '';
      str1 = atob(b64String);  // decode base64 (i've moved it to a new variable)

      // For the length of the decoded string, URIencode
      for (var i = 0; i < str1.length; i++) {
        // Convert to url encoded value (%XX)
        tmpStr += '%' + ('00' + str1.charCodeAt(i).toString(16)).slice(-0x2);
      }

      // Then decode it again. (causes some characters to be combined/modified)
      str1 = decodeURIComponent(tmpStr);


      // Fill numberArray with values 0-255 in the matching indexes
      for (var i = 0; i < 256; i++) {
        numberArray[i] = i;
      }

      var y = 0;
      // Loop 255 times, y starts at 0
      for (i = 0; i < 256; i++) {
        y = (y + numberArray[i] + encodeMask['charCodeAt'](i % encodeMask.length)) % 256;
        temp = numberArray[i];
        numberArray[i] = numberArray[y];
        numberArray[y] = temp;
      }

      x = 0;
      y = 0;
      for (var i = 0; i < str1.length; i++) {
        // Increment x, but not over 255
        x = (x + 1) % 256;
        //
        y = (y + numberArray[x]) % 256;
        temp = numberArray[x];
        numberArray[x] = numberArray[y];
        numberArray[y] = temp;
        newString += String.fromCharCode(str1.charCodeAt(i) ^ numberArray[(numberArray[x] + numberArray[y]) % 256]);
      }

      return newString;
    };

    //-----------------//
    _0x55dc.isInitialised = true;
  }

  // Returned string
  return decode(encodedValue, mask);
};
```


## Strings:
note: These were decoded after I managed to get the code running in a controllable way.

| Index | Encoded | Mask | Value |
| --- | --- | --- | --- | --- |
| 0x01 | `"w5paIRt4"` | `Rl0Q` | 'undefined' |
| 0x02 | `"w5tSwpDCu0DCjDLDu0k="` | `h%a7` | 'object' |
| 0x03 | `"DsOKAcK6wpzDng=="` | `nh)U` | 'function' |
| 0x04 | `"w6NgfcK7PAwUwpo="` | `nGIV` | 'object' |
| 0x05 | `"wpPCv8K4wq3Dt8KA"` | `k6$s` | 'console' |
| 0x06 | `"w6zCtsOqwoR3S3M="` | `E(Sy` | 'console' |
| 0x07 | `"CFHDkWt/bcOU"` | `3G3[` | 'log' |
| 0x08 | `"FcOFwo0="` | `LbLs` | 'warn' |
| 0x09 | `"PQ8vw4o="` | `cKx6` | 'debug |
| 0x0a | `"T28APsOI"` | `bRZT` | 'info' |
| 0x0b | `"w5fDsW7DvA=="` | `[sQb` | 'error' |
| 0x0c | `"w53DksK9IcOJ"` | `5N7U` | 'exception' |
| 0x0d | `"PBbDj8Oow5TDmsOjRgM="` | `3G3[` | 'trace' |
| 0x0e | `"DcOYwovCocKA"` | `nK5Q` | 'console' |
| 0x0f | `"w652J0QsdSo="` | `zq7V` | 'log' |
| 0x10 | `"GAXCig=="` | `*qHT` | 'console' |
| 0x11 | `"wrheKnQ0wpg5"` | `k6$s` | 'warn' |
| 0x12 | `"w7jCuMO2wpk="` | `[sQb` | 'console' |
| 0x13 | `"w5vDj8KhPcOUVcOR"` | `YNZr` | 'debug' |
| 0x14 | `"XlR1w5LCkA=="` | `57NI` | 'console' |
| 0x15 | `"w5jCkGxYRMOwwoA="` | `YNZr` | 'info' |
| 0x16 | `"U19xw4g="` | `D#ou` | 'console' |
| 0x17 | `"w43Clm8ew4vDlSo="` | `cKx6` | 'error' |
| 0x18 | `"TngQJMOd"` | `szLW` | 'console' |
| 0x19 | `"w4VPw6PCqMOQwptj"` | `bQRK` | 'exception' |
| 0x1a | `"woLDiWliw4U8wqnChcOd"` | `LbLs` | 'console' |
| 0x1b | `"KQEzw5fDisKOwqU="` | `VWn3` | 'trace' |
| 0x1c | `"NMKJW8Orw40="` | `ouTR` | 'undefined' |
| 0x1d | `"w4N/JMORBsKYwo/CjVc="` | `pQwL` | 'protocol' |
| 0x1e | `"w5vCu39zwqPChsKweA=="` | `7Gn)` | 'domain' |
| 0x1f | `"wrTCkw8Ww6FO"` | `hbB#` | '/wp-admin/options-general.php' |
| 0x20 | `"eETDmktlT1rCokdowpoZw6AGw6LDg8OGwq/Dn8Oiwq7CmSkFfQHDn8Omwqg="` | `VWn3` | '/wp-admin/options.php' |
| 0x21 | `"b8KMSsKlw4nCiE3DjMOUw6QPwoTDkxXCocKCwoB2wop4wps="` | `P[RT` | '/wp-admin/admin-ajax.php' |
| 0x22 | `"KXXCu1Vfw4PDoAo9wp3CtyAzQsK2ZVLDnxYdwqZnJUo="` | `A[tK` | 'https://bes.belaterbewasthere.com/reserv/' |
| 0x23 | `"IRrCkcK5wr7CpMKTwrDCl8KBHcKjMwzCq8OvU8K4w7PCkcOww7UWECc1woLCrgnDoMKKw7BGw7jDjsKfw5BaS8Ofw64="` | `&zYW` | 'noConflict' |
| 0x24 | `"V8OSw57Csl8UwqXDrcOFYA=="` | `LbLs` | 'GET' |
| 0x25 | `"DSsJ"` | `wL&F` | 'Getting Nonce' |
| 0x26 | `"DMKtwp9lD8KrYMOJEMK+ScObWA=="` | `szLW` | 'log' |
| 0x27 | `"w4pPw6o="` | `WKAi` | 'exec' |
| 0x28 | `"SSXDvD8="` | `57NI` | 'match' |
| 0x29 | `"w5bCnnZIQw=="` | `l5iB` | 'POST' |
| 0x2a | `"w7rDsMOVwoE="` | `Qjwy` | 'update' |
| 0x2b | `"YQbCgCg8w4c="` | `7HUU` | 'general' |
| 0x2c | `"w7vCkRR2YcKjwr4="` | `E(Sy` | '/t3.js?' |
| 0x2d | `"RErCjDZ6csKO"` | `5N7U` | 'a3.js?' |
| 0x2e | `"dg/Cn8Kjw47DncK1"` | `WExz` | 'fake' |
| 0x2f | `"wqTDv8Krwrs="` | `mMcq` | 'fake' |
| 0x30 | `"XG/Clh7Dq1zDk8OQ"` | `8]4k` | '&reload=1' |
| 0x31 | `"wp3Cj1FDE8KYwrtJbg=="` | `CtZK` | 'ajax' |
| 0x32 | `"CcOgJsOL"` | `nGIV` | 'stop' |
| 0x33 | `"wo/CqcK9wrg="` | `l5iB` | 'https://bes.belaterbewasthere.com/rst/' |
| 0x34 | `"w4LDi8OywqXDvEBuw4PDlMKmHcOVwpvCvCLChsOww5bDjsKgwrBTw7IBJsOwwpt7GX7DgmhYw6sVwqgYw48="` | `*qHT` | 'replace' |
| 0x35 | `"wqlUNGs6wpc5"` |  |