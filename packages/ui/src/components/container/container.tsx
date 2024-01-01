import {
  Container as ContainerComponent,
  ContainerProps,
} from "@styled-system/jsx";

type Properties = ContainerProps;

export default function Container(props: Properties) {
  return <ContainerComponent maxW={"5xl"} my="4" {...props} />;
}
