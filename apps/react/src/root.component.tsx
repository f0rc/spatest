import Sample from "./components/Sample";
import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <section>
      <div>{props.name} is mounted!</div>

      <Parcel
        // @ts-expect-error - Parcel is not a known prop
        config={() => {
          return System.import("@uh/angular2");
        }}
      />
      <div>HELLLLLLL</div>
    </section>
  );
}
