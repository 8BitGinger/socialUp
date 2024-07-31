const LayoutRow = (props) => {
  const { name, title, image, imageAlt, children } = props;
  return (
    <div className="sections">
      <img src={image} alt={imageAlt} loading="lazy" />
      <h1>{title}</h1>
      <div className="row_1">{children}</div>
    </div>
  );
};

export default LayoutRow;
