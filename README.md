## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

To Do List
## Database Setup
✅ Make your table
✅ Add user_id foreign key relation (default to uid())
✅ Add RLS user_id = uid() for all actions
## Create Page
✅ Add your form
✅ Write your create function in fetch-utils.js
✅ Add your submit event listener
✅ Grab data using new FormData and send to supabase
Redirect to list page Validation Step: New rows are being added in supabase
## List Page: List all items
✅ Add a <ul> element
write render function in render function
TDD our render function (need a way to differentiate between purchased and unpurchased items)
Add our fetch function in fetch-utils.js
Write a function called displayListItems() : grab all the data from supabase, use our render function to display
On load, call displayListItems() Validation step: you can see rows on the page -- sign in as another user and ensure that you're only seeing authed user's data
## List Page: Delete Items
Add a delete button
Add delete all items function in fetch-utils.js
Add event listener to call delete function and remove all items from the list
## List Page: Update Items
Write a function in fetch-utils called updateItem
Add a click event handler to our list items that updates individual items in supabase
call displayListItems()