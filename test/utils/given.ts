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

import { Browser } from '../../lib/browser';
import { TestUtils } from './testUtils';
import { When } from './when';


export namespace Given {

    export async function openedEmptyPage() {
        await Browser.open(TestUtils.resourcesUrl() + 'empty.html');
    }

    export async function openedEmptyPageWithBody(html: string) {
        await openedEmptyPage();
        await When.withBody(html);
    }

}
