# JavaScript Type Coercion Bug

This repository demonstrates a common JavaScript bug caused by loose typing and implicit type coercion.  The `add` function is intended to add two numbers, but it unexpectedly concatenates strings when one of the inputs is a string.

## Bug Description

The `bug.js` file contains a function called `add` that takes two arguments. When both arguments are numbers, the function works as expected, adding them together. However, when one of the arguments is a string, JavaScript performs string concatenation instead of numerical addition, leading to an incorrect result. This is due to JavaScript's automatic type coercion.

## Solution

The `bugSolution.js` file provides a corrected version of the `add` function. This version explicitly checks the type of the inputs and handles non-numeric inputs appropriately, ensuring that the function always performs numerical addition.