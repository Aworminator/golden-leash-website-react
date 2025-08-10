function Services({ children, onSelect }) {
  return (
    <>
      <i className={`fa-solid fa-${children} icon`} onClick={onSelect}></i>
    </>
  );
}

export default Services;
