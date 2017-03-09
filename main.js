var sum = items.reduce(function(a,b){
	return a + b.price
}, 0)
var avgPrice = (sum/items.length).toFixed(2)
var answer1 = document.querySelector("#answer1")
answer1.innerHTML = `The average price is ${avgPrice}`

var b14a18 = items.filter(function(value){
	return(value.price > 14.00 && value.price < 18.00)
})
var answer2Output =""
b14a18.forEach(function(item){
	answer2Output += item.title +"<br>"
})
var answer2 = document.querySelector("#answer2")
answer2.innerHTML = `${answer2Output}`

var GBP = items.filter(function(value){
	return(value.currency_code === "GBP")
})
var answer3 = document.querySelector("#answer3")
answer3.innerHTML = `${GBP[0].title} costs £${GBP[0].price}`

var madeWood = items.filter(function(value){
	return(value.materials.indexOf("wood") +1 >0)
})
var answer4Output =""
madeWood.forEach(function(item){
	answer4Output += item.title +" is made of wood."+"<br>"
})
var answer4 = document.querySelector("#answer4")
answer4.innerHTML = `${answer4Output}`

var made8 = items.filter(function(value){
	return(value.materials.length > 7)
})
var answer5Output =""
made8.forEach(function(item){
	answer5Output += item.title +" has "+ item.materials.length +" materials:<br><br>"
			item.materials.forEach(function(value){
				answer5Output += value +"<br>"
	})
})
var answer5 = document.querySelector("#answer5")
answer5.innerHTML = `${answer5Output}`

var madeSelf = items.filter(function(value){
	return(value.who_made=="i_did")
})
var answer6 = document.querySelector("#answer6")
answer6.innerHTML = `${madeSelf.length} were made by their sellers`
