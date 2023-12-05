import { formatPrice } from "$store/sdk/format.ts";
import { Product } from "apps/commerce/types.ts";
import { useOffer } from "$store/sdk/useOffer.ts";

interface Props {
  product: Product;
}

function ProductButtonFloatingPriceItem({ product }: Props) {
  const { offers } = product;
  const { price = 0, installments } = useOffer(offers);
  return (
    <>
      <div class="col-[5/7] flex flex-col text-right">
        <span class="font-medium text-xl text-secondary" style="color:#fff">
          Por: {formatPrice(price, offers?.priceCurrency)}
        </span>
        <span class="text-sm text-base-300" style="color:#fff">
          ou {installments}
        </span>
      </div>
    </>
  );
}

export default ProductButtonFloatingPriceItem;
