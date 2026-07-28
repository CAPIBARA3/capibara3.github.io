---
title: 16b Python Basics
author: joanalnu
---

> [!ABSTRACT]
> Python is the "Swiss Army Knife" of modern science. It is versatile, beginner-friendly programming language used for everything from data analysis and scientific research to automation and web development. Its simple and readable syntax makes it the perfect tool for learning fundamental programming concepts.

> [!WARNING]- Prerequisites
> - [11_unix](11_unix.md)
> - [12_terminal](12_terminal.md)
> - [16a_configuring_python_pip](16a_configuring_python_pip.md)
> - A configured Code Editor (e.g., VS Code)

# 1. Running Python Code

There are three primary ways to interact with Python:

### Option 1: Interavtive Shell
Best for quick calculations or testing single lines of code. Open your terminal and type `python3`.
```python
>>> 5 + 3
8
>>> print("Hello!")
Hello!
```
*Press `Ctrl+D`or type `exit()` to leave.

### Option 2: Python Scripts (`.py`)
For actual projects, you write a code in a file and run it all at once.
1. Create `hello.py`
2. Run it via terminal: `python3 hello.py`

> [!TIP]- Terminal wihtin Code Editors
> Many integrated development environments (IDEs) and some code editors like VS Code, do have an integrated terminal function within the application. Some even have a run button (▶) (e.g., VS Code if you have the Python extension installed).

### Option 3: Python Notebooks
Python notebooks (`.ipynb`) allow you to write code blocks and interact with the results at the same time, maintaining a global variable storage for the session. They also allow to combine Python code cells with Markdown explanation cells. This topic is handled in [AB Jupyter Notebooks](4_advanced_coding/)

# 2. Variables and Data Types

A **Variable** is a named container for storing data. Python identifies the type of the data automatically, unlike `C++` for example.

| Type | Description | Example |
|:---|:---|:---|
| **String** (`str`) | Text data | `name = "Alice"`, `friend = 'Bob'` |
| **Integer** (`int`) | Whole Numbers | `age = 25` |
| **Float** (`float`) | Decimal numbers | `pi = 3.14` |
| **Boolean** (`bool`) | Logic | `is_ready = True`, `repeat = False` |

> [!TIP]- Type Conversion
> You can change types using functions like `int()`, `str()`, or `float()`. Example:
> ```python
> >>> str(25)
> "25"
> >>> int(3.14)
> 3
> >>> float("25.25")
> 25.25
> ```
> You can also use the function `isinstance(<variable-name>, <type>)` to know the type of a variable.

# 3. Operations

### Arithmetics
Python handles math naturally using standard operators:
* `+`, `-`, `*`, `/` (Standard math)
* `//` (Floor division: 10 // 3 = 3)
* `**` (Exponentiation: 2 ** 3 = 8)
* `%` (Modulo: gives the remainder)

### Strings
You can combine strings with `+` or use **f-strings** for easy formatting:
```python
name = "Bob"
print(f"Hello, {name}!") # Output: Hello, Bob!
```

# 4. Control Flow

### If/Else Statements
Use logic to decide which code to run.
```python
age = 20
if age >= 18:
    print("Adult")
else:
    print("Minor")
```

### Loops
* **While Loop:** Runs as long as a condition is true.
* **For Loop:** Iterates over a sequence (like a list or a range of numbers).
```python
for i in range(3):
    print(f"Counting: {i}") # Prints 0, 1, 2
```

# 5. Collections: Lists and Dictionaries

### Lists (Ordered)
Use square brackets `[]` to store a sequence of items.
* Access items by index: `fruits[0]` is the first item.
* Add items: `fruits.append("mango")`.

### Dictionaries (Key-Value)
Use curly braces `{}` to store data in pairs.
```python
student = {"name": "Alice", "grade": "A"}
print(student["name"]) # Alice
```

# 6. Functions

Functions are reusable "recipes" for code. You define them once and call them whenever needed.

```python
def multiply(a, b):
    return a * b

result = multiply(10, 5) # result is 50
```

> [!EXAMPLE]- Multiple Returns
> Functions can return more than one value at once:
> `return min_val, max_val`.

# 7. Error Handling

Instead of letting your program crash when it hits an error, use `try` and `except` blocks to handle issues gracefully. This is great when working with unphysical combinations in parameter spaces.

```python
try:
    x = 1 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

> [!SUCCESS]
> You now have the fundamenta building blocks of Pythona and have completed all [tech foundations](1_tech_foundations) onboarding tutorials. You may now proceed to the [advance tutorials](4_advanced_tutorials) or you can begin actually contributing to CAPIBARA's codebase. Remember these 3 central ideas:
> 1. Python is an extremely wide useage language, there are tons of tutorials, guidelines and solution on the internet. Make a good use of them, but don't try to digest everything.
> 2. There are Python libraries for everything. Most important Python libraries (`NumPy`, `Matplotlib`, `SciPy`, etc) have extensive and supported documentation.
> 3. It probably happens that you are not the first one encoutering an issue: ask other group members directly or wrtite on the [help desk discussion](https://github.com/orgs/CAPIBARA3/discussions/27).
