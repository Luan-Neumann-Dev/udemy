import React from 'react'
import { useCartContext } from '../context/cartContext'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
import { MdClear } from 'react-icons/md'
import { other_images } from '../utils/images'
import { Link } from 'react-router-dom'

const CartPage = () => {

  const { cart: cartItems, total_items, total_amount, clearCart } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <NotFoundWrapper>
        <div className="container">
          <div className="cart-page-empty">
            <div className="cart-pg-title fs-26">
              <h3>Carrinho de Compras</h3>
            </div>

            <div className="cart-count info">
              <span className="fw-7 fs-18">{total_items} </span>
              Cursos no Carrinho
            </div>

            <div className='empty-cart'>
              <img src={other_images.empty_shopping_cart} alt="" />
              <p>Seu carrinho está vazio. Continue comprando para encontrar um curso!</p>
              <Link to="/" className='item-btn buy-btn'>Continuar comprando</Link>
            </div>
          </div>
        </div>
      </NotFoundWrapper>
    )
  }

  return (
    <CartWrapper>
      <div className="container">
        <div className="cart-pg-title fs-26">
          <h3>Carrinho de Compras</h3>
        </div>
        <div className="cart-grid grid">
          {/* card grid left */}

          <div className="cart-grid-left">
            <div className="flex flex-wrap flex-between">
              <div className="cart-count info">
                <span className="fw-7 fs-18">{total_items} </span>
                Cursos no Carrinho
              </div>

              <button type="button" className='cart-clear-btn flex fs-15 fw-6 text' onClick={() => clearCart()}>
                <MdClear className='text-pink' />
                <span className="d-inline-block text-pink">Limpar Todos</span>
              </button>
            </div>

            <div className="cart-items-list grid">
              {
                cartItems.map(cartItem => (
                  <CartItem key={cartItem.courseID} cartItem={cartItem} />
                ))
              }
            </div>
          </div>

          <div className="cart-grid-right">
            <div className="cart-total">
              <span className="d-block fs-18 fw-6">Total: </span>
              <div className="cart-total-value fw-8">R${total_amount.toFixed(2)}</div>
              <button type="button" className='checkout-btn bg-purple text-white fw-6'>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </CartWrapper>
  )
}

const NotFoundWrapper = styled.div`
  .cart-page-empty {
    margin-bottom: 5rem;

    .cart-pg-title {
    padding: 40px 0 40px;
    }

    .empty-cart {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;
      box-shadow: 0 0 2px #d1d7dc;
      padding: 2.4rem;
      text-align: center;
      margin-top: 20px;

      & img {
        width: 240px;
        height: 180px;
        margin-bottom: 2.4rem;
      }

      & p {
        margin-bottom: 2.4rem;
      }
    }

    .item-btn {
      font-size: 15px;
      display:inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.buy-btn {
        background: rgba(0, 0, 0, 0.9);
        color: var(--clr-white);
        border: 1px solid rgba(0,0,0,0.9);

        &:hover {
          background-color: transparent;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
`;

const CartWrapper = styled.div`
  .cart-pg-title {
    padding: 40px 0 40px;
  }

  .cart-grid {
    row-gap: 40px;

    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-left: 6px;
      }
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }

    .cart-total-value {
      font-size: 34px;
    }

    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-dark);
      }
    }

    .cart-total {
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }
`;

export default CartPage