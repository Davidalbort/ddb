import Image from 'next/image'
import data from '../../db.json'

export default function Home() {
  const product = data.products[9]
  const image = product.image
  return (
    <main>
      <h1>Roger David Alba Ortega</h1>
      <section>
        <h2>{product.name}</h2>
        <Image
          src={image}
          alt="h"
          width={200}
          height={200}
          loading="lazy"
        ></Image>
      </section>
    </main>
  )
}
