class MaximumProfit {
    find(input){
    	let maxProfit = 0;
    	let left = 0;
    	for (let right = 1; right < input.length; right++) {
    		if (input[left] > input[right]) {
    			left = right;
    		} else if (input[left] < input[right] && input[right] - input[left] > maxProfit) {
    			maxProfit = input[right] - input[left];
    		}
    	}
        return maxProfit;
    }
}

module.exports = MaximumProfit;