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

import { browser, GIVEN, data, WHEN, driver, webelements, webelement, textOf, isAbsentInDom } from './base';
import { be, have, perform } from '../../lib';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

const something = async element => { /*nothing;P*/ };

describe('Element.* commands: doubleClick', () => {

/*    it('double-clicks on element once it is present in DOM and visible', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.smallest, `
            $('body').append('<label style="display: none">Before double-click</label>')
            $('label').dblclick(function(e) {
                $('label').text('After double-click');
            });
        `);
        await GIVEN.executeScriptAfter(data.timeouts.smallerThanDefault, `
            $('label').attr('style', 'display: block');
        `);

        await browser.element('label').doubleClick();
        expect(await textOf('label')).toContain('After double-click');
    });*/

/*    it('double-clicks through then(perform.doubleClick) on element once it is present in DOM and visible',
       async () => {

        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.smallest, `
            $('body').append('<label style="display: none">Before double-click</label>')
            $('label').dblclick(function(e) {
                $('label').text('After double-click');
            });
        `);
        await GIVEN.executeScriptAfter(data.timeouts.smallerThanDefault, `
            $('label').attr('style', 'display: block');
        `);

        await browser.element('label').perform(something).then(perform.doubleClick);
        expect(await textOf('label')).toContain('After double-click');
    });*/

    it('fails to double-click with error on not present in DOM element (after timeout)', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.biggerThanDefault, `
            $('body').append('<label style="display: none">Before double-click</label>')
            $('label').dblclick(function(e) {
                $('label').text('After double-click');
            });
        `);

        await browser.element('label').doubleClick()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(await isAbsentInDom('label')).toBe(true);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, label)).double-click
Reason:
\tno such element: Unable to locate element: {"method":"css selector","selector":"label"}`
                );
            });
    });

    it('fails to double-click with error on not visible element (after timeout)', async () => {
        await GIVEN.openedEmptyPage();
        await GIVEN.executeScriptAfter(data.timeouts.smallest, `
            $('body').append('<label style="display: none">Before double-click</label>')
            $('label').dblclick(function(e) {
                $('label').text('After double-click');
            });
        `);
        await GIVEN.executeScriptAfter(data.timeouts.biggerThanDefault, `
            $('label').attr('style', 'display: block');
        `);

        await browser.element('label').doubleClick()
            .then(ifNoError => fail('should fail on timeout'))
            .catch(async error => {
                expect(await webelement('label').then(it => it.isDisplayed())).toBe(false);
                expect(error.message).toContain(`
\tTimed out after ${data.timeouts.byDefault}ms, while waiting for:
\tbrowser.element(By(css selector, label)).double-click
Reason:
\telement is hidden` // todo: consider to have here also element actual html
                );
            });
    });

});
