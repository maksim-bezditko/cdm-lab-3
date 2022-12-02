const c_button = document.querySelector("#combos");
const p_button = document.querySelector("#permutations");

let result = [];
let temp = [];
let c_startTime;
let c_endTime;

const findPermutations = (arr = []) => {
   let res = []
   const helper = (arr2) => {

      if (arr2.length == arr.length) {
			res.push(arr2)
			return;
		}

      for ( let e of arr ) {
			if (!arr2.includes(e)) helper([...arr2, e])
		}
   };

   helper([])

   return res;
};

function makeCombos(n, left, k) {
	if (k == 0) {
		result.push(temp);
		for (let i = 0; i < temp.length; i++) {
			document.write(temp[i] + " ")
		}
		document.write("<br/>")
		return;
	}
	for (let i = left; i <= n; ++i) {
		temp.push(i);
		makeCombos(n, i + 1, k - 1);
		temp.pop();
	}
}

function startCombos(n, k) {
	c_startTime = +new Date();
	makeCombos(n, 1, k);
	c_endTime = +new Date();
}

c_button.addEventListener("click", () => {
	startCombos(+prompt("Numbers in the initial set (n): "), +prompt("K number: "));
	document.write("The algorithm took " + (c_endTime - c_startTime) + " milliseconds")
})

p_button.addEventListener("click", () => {
	let n = +prompt("N number?");
	let arr = [];
	for (let i = 1; i <= n; i++) arr.push(i);
	let startTime = +new Date();
	const result = findPermutations(arr).map(item => item.join(" "))

	document.write(result.join("<br/>"))
	document.write("<br/>The algorithm took " + (+ new Date() - startTime) + " milliseconds")
})
