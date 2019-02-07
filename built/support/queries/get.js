"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("../../queries");
/**
 * to be used in the following context:
 *   `element.click().then(get.text)`
 */
var get;
(function (get) {
    get.text = async (element) => element.get(queries_1.query.element.text);
    // todo: add others...
})(get = exports.get || (exports.get = {}));
//# sourceMappingURL=get.js.map