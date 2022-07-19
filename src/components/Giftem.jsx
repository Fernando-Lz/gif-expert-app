const Giftem = ({ title, url }) => (
  <div className="card">
    <img src={url} alt={title} />
    <p>{title}</p>
  </div>
);
export default Giftem;
