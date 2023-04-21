import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>Products {props.params.name}</div>;
}
