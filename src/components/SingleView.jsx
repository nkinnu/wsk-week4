const SingleView = (props) => {
  const {item, setItem} = props;
  return (
    <dialog open onClick={() => setItem(null)}>
      <h3>Title: {item?.title}</h3>
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video controls>
          <source src={item.filename} />
        </video>
      )}
      <p>{item.description}</p>
      <button onClick={() => setItem(null)}>Close</button>
    </dialog>
  );
};
export default SingleView;
