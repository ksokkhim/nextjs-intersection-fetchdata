import ProductDetailComponent from "@/Components/modal/ProductDetailComponent";
// get single product detail
const getProductById = async (productId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/product/${productId}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Cannot fetch product detail");
    }

    const result = await response.json();

    return result?.data;
  } catch (err) {
    console.error("DETAIL FETCH ERROR :", err);
    return null;
  }
};

interface ProductDetailProps {
  params: {
    uuid: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const product = await getProductById(params.uuid);

  if (!product) {
    return (
      <div className="text-red-500">
        Product detail not found
      </div>
    );
  }

  return (

    <section>
      <ProductDetailComponent
        uuid={product.uuid}
        thumbnail={product.thumbnail}
        name={product.name}
        description={product.description}
        priceOut={product.priceOut}
      />
    </section>
  );
}