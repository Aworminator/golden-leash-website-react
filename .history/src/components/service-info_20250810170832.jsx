function Services({ children, onSelect }) {
  return (
    <>
      <i className=`fa-solid fa- icon` onClick={onSelect}>
        {children}
      </i>
    </>
  );
}

export default Services;
