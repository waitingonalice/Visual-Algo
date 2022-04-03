const Categories = [
    { value: 18, categories: 'Computer Science' },

]
let quickSortText = 
	[
		'Quicksort is a divide and conquer algorithm that is regarded as the best sorting algorithm.', <br />,<br/>,
		'Use cases: Typically used for information searching as it is able to deal well with huge list of items. It is a cache-friendly algorithm as it has a good locality of reference when used for arrays (space saving).',<br />,<br />,
		'Algorithm steps: ', <br/>,<br/>,
		'1. Pick an element, called a pivot, from the array.', <br/>,
		'2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). ',<br />,
		'After this partitioning, the pivot is in its final position. This is called the partition operation.',<br/>,
		'3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.', <br/>,<br />,
		'Worst case time complexity: O(n ^ 2)'
]

let mergeSortText = 
	[
		'Merge Sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output.', <br />,
		'Merge sort is a divide and conquer algorithm', <br />, <br />,
		'Use cases: Typically used when the data structure does not support random access, an example is linked list. Merge sort also uses additional storage for sorting the auxillary array.',<br/>,<br/>,
		'Algorithm Steps: ', <br />,<br />,
		'Step 1: Divide the list into the smallest unit (1 element),  ', <br />,
		'Step 2: Then compare each element with the adjacent list to sort and merge the two adjacent lists.', <br />,<br />,
		'Worst case time complexity: O(n log n)'
	]

let bubbleSortText = 
	[
		'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.', <br />, <br />,
		'Use Cases: Bubble sort is a very simple algorithm to implement that is often used for very small data sets. Insertion sort is often used in place of bubble sort because of its similarities in complexity and is slightly faster. One advantage bubble sort has over other more complex algorithms is that it has the ability to detect whether data is sorted efficiently.', <br />,<br />,
		'Algorithm Steps:', <br />,<br />,
		'Step 1: Start with first element and checks adjacent element', <br />,
		'Step 2: If current element is in wrong order of adjacent element, swap', <br />, <br />,
		'Worst case time complexity: O(n^2)'

		
	]

let insertionSortText = 
	[
		'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quick sort, heap sort, or merge sort.', <br />,<br />,
		'Use cases: Typically used when the number of elements is small. It can also be useful when input array is almost sorted as it has a fast best-case running time.', <br />,
		'The benefits of using insertion sort is that it has a low overhead, is fairly stable and it is not a complex algorithm.', <br />,
		'Algorithm steps:', <br />, <br />,
		'1: Iterate from arr[1] to arr[n] over the array.', <br />,
		'2: Compare the current element (key) to its predecessor.', <br />,
		'3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.', <br />, <br />,
		'Worst case time complexity: O(n^2)'
		
    ]

    
export const algoList = [
	{	
		id: 1,
		title: 'Merge Sort',
		description: mergeSortText
	},
	{
		id: 2,
		title: 'Quick Sort',
		description: quickSortText
		},
	{
		id: 3,
		title: 'Bubble sort',
		description: bubbleSortText
		
	},
	{
		id: 4,
		title: 'Insertion sort',
		description: insertionSortText
	}
]
    


export default Categories