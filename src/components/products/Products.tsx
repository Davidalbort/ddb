import { ProductsProps } from '@/utils/types'
import Image from 'next/image'

export function Products({ products }: ProductsProps) {
  return (
    <main>
      <ul>
        {products ? (
          products.map((product) => (
            <li key={product.id}>
              <Image
                src={product.image}
                alt={`Image ${product.name}`}
                width={300}
                height={200}
              />
              <h2>{product.name}</h2>
              <p role="definition">{product.description}</p>
              <span role="textbox">{product.price}</span>
              <button>ADD</button>
            </li>
          ))
        ) : (
          <p>Not found Products</p>
        )}
      </ul>
    </main>
  )
}
