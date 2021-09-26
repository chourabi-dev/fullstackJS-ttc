var products = [
    { id: 15, title:"Sony playstation 5" , price : 1200, imageURL:'http://cryptoemporium.eu/images/detailed/15/191430_1.jpg' },
    { id: 15, title:"Samsung A51" , price : 800, imageURL:'https://www.samsungshop.tn/16190/galaxy-a51-samsung-tunisie-prix.jpg' },
    { id: 15, title:"Iphone 12" , price : 3800, imageURL:'https://mobilsalg.com/wp-content/uploads/2021/01/apple-iphone-12-pro-farver-bagfra.jpg' },
    { id: 15, title:"Iphone 11" , price : 2400, imageURL:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-select-2019-family_GEO_EMEA?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022219953' },
    

    
    { id: 15, title:"Mac book air pro" , price : 3800, imageURL:'https://m.media-amazon.com/images/I/61EVOldh9XL._AC_SS450_.jpg' }
];
var listProducts = document.getElementById("listProducts");

var keySearch = document.getElementById("keySearch");
var selectedAmount = document.getElementById('selectedAmount');
var selectedAmountValue = ( maxPrice() / 2 );

var priceSearch = document.getElementById('priceSearch');

/**
 * <div class="col-sm-6 col-md-4 mb-3">
                                <div class="card w-100 ">

                                    <img src="http://cryptoemporium.eu/images/detailed/15/191430_1.jpg"
                                        class="card-img-top w-100">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            1200 $
                                        </p>

                                    </div>
                                </div>
                            </div> 
                            
 */


function initUI(keySearch){
    let blocHTML = '';

    let res = products;

    if (keySearch != '') {
        res = products.filter((p)=> p.title.indexOf(keySearch) != -1 )
    }

    /**... */

    res.filter( (p)=> p.price <= selectedAmountValue )  .map((p)=>{
        blocHTML+='<div class="col-sm-6 col-md-4 mb-3">';
        blocHTML+='<div class="card w-100 ">';

        blocHTML+='   <img src="'+p.imageURL+'"';
        blocHTML+='        class="card-img-top w-100">';
        blocHTML+='    <div class="card-body">';
        blocHTML+='        <h5 class="card-title">'+p.title+'</h5>';
        blocHTML+='        <p class="card-text">';
        blocHTML+='            '+p.price+' $';
        blocHTML+='        </p>';

        blocHTML+='    </div>';
        blocHTML+='</div>';
        blocHTML+='</div> ';



    })


    listProducts.innerHTML=blocHTML;
    
}

initUI('');


keySearch.addEventListener('keyup',(e)=>{
    const value = e.target.value;

    initUI(value);
})


priceSearch.addEventListener('change',(e)=>{
    const percent  = e.target.value;

    // trans
    let value = Number(percent);

    /**
     * 100 => max
     * ? = >
     */
    
    let myAmount = ((maxPrice() * value)  / 100);
    selectedAmount.innerHTML = myAmount + " $";
    selectedAmountValue = myAmount;

    initUI(keySearch.value);

    console.log(value);
})


function maxPrice(){
    let max = 0;

    products.map((p)=>{
        if (p.price > max) {
            max = p.price;
        }
    })


    return max;
}


selectedAmount.innerHTML = (maxPrice() / 2)+" $";