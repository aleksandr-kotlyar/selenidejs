import { Locator } from './locators/locator';
import { Collection } from './collection';
import { By, WebElement } from 'selenium-webdriver';
import { ElementCondition } from '../conditions/elementCondition';
export declare class Element {
    static beforeActionHooks: ((element: Element, actionName: string) => void)[];
    static afterActionHooks: ((element: Element, actionName: string, actionError?: Error) => void)[];
    private readonly locator;
    constructor(locator: Locator<Promise<WebElement>>);
    click(): Promise<void>;
    clickByJS(): Promise<void>;
    setValue(value: string | number): Promise<void>;
    setValueByJS(value: string | number): Promise<void>;
    executeScript(scriptOnThisWebElement: string | Function, ...additionalArgs: any[]): Promise<{}>;
    sendKeys(value: string | number): Promise<void>;
    doubleClick(): Promise<void>;
    hover(): Promise<void>;
    contextClick(): Promise<void>;
    pressEnter(): Promise<void>;
    pressEscape(): Promise<void>;
    pressTab(): Promise<void>;
    scrollIntoView(): Promise<void>;
    should(condition: ElementCondition, timeout?: number): Promise<Element>;
    shouldNot(condition: ElementCondition): Promise<Element>;
    waitUntil(condition: ElementCondition, timeout?: number): Promise<boolean>;
    waitUntilNot(condition: ElementCondition, timeout?: number): Promise<boolean>;
    is(condition: ElementCondition, timeout?: number): Promise<boolean>;
    isNot(condition: ElementCondition): Promise<boolean>;
    matching(condition: ElementCondition, timeout?: number): Promise<boolean>;
    matchingNot(condition: ElementCondition): Promise<boolean>;
    isVisible(): Promise<boolean>;
    isPresent(): Promise<boolean>;
    isAbsent(): Promise<boolean>;
    value(): Promise<string>;
    text(): Promise<string>;
    attribute(attributeName: string): Promise<string>;
    innerHtml(): Promise<string>;
    outerHtml(): Promise<string>;
    getWebElement(): Promise<WebElement>;
    private fireEvent(...events);
    private performActionOnVisible(action, actionName);
    parent(): Element;
    followingSibling(predicate?: string): Element;
    precedingSibling(predicate?: string): Element;
    element(cssOrXpathOrBy: string | By): Element;
    elementSmart(locator: string): Element;
    visibleElement(cssSelector: string): Element;
    all(cssOrXpathOrBy: string | By): Collection;
    toString(): string;
}
export declare function element(cssOrXpathOrBy: string | By): Element;
export declare function visibleElement(cssOrXpathOrBy: string | By): Element;
export declare function elementSmart(locator: string): Element;
