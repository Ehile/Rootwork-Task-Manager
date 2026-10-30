// Rootwork Task Manager - Phase 1 Milestone

// ---------- Data ----------
const tasks = [
  { title: "Complete JavaScript practice", category: "Rootwork", completed: false, priority: "high" },
  { title: "Submit decision engine PR", category: "Rootwork", completed: true, priority: "high" },
  { title: "Buy data bundle", category: "Personal", completed: false, priority: "medium" },
  { title: "Wash clothes", category: "Home", completed: true, priority: "low" },
  { title: "Read about arrays", category: "Rootwork", completed: false, priority: "medium" },
  { title: "Call grandmother", category: "Personal", completed: false, priority: "high" },
  { title: "Clean the room", category: "Home", completed: false, priority: "low" }
];

// ---------- Functions ----------

// Prints every task in a list, one per line.
function displayTasks(list) {
  for (let i = 0; i < list.length; i++) {
    const task = list[i];
    let status = "Pending";
    if (task.completed) {
      status = "Completed";
    }
    console.log(
      (i + 1) + ". " + task.title +
      " | Category: " + task.category +
      " | Priority: " + task.priority +
      " | Status: " + status
    );
  }
}

// Counts total, completed and pending tasks and returns them in an object.
function getStats(list) {
  let completed = 0;
  let pending = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].completed) {
      completed++;
    } else {
      pending++;
    }
  }
  return { total: list.length, completed: completed, pending: pending };
}

// Returns a new array holding only high-priority tasks that are not completed.
function findHighPriorityPending(list) {
  const found = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].priority === "high" && !list[i].completed) {
      found.push(list[i]);
    }
  }
  return found;
}

// Counts how many tasks belong to one category.
function countByCategory(list, category) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].category === category) {
      count++;
    }
  }
  return count;
}

// Builds a new task object from the details given and adds it to the list.
function addTask(list, title, category, priority) {
  const newTask = {
    title: title,
    category: category,
    completed: false,
    priority: priority
  };
  list.push(newTask);
}

// ---------- Program ----------

console.log("=== Part 1: All tasks ===");
displayTasks(tasks);

console.log("\n=== Part 2: Statistics ===");
const stats = getStats(tasks);
console.log("Total tasks: " + stats.total);
console.log("Completed: " + stats.completed);
console.log("Pending: " + stats.pending);

console.log("\n=== Part 3: High-priority pending tasks ===");
const urgent = findHighPriorityPending(tasks);
if (urgent.length === 0) {
  console.log("No high-priority pending tasks. Well done!");
} else {
  displayTasks(urgent);
}

console.log("\n=== Part 4: Category summary ===");
console.log("Rootwork tasks: " + countByCategory(tasks, "Rootwork"));
console.log("Personal tasks: " + countByCategory(tasks, "Personal"));
console.log("Home tasks: " + countByCategory(tasks, "Home"));

console.log("\n=== Part 6: Add a task ===");
addTask(tasks, "Write README for task manager", "Rootwork", "high");
console.log("Task added. Updated total: " + getStats(tasks).total);
displayTasks(tasks);