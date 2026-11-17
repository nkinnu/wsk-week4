import {useLocation} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state;

  return (
    <>
      <h2>Single media file</h2>
      <h3>Title: {item.title}</h3>
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video controls>
          <source src={item.filename} />
        </video>
      )}
      <p>{item.description}</p>
      <p>Owner: {item.username}</p>
    </>
  );
};

export default Single;
