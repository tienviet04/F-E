import Start from "../../components/Start/start";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import Question from "../../components/questionBody/questionBody";
import SPComponent from "../../components/spComponent/spCompnent";

export default function Support() {
  return (
    <div className="bg-black">
    
      <div className="max-w-screen-xl mx-auto">
        <SPComponent />
        <Question />
        <Start />
      </div>
     
    </div>
  );
}
