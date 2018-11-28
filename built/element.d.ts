import { By, WebElement } from 'selenium-webdriver';
import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
import { Locator } from './locators/locator';
import { SearchContext } from './locators/searchContext';
export declare class Element implements SearchContext {
    private readonly driver;
    private readonly locator;
    private readonly wait;
    constructor(locator: Locator<Promise<WebElement>> | Locator<WebElement>, driver: Driver);
    click(): Promise<Element>;
    setValue(value: string | number): Promise<Element>;
    sendKeys(value: string | number): Promise<Element>;
    doubleClick(): Promise<Element>;
    hover(): Promise<Element>;
    contextClick(): Promise<Element>;
    pressEnter(): Promise<Element>;
    pressEscape(): Promise<Element>;
    pressTab(): Promise<Element>;
    pressKey(key: string): Promise<Element>;
    scrollTo(): Promise<Element>;
    should(condition: Condition<Element>, timeout?: number): Promise<Element>;
    shouldNot(condition: Condition<Element>): Promise<Element>;
    is(condition: Condition<Element>, timeout?: number): Promise<boolean>;
    isNot(condition: Condition<Element>): Promise<boolean>;
    isVisible(): Promise<boolean>;
    isPresent(): Promise<boolean>;
    isFocused(): Promise<boolean>;
    executeScript(script: string, ...args: any[]): Promise<any>;
    text(): Promise<string>;
    hasAttribute(attributeName: string): Promise<boolean>;
    attribute(attributeName: string): Promise<string>;
    innerHtml(): Promise<string>;
    outerHtml(): Promise<string>;
    value(): Promise<string>;
    getWebElement(): Promise<WebElement>;
    parent(): Element;
    followingSibling(predicate?: string): Element;
    element(cssOrXpathOrBy: string | By): Element;
    all(cssOrXpathOrBy: string | By): Collection;
    equals(element: Element | WebElement): Promise<boolean>;
    findElements(locator: By): Promise<WebElement[]>;
    findElement(locator: By): Promise<WebElement>;
    toString(): string;
}
