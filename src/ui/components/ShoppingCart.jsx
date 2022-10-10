import { GiShoppingCart } from 'react-icons/gi';

export const ShoppingCart = () => {

    const handleShop = () => {
        console.log("Click en el carrito")
    };
    
    return (
        <>  
           <GiShoppingCart
                onClick={handleShop} 
                size={ 35 }
                color={ 'white' }
            /> 
        </>
    );
}
