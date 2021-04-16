# bubble-sort
First stab at a bubble sort. A recursive version wrote in python -- _for fun_. 

```python
bubble_sort('lkjhgfdsa')

# ['a', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 's']
```

### Quadratic Complexity ◻️
The quadratic nature of bubble sort is visible when passing a reversed list of numbers as its input--and printing each step of the recursive execution. Consequently, the diagonal of 0s that take shape in the process, allude to the linear complexity of its wrapping function during its worst case (n\*n).

```python
l = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

bubble_sort(l)

# [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
# [8, 7, 6, 5, 4, 3, 2, 1, 0, 9]
# [7, 6, 5, 4, 3, 2, 1, 0, 8, 9]
# [6, 5, 4, 3, 2, 1, 0, 7, 8, 9]
# [5, 4, 3, 2, 1, 0, 6, 7, 8, 9]
# [4, 3, 2, 1, 0, 5, 6, 7, 8, 9]
# [3, 2, 1, 0, 4, 5, 6, 7, 8, 9]
# [2, 1, 0, 3, 4, 5, 6, 7, 8, 9]
# [1, 0, 2, 3, 4, 5, 6, 7, 8, 9]
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
