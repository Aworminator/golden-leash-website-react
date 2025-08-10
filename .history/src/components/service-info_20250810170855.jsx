function Services({ children, onSelect }) {
  return (
    <>
      <i className="fa-solid fa-`{children}` icon" onClick={onSelect}>
        {children}
      </i>
    </>
  );
}

export default Services;
