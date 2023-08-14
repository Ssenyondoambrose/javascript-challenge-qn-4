const firstPalindrome = words => words.find(word => word === word.split("").reverse().join("")) || "";

 console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));




