# Variables

:::warning

Disclaimer: These are `notes`, not cohesive instructions.

:::

## Visibility

Variables are visible over all files the original file is imported in. To prevent that, we can use `static` to make the variable only visible locally.

```c
int i = 1; // can be used in other files
static int i = 1; // only locally visible
```

## Extern

To use a variable in multiple files, we declare it first normally and in every other file we use `extern` in order to prevent allocating the memory multiple times.

```c
// file a
int i = 1;
// file b
extern int i; // = 1
```

## Initialization

Global, `extern`-al and `static` variables are `Null`:

```c
int i; // =0
```

Local variables (in function scope) are not defined and are garbage:

```c
void f() {
    int i; // not initialized, garbage
}
```

## Preprocessors

This includes all `variables`, that are replaced on compile time:

- #include
- #define
- ...

```c
#include <stdio.h>

#define PI 3.14159 
#define max(A, B) ((A) > (B) ? (A) : (B))
```

:::caution

`defines` must be declared without an `;`!

:::

## System Datatypes

Hardware-unabhängige Datentypen mittels typedef:

```c
// Our code uses system-datatype, portable
#include <sys/types.h> 
pid_t pid = …; // pid_t is always big enough

// sys/types.h, Hardware reliant, Hardware A 
typedef int pid_t; // in is here big enough

// sys/types.h, Hardware-reliant, Hardware B 
typedef long pid_t; // here we need long
```
