# Functions

:::warning

Disclaimer: These are `notes`, not cohesive instructions.

:::

## Definition of a function

```c
int hello(char[] name) {
    // printf("Hello %s\n");
    return 0
}
```

You also can just simply declare it:

```c
int hello(char[] name);
```

This allows you to use the function beforehand it is actually written, since used functions in code always must be declared beforehand.

## Passing Parameters

### By Value

```c
char[] name = "Test";
int r = hello(name);
```

### By Reference

```c
void swap(int* a, int* b) {
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
int x = 4, y = 9;
swap(&x, &y);
```

## Return Types

Works as known from other programming-languages.

### Return Type Struct

```c
typedef struct { int x; int y; } Point; 
Point create_point(int x, int y) {
    Point p = {x, y};
    return p; 
}

Point origin = create_point(0, 0);
```

### Return Pointer

```c
typedef struct { int x; int y; } Point; 
Point* create_point(int x, int y) {
    Point* p = {x, y};
    return p; // here we still return p, 
              // since it is already a pointer 
}

Point* origin = create_point(0, 0);
```

## Predefining functions

:::info

This is generally wished for.

:::

## Pointers to Function

[Source](https://github.com/tamberg/fhnw-syspr/blob/master/02/map.c)

```c
#include <stdio.h>

int inc(int i) {
    printf("inc\n");
    return i + 1;
}

void map(int a[], int len, int (*f)(int)) {
    printf("map\n");
    for (int i = 0; i < len; i++) {
        a[i] = f(a[i]); 
    }
}

int main() {
    int a[] = {0, 0, 7};
    int len = sizeof a / sizeof a[0]; // # of elements
    map(a, len, inc); // inc is a function pointer
    printf("{%d, %d, %d}\n", a[0], a[1], a[2]);
}
```

## Error Handling

A lot of `System Calls` return a `-1` in case of an error, the `Errormessage` can then be found in the global variable `errno`:

```c
#include <errno.h>

int fd = open(pathname, flags, mode); 
if (fd == -1) { // Error Handling 
    if (errno == EINTR) { … } 
    else { … } }
```

### Print error with `perror()`

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main(void) {
    printf("%d\n", EINTR);

    errno = 27;
    perror("open"); // reads errno

    // $ sudo find / -name errno*.h => ~133
    for (int i = 0; i < 135; i++) {
        printf("%d: %s\n", i, strerror(i));
    }
}
```
