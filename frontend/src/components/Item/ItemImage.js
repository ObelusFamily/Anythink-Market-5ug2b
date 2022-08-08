const ItemImage = ({ item }) => {
  console.log("jjd", item.title);
  const image = {
    src: item.image,
    title: item.title || "item",
  };
  if (!image.src) {
    image.src = "/placeholder.png";
    image.title = image.title || "default";
  }

  return (
    <img
      src={image.src}
      alt={image.title}
      className="item-img"
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "6px",
      }}
    />
  );
};

export default ItemImage;
