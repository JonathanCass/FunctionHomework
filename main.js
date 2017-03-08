var sum = items.reduce(function(a,b){
	return a + b.price
}, 0)
var avgPrice = (sum/items.length).toFixed(2)
var answer1 = document.querySelector("#answer1")
answer1.innerHTML = `The average price of all items is ${avgPrice}`

var b14a18 = items.filter(function(value){
	return(value.price > 14.00 && value.price < 18.00)
})
var b14a18titles = b14a18.map(function(value){
	return (value.title)
})
var answer2 = document.querySelector("#answer2")
answer2.innerHTML = `${b14a18titles}`

var GBP = []
var GBP = items.filter(function(value){
	return(value.currency_code === "GBP")
})
var answer3 = document.querySelector("#answer3")
answer3.innerHTML = `${GBP[0].title} costs ${GBP[0].price}`
