function Services({ children, onSelect }) {
  return (
    <>
      <i className="icon" onClick={onSelect}>
        {children}
      </i>
    </>
  );
}

export default Services;
