import CreateContainer from "./createContainer";
import * as s from "./styles";
import { useState } from 'react';
import InformationContainer from "./informationContainer";

export default function Header() {
    const [CmodalOn, setCmodalOn] = useState<number>(380); 
    const closeCmodal=()=>{
        setCmodalOn(380);
    }
  return (
    <>
    <InformationContainer></InformationContainer>
    <CreateContainer px={CmodalOn} closeModal={closeCmodal}/>
    <s.Header>
      <s.MenuBtn>
        <i className="fas fa-bars"></i>
      </s.MenuBtn>
      <s.WriteBtn onClick={()=>{setCmodalOn(0)}}>
        <i className="fas fa-pencil-alt"></i>
      </s.WriteBtn>
    </s.Header>
    </>
  );
}
