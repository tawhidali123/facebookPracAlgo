//inorder binary search tree

new Node {
  constructor(val){
    this.value = val
    this.left = null
    this.right = null
  }
}

new BinarySearchTree {
  constructor(){
    this.root = null
  }

  inOrderTraverse(){
    let data = []
    let current = this.root
    function traverse(node){
      if(node.left) traverse(node.left)
      data.push(node)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }

  postOrder(){
    let data = []
    let current = this.root
    function traverse(node){
      data.push(node)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(current)
    return data
  }

  breadthFirstSearch(){
    let node = this.root
    let data =[]
    let que = []
    que.push(node)

    while(que.length){
      node = que.shift()
      data.push(node)
      if(node.left) que.push(node.left)
      if(node.right) que.push(node.right)
    }
    return data
  }

}

///////////////////////////////////////

//binary search on an array

function binarySearch(arr, val) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  while(arr[middl]e !== val && start <= end){
    if(val < arr[middle]){
      end = middle - 1
    } else {
      start = middle + 1
    }

    middle = Math.floor((start + end) / 2)
  }
  return arr[middle]
}


///////////////////////////

// merge sort

function mergeSort(arr){
  if(arr <= 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.splice(0, middle))
  let right = mergeSort(arr.splice(middle))
  return merge(left,right)
}

/////////////////////////////////////////

// Say you have an array for which the i'th element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.

// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


maxProfit(arr) {
  let p1 = 0
  let p2 = arr.length - 1
  let max = 0

  while(p1 < p2){
    let profit = arr[p2] - arr[p1]
    if(profit > max){
      max = profit
    }
  }

  return max
}

/////////////////////////////////////////////

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

gameplan
have pointer for each array
have a pointer for end of first array
loop through end replacing 0 with arr2 elements
sort from beginning pointer with end pointer


sort(arr1, arr2){
  let p1 = arr1.length - 1
  let p2 = arr2.length -1

  for(i = p2; i > 0; i--){
    temp = arr[p1]
    arr[p1] = arr[i]
    arr[i] = temp
  }
  
  arr1.sort((a - b) => a - b)

  // p1 = 0
  // p2 = arr1.length - 1

  // while(p1 < p2){
  //   if(arr1[p1] >= arr1[p2]){
  //     temp = arr[p1]
  //     arr[p2] = arr[p1]
  //     arr[p1] = temp
  //   }
  // }


}

//////////////////////////////////////
// implement a function called unique values that counts how many unique values are in an array

// example :
// unique([1,1,2,3])

// gameplan
// have a counter to see how many unique
// have a current to see what value was before it
// if value is different swap it to the front

unique(arr){
  let current = arr[0]
  let p1 = 0
  let p2 = 1

  while(p2 <= arr.length){
    if(current !== arr[p2]){
      current = arr[p2]
      p1++
      p2++
    } else{
      p2++
    }
  }

  return p1 + 1
}

/////////////////////////////////////////
return longest continuous elements in an array

example:
contin([10,3,4,9,10,11,13,15,4]) // 5 [9,10,11,13,15]

gameplan
two pointers
have a variable to store before val
compare sum start value to pointer 1 and 2

continue(arr){
  let counter = 0
  let p2 = 1

  for(i = 0; i < arr.length; i++){
    if(arr[i] <= arr[p2]){
      counter ++
      p2++
    } else {
      counter = 0 
      p2++
    }
  }

  return counter


}






