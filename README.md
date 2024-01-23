[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13402909)
# DGL 113 2024WI Assignment #2

Clone the repository on to your local computer, preview the docs/index.html page to get a general idea of the webpage functionality and layout.
Open index.html in your VS Code to examine how the page is structured. Then complete the following tasks.
Create a new file in the `docs` folder called `app.js`.

At the top of the `docs/app.js` file, add the `use strict` directive:

```javascript
'use strict';
```

Add a `<script>` element to the `index.html` file to include the `app.js` script.
Place the `<script>` element just before the closing `</body>` tag just like
the script element that is used to include the `main.js` script.

The following functions already exist and you can use them directly:

`getTaxRate(type)` returns the current tax rate (e.g., 0.0755) of the given `type`; `type`
can be one of the strings `PST` or `GST`.

`getNightlyRate()` returns the current nightly rate such as 145.99.

When the user clicks on the "New Invoice" button,
your `doInvoice()` function will be called.

In `docs/app.js`, define the `doInvoice()` function as follows:

1. Prompt for the guest's name.
1. Show the guest's name in the sub-heading of the page(\*).
1. Prompt for the number of nights.
1. Show the number of nights in the invoice(\*).
1. Show the nightly rate (dont forget to use the `getNightlyRate()`
   function) in the invoice(\*).
1. Calculate the subtotal.
1. Show the subtoal in the invoice(\*).
1. Show the PST rate (dont forget to use the `getTaxRate()`
   function) in the invoice(\*).
1. Calculate the dollar amount of the PST.
1. Show the dollar amount of the PST in the invoice(\*).
1. Show the GST rate (dont forget to use the `getTaxRate()`
   function) in the invoice(\*).
1. Calculate the dollar amount of the GST.
1. Show the dollar amount of the GST in the invoice(\*).
1. Calculate the grand total.
1. Show the grand total in the invoice(\*).

Declare any local variables that you need inside your function.

There should be no global variables in your `docs/app.js` file.

(\*) Don't forget about the trick you can use to update
the content of an HTML element. If you know that the HTML
element has its `id` attribute set (e.g. `xyz`) then
you can set the `textContent` property of the element
directly as follows:

```javascript
xyz.textContent = 'new value';
```

(\*\*) Remember also that you can use the `.toFixed(n)` method
on a numeric value to convert it to a string with
a fixed number of decimal places.

NOTE: Only modify the `docs/app.js` and `docs/index.html` files. Do not make changes to any other files.
