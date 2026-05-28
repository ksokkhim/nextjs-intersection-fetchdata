
import { ProductType } from "@/lib/product-type/product";

import { fetchDetailCard } from "../../@products/products/(..)products/[uuid]/page";
import { ProductDetailModalComponent } from "@/Components/modal/ProductDetailModalComponent";



export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
  
}) {

  const { uuid } = await params;

  const data: ProductType = await fetchDetailCard(uuid);

  return <ProductDetailModalComponent data={data} />;
}
