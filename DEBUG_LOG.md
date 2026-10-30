# Debug Log

## Bug 1: Loop ran one step too far

### Problem
My `displayTasks` function crashed after printing the last task.

### What I observed
All 7 tasks printed correctly, then the program stopped with:
`TypeError: Cannot read properties of undefined (reading 'completed')`
pointing at the line `if (task.completed)`.

### What I checked
I read the error message and saw it said `undefined`, so `task` did not exist for some value of `i`. I looked at my loop condition and saw `i <= list.length`. I remembered that with 7 items the valid indexes are 0 to 6, so index 7 is empty.

### Cause
I used `<=` instead of `<`. On the last turn `i` was 7, `list[7]` is `undefined`, and `undefined.completed` is an error.

### Fix
I changed `i <= list.length` to `i < list.length`, so the loop stops after index 6. The program then ran to the end.

## Bug 2: Every category showed the same count

### Problem
`countByCategory` gave the same number for every category.

### What I observed
The category summary printed:
`Rootwork tasks: 7`, `Personal tasks: 7`, `Home tasks: 7`
even though the data clearly has 3, 2 and 2.

### What I checked
I compared the output against my task list and saw it was wrong. I looked at the `if` inside the loop and saw `list[i].category = category` with a single `=`.

### Cause
A single `=` assigns a value instead of comparing. It overwrote each task's category with the one being counted, and the assigned text is truthy, so the `if` was true every time and the count went up for every task.

### Fix
I changed `=` to `===` so it compares instead of assigns. The counts became 3, 2 and 2.