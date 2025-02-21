function is_prime(n::Int)
  if n == 1
    return false
  end
  i = 2
  while i * i <= n
    if n%i == 0
      return false
    end
    i = i + 1
  end
  return true
end
