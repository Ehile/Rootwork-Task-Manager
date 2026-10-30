# Rootwork Task Manager (Phase 1 Milestone)

Run with: `node task-manager.js`

## What the program does
It is a console task manager. It keeps my tasks in an array of objects, prints them, counts how many are completed and pending, finds high-priority tasks that are still pending, counts tasks in each category, and lets me add a new task. All the numbers are worked out from the data, not typed in by hand.

## How I broke the problem down
1. Store the data: an array `tasks` of objects with `title`, `category`, `completed` and `priority`.
2. Show every task: loop through the array and print each one in a readable line.
3. Count completed and pending tasks: loop with two counters.
4. Find high-priority pending tasks: loop with a condition, collect matches in a new array, and print a message if it is empty.
5. Count tasks in a category: loop and add 1 whenever the category matches.
6. Add a task: build a new object and `push()` it onto the array, then print the new total and list to prove it worked.
Each piece became its own function so the program is not one long block.

## Concepts I used
- **Arrays and objects:** `tasks` is an array of objects; I read fields like `task.priority`.
- **for loops:** every function loops from index 0 while `i < list.length`.
- **Conditionals and logical operators:** `if / else` in `getStats`; `&&` and `!` in `findHighPriorityPending`.
- **Functions:** `displayTasks`, `getStats`, `findHighPriorityPending`, `countByCategory` and `addTask`, using parameters and `return`.
- **push():** adds a task to `tasks` and collects matches in `findHighPriorityPending`.
- **Counters:** `completed`, `pending` and `count` increase inside loops.

## Hardest part
The hardest part was understanding how the loop conditions work and why they stop, especially `i < list.length` versus `i <= list.length` (see Bug 1 in `DEBUG_LOG.md`). The second hardest was seeing that a function can return an object (`getStats`) holding three results at once.

## One thing I would improve
I would let the user mark a task as completed and delete a task by title, and add a function to sort tasks by priority. I would also validate input so that `addTask` only accepts "low", "medium" or "high" as a priority.

## AI disclosure
I used AI (Claude) to help build the program and to draft this README and debug log structure. I accepted its suggestion to split the work into small functions such as `getStats` and `countByCategory`, and to return an object from `getStats`. I had to understand and verify things myself: I ran the program, read every line of output, checked the counts against my data, and reproduced the two bugs in `DEBUG_LOG.md` myself to see the errors and fix them. I also changed the task data to my own.