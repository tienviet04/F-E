import Start from "../../components/Start/start";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import Plan from "../../components/plan/plan";
import Sub from "../../components/sub/sub";

export default function Subcription() {
  return (
    <div className="bg-black">
     
      <div className="max-w-screen-xl mx-auto">
        <Plan />
        <Sub />
        <Start />
      </div>
    
    </div>
  );
}
