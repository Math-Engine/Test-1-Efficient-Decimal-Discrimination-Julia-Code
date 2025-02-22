function is_prime(n::Int)
    if n <= 1
        return false
    elseif n <= 3
        return true
    end
    if (n - 1) % 6 != 0
      if (n + 1) % 6 != 0
        return false
      end
    end
    i = 5
    while i * i <= n
        if n % i == 0 || n % (i + 2) == 0
            return false
        end
        i = i + 6
    end
    return true
end

for i in 1:parse(Int, ARGS[1])
    println("$(i) : $(is_prime(i))")
end
