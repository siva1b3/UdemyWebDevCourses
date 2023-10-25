function Concept(props) {
  return (
    <ul id="concepts">
      {ConceptItem(props.data[0])}
      {ConceptItem(props.data[1])}
      {ConceptItem(props.data[2])}
    </ul>
  );
}

function ConceptItem(data) {
  return (
    <li className="concept">
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </li>
  );
}

export default Concept;
