import { Product } from "apps/commerce/types.ts";

interface Props {
  layout: {
    name?: "concat" | "productGroup" | "product";
  };
  product: Product;
}

function ProductButtonFloatingNameItem({ layout, product }: Props) {
  const { isVariantOf, name } = product;
  return (
    <>
      <div class="col-[1/4]">
        <h1>
          <span class="font-medium text-xl capitalize" style="color:#fff">
            {layout?.name === "concat"
              ? `${isVariantOf?.name} ${name}`
              : layout?.name === "productGroup"
              ? isVariantOf?.name
              : name}
          </span>
        </h1>
      </div>
    </>
  );
}

export default ProductButtonFloatingNameItem;
