/* eslint-disable */
import batuPng from "../../../public/assets/batu.png";
import kertasPng from "../../../public/assets/kertas.png";
import guntingPng from "../../../public/assets/gunting.png";
import Image from "next/image";

function Handler({ title, clickHandler, selected }) {
  function selectStyle(item) {
    if (item === selected) {
      return {
        filter: "drop-shadow(7px 7px 7px #17b978)",
        "-webkit-filter": "drop-shadow(7px 7px 7px #17b978)",
      };
    }

    return {};
  }
  // console.log(batuPng);
  return (
    <div className="col-sm-4 col-4 text-center">
      <div className="h2 mb-4">{title}</div>
      <div
        style={selectStyle("rock")}
        className="mb-4"
        onClick={() => clickHandler("rock")}
      >
        <Image src={batuPng} alt="rock" width={200} height={200} />
      </div>
      <div
        style={selectStyle("paper")}
        className="mb-4"
        onClick={() => clickHandler("paper")}
      >
        <Image src={kertasPng} alt="paper" width={200} height={200} />
      </div>
      <div
        style={selectStyle("scissor")}
        className="mb-4"
        onClick={() => clickHandler("scissor")}
      >
        <Image src={guntingPng} alt="scissors" width={200} height={200} />
      </div>
    </div>
  );
}

export default Handler;
