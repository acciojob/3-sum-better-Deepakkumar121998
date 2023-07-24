function threeSum(arr, target) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity; // Initialize the closestSum to a large value

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else if (currentSum > target) {
        right--;
      } else {
        // If the currentSum is equal to target, we found the exact sum, so we can return it.
        return currentSum;
      }
    }
  }

  return closestSum;
}

// Test the function with the given example
const S = [-1, 2, 1, -4];
const target = 1;
const result = threeSum(S, target);
console.log(result);
