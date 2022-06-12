
"========================================================================"
"============================= productsRender ==========================="
"========================================================================" 

// We have a list of products in this array:

const products = [
{
	product    : 'flash t-shirt',
	price      :  27.50,
	category   : 't-shirts',
	bestSeller :  false,
	image      : 'https://www.juniba.pk/wp-content/uploads/2018/02/the-flash-distressed-logo-t-shirt-black.png',
	onSale     :  true
},
{
	product    : 'batman t-shirt',
	price      :  22.50,
	category   : 't-shirts',
	bestSeller :  true,
	image      : 'https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png',
	onSale     :  false
},
{
	product    : 'superman hat',
	price      :  13.90,
	category   : 'hats',
	bestSeller :  true,
	image      : 'https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg',
	onSale     :  false
}
]

// Print out in console first all the products and then for bestsellers 
// only print those having bestSeller: true.


"========================================================================"
"============================== namePairs ==============================="
"========================================================================" 

// Print out maitching pairs of first/lastnames in the console by using 
// only one loop:

let firstnames = ["Clifford", "Russel", "Michael", "Dennis", "Andre"];
let lastnames = ["Smith", "Simmons", "Diamond", "Coles", "Benjamin"];

// Expected output:

// Clifford Smith
// Russel   Simmons
// Michael  Diamond
// Dennis   Coles
// Andre    Benjamin


"========================================================================"
"============================== checkUserData ==========================="
"========================================================================" 

// Create a function called checkUserData that will get a
// username and a password from a user, using the prompt.

// Then you need to check, inside an array of users, if there is 
// a user that matches username and password provided by the input.

// The array of users will have the following structure:


let users = [
{username:'mario',password:'1234'},
{username:'laura',password:'5678'},
{username:'paula',password:'9101'}
]


// In case that there is a match you should display a welcome message : 
`Welcome back {USERNAME}` 
// otherwise a negative one :
`Wrong credentials provided :(`

// But in both cases a series of messages saying with a delay of 1 second: 

// This message will desappear in 3
// This message will desappear in 2
// This message will desappear in 1


"========================================================================"
"============================== localCart ==============================="
"========================================================================" 

// The idea is to create a cart and store it in the localStorage, we can
// use an array of objects as a products reference
const products = [
	{name:'product1',price:20,color:'red'},
	{name:'product2',price:30,color:'green'},
	{name:'product3',price:40,color:'yellow'}
]
// Create a function called cart, which is going to take 2 arguments, the 
// first one is an action, the second one is the name of a product. 
// Depending on the action we are going to interact differently with cart,
// the options are: 
// create    => is going to create a new element inside the cart, if the 
//              element is already there it should increase the quantity 
//              by 1
// delete    => is going to delete an element from the cart
// increase  => is going to increase by 1 the quantity of an element 
// decrease  => is going to decrease by 1 the quantity of an element

// The element that we are going to manipulate is the second argument of
// the function.


"========================================================================"
"========================= filterProducts ==============================="
"========================================================================" 

// We are going to create a function that is going to filter products from 
// an array of objects like this: 

const products = [
    {name:'pro1',category:'a'},
    {name:'pro2',category:'b'},
    {name:'pro3',category:'c'},
    {name:'pro4',category:'a'},
    {name:'pro5',category:'b'},
    {name:'pro6',category:'c'}
]

// The category should be inputted by the user, you can use a prompt to do it.
// In case that the user type 'all' you should display all the products,
// if there are not products in this category you should return the following message :
// "No products in this category", otherwise the filtered products.

