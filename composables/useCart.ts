export default function useCart() {
  const items = useState("cartItems", (): TInventoryItem[] => []);

  function addToCart(item: TInventoryItem) {
    const similarItem = items.value.find((i) => i.id === item.id);
    if (!similarItem || (similarItem && similarItem.size !== item.size)) {
      const product = JSON.parse(JSON.stringify(item));
      product.stock = 1;
      items.value.push(product);
    }
  }

  const { inventoryItems } = useInventory();

  function increaseItemStock(item: TInventoryItem) {
    const inventoryItem = inventoryItems.value.find((i) => i.id === item.id);
    const similarItem = items.value.find((i) => i.id === item.id);
    if (
      similarItem &&
      inventoryItem &&
      inventoryItem.stock > similarItem.stock
    ) {
      similarItem.stock++;
    }
  }

  function reduceItemStock(item: TInventoryItem) {
    const similarItem = items.value.find((i) => i.id === item.id);
    if (similarItem) {
      similarItem.stock--;
    }

    if (similarItem?.stock === 1) {
      const index = items.value.findIndex((i) => i.id === item.id);
      items.value.splice(index, 1);
    }
  }

  const total = computed(() => {
    return items.value.reduce((acc, item) => {
      return acc + item.price * item.stock;
    }, 0);
  });

  return {
    items,
    addToCart,
    increaseItemStock,
    reduceItemStock,
    total,
  };
}
