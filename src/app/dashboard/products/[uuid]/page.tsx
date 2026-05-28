
}
import { ProductType } from "@/lib/product-v2/product";

import { fetchDetailCard } from "../../@products/products/(..)products/[uuid]/page";
import ProductDetailComponent from "@/Components/modal/ProductDetailModalComponent";



export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
  
}) {

  const { uuid } = await params;

  const data: ProductType = await fetchDetailCard(uuid);

  return <ProductDetailComponent data={data} />;
