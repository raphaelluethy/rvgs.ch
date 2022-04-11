# C Introduction

:::warning

Disclaimer: These are `notes`, not cohesive instructions.

:::

## Hello World

```c
#include <stdio.h>

int main(void) {
 printf(„hello, world\n“);
 return 0;
}
```

## General

- (mostly) **NOT** OOP
- Manual Memory Management, no Garbagecollector
- Close to Maschine Code, not very typesafe, explicit Pointer

## Variables

### Multiple Integers

```c
int b; int i, j; int k = 0;

const int a = 42;

b = a; //assingment 
```

### define

```c
#define PI 3.14159

f = PI * r^2; // =>
f = 3.14159 * r^2;
```

`defines` must be uppercase and without ;

## Integer Types

- char (1 Byte)
- int
- long
- long long
- short

All of them are unsigned, without sign!

## Floating Poin Types

- float
- double
- long double

> Import with `#include <limits.h>`
> and with `#include <float.h>`

## Boolean

C89 has no Boolean type, but you can create an enum:

```c
typedef enum { FALSE, TRUE } Boolean;   
```

C99 has a Boolean Type in `stdbool.h`

```c
#include <stdbool.h>
bool b;
b = true; // or false
```

## Formatting of `printf`

```c
printf("%c", c); // char c
printf("%d", i); // int i
printf("%f", f); // float f
printf("%f", d); // double d
printf("%3.f", f); // 3 pre-decimals
printf("%.2f", f); // 2 decimals
printf("%s", b ? "true" : "false"); // bool b
```

## Casting

```c
int i = 2.3; // .3 gets lost
floaf f = (float) i;
```

### Integer Promotion and arithmetic Casting

> unsigned: uses all bits for the storage of the number, can only contain positive numbers
{char, short} -> int -> unsigned int -> long -> unsigned long -> long long -> float -> double -> long double

## Arrays

```c
float values[3];
// or with items
float values[3] = {20.1, 23, 15.2};
```

> Accessing happens normally with `values[i]`

## Pointers

> A pointer is a `variable` which stores the `memory address` of another variable!

### Pointer

```c
int *p; // p = Pointer on int value
```

### Address operator

```c
p = &i; // p = address of i => p points to i
```

### Dereferencing

```c
int j = *p; // j = actual value of the variable that p points to
```
