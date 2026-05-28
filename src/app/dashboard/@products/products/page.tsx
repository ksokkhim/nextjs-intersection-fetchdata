
import { ProductDetailModalComponent } from '@/Components/modal/ProductDetailModalComponent';
import { ProductType } from '@/lib/product-type/product';
import Link from 'next/link'
import { Suspense, use } from 'react';

// async function getProducts
async function getProducts() {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store'
    })
    const products = await res?.json();
    console.log(`Product data: ${products?.content}`)
    return products;

  } catch {
    throw new Error("Fail to fetch")
  }
}



// loading suspense
function LoadingSuspenseComponent(){
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
  <span className="sr-only">Loading...</span>
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
</div>

  )
}

function ProductList() {
  const { data: products } = use(getProducts())

  return (
    <div className="flex gap-5">
      {
        products?.content?.map(({ uuid, thumbnail, name, priceOut }: ProductType) => (
          <ProductDetailModalComponent
            uuid={uuid}
            key={uuid}
            thumbnail={thumbnail}
            priceOut={priceOut}
            name={name}
          />
        ))
      }
    </div>
  )
}



export default function ProductsPageRoute() {
  return (
    <div>
      <div className="flex gap-5">
        {/* navbar for create and edit */}
        <Link href={'/dashboard/create'}>Create</Link>
        <Link href={'/dashboard/edit'}>Edit</Link>
      </div>
      <Suspense fallback={<LoadingSuspenseComponent />}>
        <ProductList />
      </Suspense>
    </div>
  )
}