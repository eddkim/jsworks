var nums = [1,3,5,7,9];
var sum = 0;
for (var i = 0; i <nums.length; i++){
    sum += nums[i];
}

document.write(sum)

nums.push(sum)

document.write("<br>"+nums+"<br>")

for (var i = 0; i <nums.length; i++){
    document.write(nums[i] + " ")
}

for ( i in nums){
    document.write(nums[i]+ " ")
}