# String Decoding

The first thing to notice is that the array of strings at the beginning are initially shuffled by 290 places.
This results in a final order of the array `_0x5112` is:
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

## Strings:

| Index | Encoded | Mask | Value |
| --- | --- | --- | --- | --- |
| 0x01 | `"w5paIRt4"` |  |  |
| 0x02 | `"w5tSwpDCu0DCjDLDu0k="` | `h%a7` | 'object' |
| 0x03 | `"DsOKAcK6wpzDng=="` | `nh)U` | 'function' |
| 0x04 | `"w6NgfcK7PAwUwpo="` | `nGIV` | 'object' |
| 0x05 | `"wpPCv8K4wq3Dt8KA"` |  |  |
| 0x06 | `"w6zCtsOqwoR3S3M="` |  |  |
| 0x07 | `"CFHDkWt/bcOU"` |  |  |
| 0x08 | `"FcOFwo0="` |  |  |
| 0x09 | `"PQ8vw4o="` |  |  |
| 0x0a | `"T28APsOI"` |  |  |
| 0x0b | `"w5fDsW7DvA=="` |  |  |
| 0x0c | `"w53DksK9IcOJ"` |  |  |
| 0x0d | `"PBbDj8Oow5TDmsOjRgM="` |  |  |
| 0x0e | `"DcOYwovCocKA"` |  |  |
| 0x0f | `"w652J0QsdSo="` |  |  |
| 0x10 | `"GAXCig=="` |  |  |
| 0x11 | `"wrheKnQ0wpg5"` |  |  |
| 0x12 | `"w7jCuMO2wpk="` |  |  |
| 0x13 | `"w5vDj8KhPcOUVcOR"` |  |  |
| 0x14 | `"XlR1w5LCkA=="` |  |  |
| 0x15 | `"w5jCkGxYRMOwwoA="` |  |  |
| 0x16 | `"U19xw4g="` |  |  |
| 0x17 | `"w43Clm8ew4vDlSo="` |  |  |
| 0x18 | `"TngQJMOd"` |  |  |
| 0x19 | `"w4VPw6PCqMOQwptj"` |  |  |
| 0x1a | `"woLDiWliw4U8wqnChcOd"` |  |  |
| 0x1b | `"KQEzw5fDisKOwqU="` |  |  |
| 0x1c | `"NMKJW8Orw40="` | `ouTR` | 'undefined' |
| 0x1d | `"w4N/JMORBsKYwo/CjVc="` | `pQwL` | 'protocol' |
| 0x1e | `"w5vCu39zwqPChsKweA=="` | `7Gn)` | 'domain' |
| 0x1f | `"wrTCkw8Ww6FO"` | `hbB#` | '/wp-admin/options-general.php' |
| 0x20 | `"eETDmktlT1rCokdowpoZw6AGw6LDg8OGwq/Dn8Oiwq7CmSkFfQHDn8Omwqg="` | `VWn3` | '/wp-admin/options.php' |
| 0x21 | `"b8KMSsKlw4nCiE3DjMOUw6QPwoTDkxXCocKCwoB2wop4wps="` | `P[RT` | '/wp-admin/admin-ajax.php' |
| 0x22 | `"KXXCu1Vfw4PDoAo9wp3CtyAzQsK2ZVLDnxYdwqZnJUo="` | `A[tK` | 'https://bes.belaterbewasthere.com/reserv/' |
| 0x23 | `"IRrCkcK5wr7CpMKTwrDCl8KBHcKjMwzCq8OvU8K4w7PCkcOww7UWECc1woLCrgnDoMKKw7BGw7jDjsKfw5BaS8Ofw64="` | `&zYW` | 'noConflict' |
| 0x24 | `"V8OSw57Csl8UwqXDrcOFYA=="` |  |  |
| 0x25 | `"DSsJ"` |  |  |
| 0x26 | `"DMKtwp9lD8KrYMOJEMK+ScObWA=="` |  |  |
| 0x27 | `"w4pPw6o="` |  |  |
| 0x28 | `"SSXDvD8="` |  |  |
| 0x29 | `"w5bCnnZIQw=="` |  |  |
| 0x2a | `"w7rDsMOVwoE="` |  |  |
| 0x2b | `"YQbCgCg8w4c="` |  |  |
| 0x2c | `"w7vCkRR2YcKjwr4="` |  |  |
| 0x2d | `"RErCjDZ6csKO"` |  |  |
| 0x2e | `"dg/Cn8Kjw47DncK1"` |  |  |
| 0x2f | `"wqTDv8Krwrs="` |  |  |
| 0x30 | `"XG/Clh7Dq1zDk8OQ"` |  |  |
| 0x31 | `"wp3Cj1FDE8KYwrtJbg=="` |  |  |
| 0x32 | `"CcOgJsOL"` | `nGIV` | 'stop' |
| 0x33 | `"wo/CqcK9wrg="` | `l5iB` | `"https://bes.belaterbewasthere.com/rst/"` |
| 0x34 | `"w4LDi8OywqXDvEBuw4PDlMKmHcOVwpvCvCLChsOww5bDjsKgwrBTw7IBJsOwwpt7GX7DgmhYw6sVwqgYw48="` | `*qHT` | `replace` |
| 0x35 | `"wqlUNGs6wpc5"` |  |