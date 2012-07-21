
exports.getShopping = function(){
	return shopping_cart;
}

var shopping_cart={
	item_count: getItemCount()
}

function getItemCount(){return 0;}