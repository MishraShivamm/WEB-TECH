/* 

Element: insertAdjacentElement() method

The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.

Syntax
js
Copy to Clipboard
insertAdjacentElement(position, element)
Parameters
position
A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.
element
The element to be inserted into the tree.

Return value
The element that was inserted, or null, if the insertion failed.

Exceptions
SyntaxError DOMException
Thrown if the position specified is not a recognized value.

TypeError
Thrown if the element specified is not a valid element.

Visualization of position names
html
Copy to Clipboard
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
