import * as s from "./styles";
import { PropsType } from "./../../public/interface";
import { SetState } from "../../context/context";
import { useState } from "react";

export default function CreateContainer(props: PropsType) {
  const setState = SetState();
  const [data, setData] = useState<string>("");
  const InputFunc = (e: any) => {
    setData(e.target.value);
  };
  const Sub = () => {
    setState({ type: "PLACE_SEARCH", placement: data });
    props.closeModal();
    setData("");
  };
  return (
    <s.CreateContainer num={props.px}>
      <s.Close onClick={props.closeModal}>x</s.Close>
      <s.CTitle>소재지 등록</s.CTitle>
      <s.Bselect>
        <option value="">건물주</option>
      </s.Bselect>
      <s.WInput
        placeholder="소재지를 입력하세요."
        value={data}
        onChange={InputFunc}
      />
      <s.WInput placeholder="소재지를 입력하세요." />
      <s.WInput placeholder="소재지를 입력하세요." />
      <s.WInput placeholder="소재지를 입력하세요." />
      <s.WInput placeholder="소재지를 입력하세요." />
      <s.WInput placeholder="소재지를 입력하세요." />
      <s.WInput placeholder="소재지를 입력하세요." />
      <s.WInput placeholder="소재지를 입력하세요." />
      <s.SubButton onClick={Sub}>등록하기</s.SubButton>
    </s.CreateContainer>
  );
}
