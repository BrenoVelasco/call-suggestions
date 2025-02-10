# React Interview

You are tasked with implementing a feature to display call suggestions. Using React, Tailwind and the initial template code provided, please reveal the top level call suggestions as a `<ul>` list, based on the sample JSON structure defined in categories.js (let’s assume this JSON structure is what an API could return).

- Indicate whether or not each category is enabled for the call.
- Clicking on a category should reveal its sub-categories, if they're enabled, and so on.
- The enabled or disabled state of each category may be indicated with an icon, a different color, or both. Feel free to make it look great!
- Each `<li>` element should be a bubble that's clickable in case there are sub-categories to reveal. Sub-categories should be displayed in a nested `<ul>` list.
- Implement adding and removing suggestions
  - There should be an "X" next to a suggestion to remove
  - There should be a "+" next to a category to add a subcategory to it (and a final "+" at the end to create a category)
