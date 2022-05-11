def fizz_buzz(n)
  (1..n).each do |i|
    if i % 15 == 0
      puts "FizzBuzz!"
    elsif i % 3 == 0
      puts "Fizz!"
    elsif i % 5 == 0
      puts "Buzz!"
    else
      puts i
    end
  end
end

fizz_buzz(ARGV[0].to_i)
