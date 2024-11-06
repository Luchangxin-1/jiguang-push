import { AntDesign, Feather } from "@expo/vector-icons";
interface RouteComponents {
  [key: string]: (props: any) => JSX.Element;
}
export const icons: RouteComponents = {
  index: (props: any) => <AntDesign name="home" size={26} {...props} />,
  explore: (props: any) => <Feather name="compass" size={26} {...props} />,
  create: (props: any) => <AntDesign name="pluscircleo" size={26} {...props} />,
  profile: (props: any) => <AntDesign name="user" size={26} {...props} />,
};
