// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

// Flags: --harmony-bigint

// TODO(adamk/jkummerow/neis): Support BigInts in TF unary ops.
// Flags: --noopt

var data = [{
  a: "-989c298c6fc3",
  r: "-989c298c6fc2"
}, {
  a: "bff2c86c449a56",
  r: "bff2c86c449a57"
}, {
  a: "-6fb15264369b63e3b92d6f74458140d4b62a56ecbfca000492b6b8a0c56c651ebaecdd1",
  r: "-6fb15264369b63e3b92d6f74458140d4b62a56ecbfca000492b6b8a0c56c651ebaecdd0"
}, {
  a: "e161f6284b91fa2646dc0f162c575bb8a0d0f5bfee26748b7181413567",
  r: "e161f6284b91fa2646dc0f162c575bb8a0d0f5bfee26748b7181413568"
}, {
  a: "-4d073653cc812",
  r: "-4d073653cc811"
}, {
  a: "-ce31549364717dea9d1bf30baed642f",
  r: "-ce31549364717dea9d1bf30baed642e"
}, {
  a: "2ae123a62361f1de2cc5ca9cfd9658f47d",
  r: "2ae123a62361f1de2cc5ca9cfd9658f47e"
}, {
  a: "-4820298153b7bbd86337ad72e0d1ac7448de99bc6ce4c43c2",
  r: "-4820298153b7bbd86337ad72e0d1ac7448de99bc6ce4c43c1"
}, {
  a: "2e",
  r: "2f"
}, {
  a: "-8f3b598ac2ab8a78a2d3e1f7ab1124b05a830aa1261bf57d8de2a",
  r: "-8f3b598ac2ab8a78a2d3e1f7ab1124b05a830aa1261bf57d8de29"
}, {
  a: "-5c070fdee0d3f4a9adc63",
  r: "-5c070fdee0d3f4a9adc62"
}, {
  a: "-3700cd6a6d1e68de1",
  r: "-3700cd6a6d1e68de0"
}, {
  a: "56c68c",
  r: "56c68d"
}, {
  a: "-1ab894376fcf0dab9c",
  r: "-1ab894376fcf0dab9b"
}, {
  a: "-937dcf37c57588e55260c3eea20318",
  r: "-937dcf37c57588e55260c3eea20317"
}, {
  a: "-f8ee63b438580a8915baf84edcfd0688247905e593e153644a88761bab0",
  r: "-f8ee63b438580a8915baf84edcfd0688247905e593e153644a88761baaf"
}, {
  a: "-c63d4353ddf575bf02",
  r: "-c63d4353ddf575bf01"
}, {
  a: "-bef439cc990a8b1d69b80fa7b3c703ba2",
  r: "-bef439cc990a8b1d69b80fa7b3c703ba1"
}, {
  a: "6007edbd20b0ba90d86cf80e871e898c8907bb37",
  r: "6007edbd20b0ba90d86cf80e871e898c8907bb38"
}, {
  a: "-692b36b5e874a448415678ac2b4d0a61c75bdc1674ae14d753cad7d46846",
  r: "-692b36b5e874a448415678ac2b4d0a61c75bdc1674ae14d753cad7d46845"
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var a = BigInt.parseInt(d.a, 16);
  var r = ++a;
  if (d.r !== r.toString(16)) {
    print("Input:    " + a.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}
