# Todo List App

A simple todo list application using vanilla JavaScript that supports adding, editing, completing, and deleting tasks. Data is persisted in `localStorage`.

---

## Features

- Add new todo items
- Mark todo items as completed/uncompleted
- Edit existing todo items
- Delete todo items
- Data persistence using `localStorage`

---

## Usage

1. Open the HTML file containing this script in a browser.
2. Enter a todo item in the input field and click the button to add it.
3. Click the checkbox to toggle completion status.
4. Click the pencil icon to edit a todo item.
5. Click the "x" to delete a todo item.
6. Todos are saved automatically and restored on page reload.

---

## Code Overview

- `todoItems` array holds todo objects: `{ id, value, completed }`.
- Data is saved and retrieved from `localStorage` key `"todoList"`.
- `renderListItems()` updates the UI dynamically.
- Unique IDs are generated via `uuid.v4()` (ensure `uuid` library is included).

---

## Dependencies

- [UUID](https://www.npmjs.com/package/uuid) library for generating unique IDs (include it via CDN or npm).

---

## Notes

- Make sure to include the `uuid` library in your HTML for ID generation, e.g.:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js"></script>
