# File I/O

:::warning

Disclaimer: These are `notes`, not cohesive instructions.

:::

## System Calls

`open()` opens file and returns file descriptor

```c
fd = open(pathname, flags, mode);
```

`read()` reads r <= n bytes from file `fd` into buffer `buf`

```c
r = read(fd, buf, n); // r = 0: EOF
```

`write()` writes w >= n bytes from buffer `buf` into file `fd`

```c
w = write(fd, buf, n);
```

`close()` closes the file

```c
res = close(fd);
```

## Examples

### Clone a file

```c
//#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>

#define BUF_SIZE 1024

int main(int argc, char *argv[]) {
    (void) argc; // prevents 'unused parameter' warning
    char buf[BUF_SIZE];
    char *path = strcat(argv[0], ".txt");
    int fd = open(path, O_RDONLY);
    int r = read(fd, buf, BUF_SIZE);
    while (r > 0) {
        //write(fileno(stdout), buf, r);
        write(STDOUT_FILENO, buf, r);
        r = read(fd, buf, BUF_SIZE);
    }
    close(fd);
    return 0;
}
// ./clone hello
```

## File `flags()`

| Flag     | Function                              |
| -------- | ------------------------------------- |
| O_RDONLY | Open for reading                      |
| O_WRONLY | Open for Writing                      |
| O_RDWR   | Open to read and write                |
| O_CREAT  | create file if not existing yet       |
| O_EXCL   | with O_CREAT: create file exclusively |
| O_TRUNC  | shorten existing file to length 0     |
| O_APPEND | write appends at the end of file      |
| O_SYNC   | does synchronious write               |

## File `open()` modes

| Mode    | Function   |
| ------- | ---------- |
| S_IRUSR | user read  |
| S_IWUSR | user write |

## File `open()` errors

| Error   | Meaning                                                    |
| ------- | ---------------------------------------------------------- |
| EACCES  | insufficient permissions                                   |
| EISDIR  | File is directory, write not possible                      |
| EMFILE  | To many open files in process, reached `RLIMIT_NOFILE`     |
| ENFILE  | To many open files in system                               |
| ENOENT  | A part of the path doesn't exist or `O_CREAT` is missing   |
| EROFS   | File is on a read-only system                              |
| ETXTBSY | File is a running executable, which must be closed firstly |

## Examples

### File `open()`

Open existing file

```c
char *f = "a.txt"; 
int fd = open(f, O_RDONLY);
```

Open existing or new file for `read` and `write`, R+W for owner, otherwise no permissions:

```c
fd = open(f, O_RDWR|O_CREAT, S_IRUSR|S_IWUSR);
```

Open file to append:

```c
fd = open(f, O_WRONLY|O_APPEND);
```

Error:

```c
fd = open(pathname, flags, mode); 
// if open throws an error, `errno` is set
if (fd == -1) { 
    pr intf("%d\n", errno); 
}
```
