import Image from "next/image";
import { Button } from "@/components/ui/button"
import SideNav from "./dashboard/_components/SideNav";


export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>original page</h2>
      <SideNav/>
    </div>
  );
}
