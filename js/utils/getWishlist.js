export function getWishlist() {
  const items = localStorage.getItem("wishlist");

  if (items === null) {
    return [];
  } else {
    return JSON.parse(items);
  }
}
