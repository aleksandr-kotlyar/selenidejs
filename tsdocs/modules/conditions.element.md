[selenidejs](../README.md) > [Conditions](../modules/conditions.md) > [element](../modules/conditions.element.md)

# Module: element

## Index

### Variables

* [isAbsent](conditions.element.md#isabsent)
* [isDisabled](conditions.element.md#isdisabled)
* [isEnabled](conditions.element.md#isenabled)
* [isFocused](conditions.element.md#isfocused)
* [isHidden](conditions.element.md#ishidden)
* [isPresent](conditions.element.md#ispresent)
* [isSelected](conditions.element.md#isselected)
* [isVisible](conditions.element.md#isvisible)

### Functions

* [hasAttribute](conditions.element.md#hasattribute)
* [hasAttributeWithValue](conditions.element.md#hasattributewithvalue)
* [hasAttributeWithValueContaining](conditions.element.md#hasattributewithvaluecontaining)
* [hasCssClass](conditions.element.md#hascssclass)
* [hasExactText](conditions.element.md#hasexacttext)
* [hasText](conditions.element.md#hastext)
* [hasVisibleElement](conditions.element.md#hasvisibleelement)

---

## Variables

<a id="isabsent"></a>

### `<Const>` isAbsent

**● isAbsent**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isPresent, 'is absent')

*Defined in [conditions.ts:112](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L112)*

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isEnabled, 'is disabled')

*Defined in [conditions.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L106)*

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *[ElementCondition](../#elementcondition)* = 
            conditionFromAsyncQuery(query.element.isEnabled)

*Defined in [conditions.ts:103](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L103)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *[ElementCondition](../#elementcondition)* = 
            conditionFromAsyncQuery(query.element.isFocused)

*Defined in [conditions.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L115)*

___
<a id="ishidden"></a>

### `<Const>` isHidden

**● isHidden**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isVisible, 'is hidden')

*Defined in [conditions.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L91)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *[ElementCondition](../#elementcondition)* = 
            conditionFromAsyncQuery(query.element.isPresent)

*Defined in [conditions.ts:109](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L109)*

___
<a id="isselected"></a>

### `<Const>` isSelected

**● isSelected**: *[ElementCondition](../#elementcondition)* = 
            hasAttribute('elementIsSelected')

*Defined in [conditions.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L100)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *[ElementCondition](../#elementcondition)* = 
            conditionFromAsyncQuery(query.element.isVisible)

*Defined in [conditions.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L88)*

___

## Functions

<a id="hasattribute"></a>

### `<Const>` hasAttribute

▸ **hasAttribute**(name: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvalue"></a>

### `<Const>` hasAttributeWithValue

▸ **hasAttributeWithValue**(name: *`string`*, value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:125](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvaluecontaining"></a>

###  hasAttributeWithValueContaining

▸ **hasAttributeWithValueContaining**(name: *`string`*, partialValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:133](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L133)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| partialValue | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hascssclass"></a>

###  hasCssClass

▸ **hasCssClass**(cssClass: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:141](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L141)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasexacttext"></a>

### `<Const>` hasExactText

▸ **hasExactText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L122)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hastext"></a>

### `<Const>` hasText

▸ **hasText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L119)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasvisibleelement"></a>

### `<Const>` hasVisibleElement

▸ **hasVisibleElement**(by: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___
