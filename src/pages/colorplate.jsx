import { CartProvider } from 'react-use-cart'
import Color from './color';

const Colorplate = () => {

  return (
    <>
    <CartProvider>
    <Color />
    </CartProvider>


    </>
  );
}

export default Colorplate;