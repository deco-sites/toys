import { Product } from "apps/commerce/types.ts";
import ScrollButtonFloating from "$store/components/ui/ScrollButtonFloating.tsx";
import { useEffect } from "preact/compat";

interface Props {
  layout: {
    name?: "concat" | "productGroup" | "product";
  };
  product: Product;
}

function ProductButtonFloatingNameItem({ layout, product }: Props) {
  const { isVariantOf, name } = product;

  useEffect(() => {
    ScrollButtonFloating();
  });

  return (
    <>
      <div class="col-[1/4]">
        <h1>
          <span
            class="font-medium text-xl capitalize span-floating"
            style="color:#fff"
          >
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
