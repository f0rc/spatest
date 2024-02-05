import Sample from "./components/Sample";
import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (
    <div className="bg-blue-600 border-4 border-black">
      <div>{props.name} is mounted!</div>

      <Parcel
        // @ts-expect-error -
        config={() => {
          return System.import("@uh/angular2");
        }}
      />
      <div>HELLLLLLL</div>
    </div>
  );
}
