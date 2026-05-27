import ProductDetailComponent from "@/Components/modal/ProductDetailComponent";


export default async function ProductDetail({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const { uuid } = await params;
  const data = await fetchDetailCard(uuid);

  return (
    <div>
      <ProductDetailComponent
        thumbnail={data.thumbnail}
        name={data.name}
        description={data.description}
        priceOut={data.priceOut}
        uuid={data.uuid}
      />
    </div>
  );
}

export async function fetchDetailCard(uuid: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/product/${uuid}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Data Detail", data);
    return data?.data;
  } catch (error) {
    throw new Error(`Failed to fetch product details: ${error}`);
  }
}