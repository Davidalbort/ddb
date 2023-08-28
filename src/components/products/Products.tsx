import { ProductsProps } from '@/utils/types'
import Image from 'next/image'
import '@/styles/components/products.scss'

export function Products({ products }: ProductsProps) {
  return (
    <main className="product">
      <ul className="product__list">
        {products ? (
          products.map((product) => (
            <li className="product__item product--hover" key={product.id}>
              <article className="product__container">
                <figure className="container-image">
                  <Image
                    className="product__image product__image--zoom"
                    src={product.image}
                    alt={`Image ${product.name}`}
                    width={150}
                    height={200}
                  />
                </figure>
                <h2 className="product__title">{product.name}</h2>
                <p className="product__text" role="definition">
                  {product.description}
                </p>
                <span className="product__price" role="textbox">
                  {product.price.toFixed(3)}
                </span>
              </article>
              <button className="button button--hover">AGREGAR</button>
            </li>
          ))
        ) : (
          <p>Not found Products</p>
        )}
      </ul>
    </main>
  )
}
