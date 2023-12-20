export default function ScrollButtonFloating() {
  addEventListener("scroll", ({ target }: Event) => {
    if (target && target instanceof HTMLDocument) {
      const btnScrollY = target.querySelectorAll('[data-deco="add-to-cart"]')[1]
        .getClientRects()[0].top;

      if (btnScrollY < 43) {
        target.querySelector(".container-floating")?.classList.remove(
          "is-hidden",
        );
        target.querySelector(".btn-floating")?.classList.remove("is-hidden");
      } else {
        target.querySelector(".container-floating")?.classList.add("is-hidden");
        target.querySelector(".btn-floating")?.classList.add("is-hidden");
      }
    }
  });
}
