import Sample from "./components/Sample";

export default function Root(props) {
  return (
    <section>
      <div>{props.name} is mounted!</div>
      <Sample />
    </section>
  );
}
