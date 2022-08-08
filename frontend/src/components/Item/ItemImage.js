const ItemImage = ({ item, preview = false }) => {
  console.log("jjd", item.title);
  const image = {
    src: item.image,
    title: item.title,
    className: "item-img",
    style: {
      height: "500px",
      width: "100%",
      borderRadius: "6px",
    },
  };
  if (!image.src) {
    image.src = "/placeholder.png";
  }

  if (preview) {
    image.title = "item";
    image.className = "card-img-top item-img";
    image.style = { borderRadius: "20px" };
  }

  return (
    <img
      src={image.src}
      alt={image.title}
      className={image.className}
      style={image.style}
    />
  );
};

export default ItemImage;
