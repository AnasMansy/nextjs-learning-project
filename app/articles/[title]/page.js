export default function ShowArticale(props) {
  console.log(props);
  return (
    <div className="page">
      test show articlef
      <p>{props.params.title}</p>
    </div>
  );
}