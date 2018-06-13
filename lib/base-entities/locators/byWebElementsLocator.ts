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

import {browser} from 'protractor';
import {By, WebElement} from 'selenium-webdriver';
import {Element} from '../element';
import {Locator} from './locator';


export class ByWebElementsLocator implements Locator<Promise<WebElement[]>> {

    private readonly by: By;
    private readonly searchContext: Element;

    constructor(by: By, searchContext?: Element) {
        this.by = by;
        this.searchContext = searchContext;
    }

    async find(): Promise<WebElement[]> {
        // return this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await (element.all(this.by)).getWebElements();
        return this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await browser.findElements(this.by);
    }

    toString(): string {
        return `${this.searchContext ? this.searchContext.toString() : 'browser'}.all(${this.by})`;
    }

}
