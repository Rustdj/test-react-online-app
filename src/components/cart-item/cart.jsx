import { LayoutCart } from '../layout/layout-cart';

export function Cart({ image, title, text, price, button, handleCart }) {
  return (
    <>
      <LayoutCart
          image={image}
          title={title}
          text={text}
          price={price}
          button={button}
          handleCart={handleCart}
        />
    </>
  );
}
