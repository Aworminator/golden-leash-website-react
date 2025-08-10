function Services({ children, onSelect }) {
  return (
    <>
      <i className="fa-solid icon" onClick={onSelect}>
        {children}
      </i>
    </>
  );
}

export default Services;
