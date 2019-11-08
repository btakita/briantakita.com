---
title: Tag Graph Naming Convention
author: Brian Takita
date: 4/15/19 16:20
---

```js exec frontmatter
```

## Scope

This article is primarily scoped to the Ontology of the "Tag Graph".
In it, the name of this method will be deconstructed, along with the methodology.
There will be some treatment into why or the implications of design choices as well,
	but that will be limited to keep the scope focused on the Ontology.
Emergent Properties or Gestalt resulting from
	the combination of multiple elements of this methodology
	will be given limited treatment, with future posts giving fuller treatments.

<!--more-->

## Deconstructing "Tag Graph"

A phrase can be treated as a series of tags in a one dimensional graph, which create the context for meaning.

Ordinally, the phrase "Tag Graph" can be read
	left to right, right to left, or from other combinations of ways.
The progression of reading each word builds a context.
The order (left to right/right to left) of read words, generates a graph of
	progressive contextual development.

### Left to Right: Tag Graph Naming Convention

This sequence follows the English rules of Grammar for a phrase.

The object is "<a target="_blank" href="https://en.wiktionary.org/wiki/convention">Convention</a>":
	A practice or procedure widely observed in a group,
	especially to facilitate social interaction; a custom.  

The prepositions are:

* <a target="_blank" href="https://en.wiktionary.org/wiki/tag">Tag</a>
	- A keyword, term, or phrase associated with or assigned to data, media, and/or information enabling keyword-based classification; often used to categorize content.
* <a target="_blank" href="https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)">Graph</a>
	- a graph is a structure amounting to a set of objects in which some pairs of the objects are in some sense "related"
* <a target="_blank" href="https://en.wiktionary.org/wiki/naming">Naming</a>
	- The process of giving names to things.
			
The vector can be used:

⟨Tag, Graph, Naming, Convention⟩

Subvectors can also be extracted:

⟨⟨Tag, Graph⟩, ⟨Naming, Convention⟩⟩⟩

### Right to Left: Convention Naming Graph Tag

If one reads the phrase right to left, while applying the rules of grammar,
	a different meaning is built from the reversed phrase.

However, if one treats each word as a Tag, then the mix of Tags, can yield
	a set of derivative meanings, often related to the primary order of
	these tags.
To stay on scope, this will be left as an exercise to the reader.

⟨Convention, Naming, Graph, Tag⟩

## Constituent Parts

What makes a variable name?
The rules of the Javascript language will be used as a primary example,
	with treatments for other languages.

Javascript allows the alphanumeric characters, `_`,
	& `$` as valid characters to represent the names
	of variables (which include functions, classes, etc.).
The variable name may not begin with a number.
The regex for a valid name is `/^[a-zA-Z_\$][a-zA-Z0-9_\$]*/`.

Other programming languages may use other characters
	(e.g. Ruby utilizes `@` to represent an instance variable)
	or not utilize some characters (e.g. `$`).
Most modern programming languages allow alphanumeric characters
	& underscores `_` to be used for variable or Type names.

### Tag

A tag (T) is composed of a vector of tags or a word.

<pre>
T = ⟨T⟩
</pre>

<pre>
T<sub>0...i</sub> = ⟨T<sub>0</sub>,...,T<sub>i</sub>⟩
</pre>

<pre>
T = ⟨⟨Tag, Graph⟩, ⟨Naming, Convention⟩⟩
</pre>

### Underscores

A vector of `_` characters have different meanings.

### Single Underscore, `_`

The Tag Graph Naming Convention build on the single underscore naming convention.
A single underscore represents a linkage of words into a single tag.
This series reads from general to specific, where the instance type is the last segment,
	while the context are the beginning segments.
	
For example `customer_id` has the context being `customer` and the `id` being the instance type.

A leading single underscore, `_`, represents a function that returns the value represented by a Tag.

<pre>
`_` = f
</pre>

<pre>
f(...) = O<sub>T</sub>
</pre>

<pre>
customer = _customer()
</pre>

If there are multiple segments, one can think of a series where each word is passed to the next word.

<pre>
my_customer_id
T = ⟨my, customer, id⟩
</pre>


### Double Underscore, `__`

A double underscore, `__`, represents an arrow relation between Tags.

<pre>
R = &#123;⟨T<sub>0</sub>, T<sub>1</sub>⟩,...,⟨T<sub>i-1</sub>, T<sub>i</sub>⟩&#125;
</pre>

A Set of Relations can be reduced into a single Relation.

<pre>
R<sub>0,i</sub> = &#123;R<sub>0,1</sub>,...,R<sub>i-1,i</sub>&#125;
</pre>

Where:

<pre>
R = T<sub>0</sub>__T<sub>1</sub>__T<sub>2<sub>0</sub></sub>_T<sub>2<sub>1</sub></sub>__T<sub>3<sub>0</sub></sub>__T<sub>3<sub>1</sub></sub>
</pre>

#### Direction of `__`

The Tags are related from specific (i.e. instance) to general (i.e. context).

<pre>
R<sub>i<sub>specific</sub>,i<sub>general</sub></sub>
</pre>

For example:

<pre>
a1__customer__active
</pre>

Is a 1-dimensional array (instance) of customer that is of active context.

##### Considerations for specific to general ordering

When working with a value, the instance is the interface to the concept.
As demonstrated with "Left to Right" & "Right to Left" deconstruction of the title,
	Order affects meaning & building of context.
Order also has Temporal & Proximal characteristics. 

##### Temporal reasons for specific to general ordering

If one models an agent reading the code at the rate of one Tag per cycle,
the <span class=code>T<sub>0</sub></span> is read & processed in 1 cycle &
further context is built over subsequent cycles.
	
This requires the fewest number of cycles to model the type of instance
	& related local context.
	
Where `n` is the number of unique Tags in Scope `S`.

<pre>
S = (T<sub>0</sub>,...,T<sub>n</sub>)
</pre>

If the local programmatic scope is using a set of Tags with different
	instance types but the same contextual type:

<pre>
T<sub>0,0</sub> ≠ T<sub>1,0</sub>
... 
T<sub>0,i-1</sub> = T<sub>1,i-1</sub>
T<sub>0,i</sub> = T<sub>1,i</sub>
</pre>

the programmer can distinguish the different Tags in`log n` time
	vs `n` time for
	<span class=code>R<sub>i<sub>general</sub>, i<sub>specific</sub></sub></span>

If the local programmatic scope is using a set of Tags with the same
	instance type but different contextual types:

<pre>
T<sub>0,0</sub> = T<sub>1,0</sub>
... 
T<sub>0,i-1</sub> = T<sub>1,i-1</sub>
T<sub>0,i</sub> ≠ T<sub>1,i</sub>
</pre>
	
it would be `n` time to distinguish the ordering
	vs <span class=code>log n</span> time for
	<span class=code>R<sub>i<sub>general</sub>, i<sub>specific</sub></sub></span>

In this case, it would be faster `log n` 
	to reverse the Tag reading from context to instance (right to left).

The effect is the programmer has quick access to the instance type,
	when reading the Tag forward,
	while having quick access to the context,
	when reading the Tag backward.
	
##### Proximal reasons for specific to general ordering

When setting a local variable from a Tag, the programmer can use the specific subTag,
	<span class=code>T<sub>i<sub>specific</sub></sub></span>
	as the local variable name.

This enables shorter local variable	names, assuming local variable names are unique.

<span class=code>T<sub>i<sub>specific</sub></sub></span>
	is proximally closer to the beginning of the line
	or the operator token (`=`, `<`, `>`).
Since <span class=code>T<sub>i<sub>specific</sub></sub></span>
	is proximally closer, the programmer is more likely to see
	<span class=code>T<sub>i<sub>specific</sub></sub></span>
	without having to scan across the line of code.
	<span class=code>T<sub>i<sub>specific</sub></sub></span>
	is more relevant to the runtime, as it expresses instance Types.

#### Open Ended Double Underscore `__`

An open ended `__` is composed of a subset of the Tags connected to a general context.

The relation seen above can be reduced in either direction:

Setting a variable including
	<span class=code>T<sub>i<sub>specific</sub></sub></span>
	means the variable is an value of the instance type. 

<pre>
T<sub>0</sub>__ = T<sub>0</sub>__T<sub>1</sub>__T<sub>2<sub>0</sub></sub>_T<sub>2<sub>1</sub></sub>__T<sub>3<sub>0</sub></sub>__T<sub>3<sub>1</sub></sub>
</pre>

Setting a variable including

<span class=code>T<sub>i<sub>general</sub></sub></span>
	means the variable is an value tagged with the general type. 

<pre>
__T<sub>3<sub>0</sub></sub>__T<sub>3<sub>1</sub></sub> = T<sub>0</sub>__T<sub>1</sub>__T<sub>2<sub>0</sub></sub>_T<sub>2<sub>1</sub></sub>__T<sub>3<sub>0</sub></sub>__T<sub>3<sub>1</sub></sub>
</pre>

### Higher order Underscores

It is logically possible to have more than 2 underscores have additional meaning.
While I have not encountered a situation where I used more than 2 underscores,
	it is worth the thought experiment to consider what more that 2 underscores could mean.

One could relate `nth` order of logic is the
	<span class=code>n<sub>underscore</sub></span>

<pre>
n<sub>order</sub> = n<sub>underscore</sub> - 1
</pre>

Relating to 1st order logic (`_`) is an individual Tag.
Relating to 2nd order logic (`__`) is a Vector of Tags.
Relating to 3rd order logic (`___`) is a Vector of Vectors of Tags.

It becomes decreasingly practical to a human to use higher order underscores.
One way to mitigate is to use a number representing order logic.
For example `a1_` could represent a 1 dimensional array,
	`a3_` could represent 3 dimensional array.
	
### Triple Underscore `___`

If we treat 3 underscores as the combination of 1 & 2 underscores,
	we can model it as a factory of relations,
	which includes an array (`___ball`)
	and a dimension in a matrix (`ball__red___cube__green`).

<pre>
___ball
ball__red__sally___cube__green__bob
</pre>

As noted previously, more than 2 underscores are difficult for a human to interpret,
	so this usage will probably not be common.

### Abbreviations

Abbreviations can be used for common types, programmatic, or mathematical notation.

#### a[0-9]+

`a[0-9]+` represents an nth dimensional array.

For example `a1__vehicle` represents a 1 dimensional array of vehicles,
	while `a2__vehicle` represents a 2 dimensional array (array of arrays) of vehicles.

#### arr

`arr` represents a single dimensional array.
`arr` can be join with additional `arr` to represent higher dimensional arrays.
For example, `arr__vehicle` represent a 1 dimensional array of vehicles,
	while `arr__arr__vehicle` represents a 2 dimensional array (array of arrays) of vehicles.

#### ctx

`ctx` represents a context object holding data related to the following Tag context.

#### fn

`fn` represents a function. It is synonymous with a leading `_`,
	and used to explicitly mean a function in cases of ambiguity.

#### idx

`idx` represents an index, of type integer.

### txt

`txt` represents text.
