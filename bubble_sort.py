def bubble_sort(itr, done=False):
  '''Takes an iterable and returns it sorted'''
  while not done:
    *itr, done = bblsrt(itr)
  return itr

def bblsrt(itr, done=True):
  '''Recursive logic'''
  if(len(itr) == 1): return itr[0], done
  a, b, *rest = itr
  if(done): done = a <= b
  return min(a,b), *bblsrt((max(a,b), *rest), done)
