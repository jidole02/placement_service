import styled from "styled-components";
import { MinH } from "../../public/indexStyle";

export const Header = styled.header`
  width: 100%;
`;

export const MenuBtn = styled.button`
  position: absolute;
  z-index: 100;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  transform: translate(0, 80px);
  box-shadow: 0px 0px 8px rgb(200, 200, 200);
  margin-left: 5%;
  :hover {
    opacity: 0.8;
  }
  font-size: 20px;
  color: gray;
`;

export const WriteBtn = styled(MenuBtn)`
  right: 0;
  margin-right: 5%;
`;

interface Container {
  num: number;
}

export const CreateContainer = styled.div<Container>`
  width: 300px;
  height: 100%;
  min-height: ${MinH};
  padding: 0 40px;
  background-color: white;
  position: absolute;
  z-index: 300;
  right: 0;
  box-shadow: -5px 0px 10px rgb(200, 200, 200);
  transition: 0.5s;
  transform: ${(props: any) =>
    `translateX(${props.num}px)` || `translateX(0px)`};
`;

export const Close = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 30px;
  font-size: 30px;
  cursor: pointer;
  color: gray;
  :hover {
    opacity: 0.8;
  }
`;

export const CTitle = styled.p`
  font-family: 나눔스퀘어;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
`;

export const Bselect = styled.select`
  width: 100%;
  height: 35px;
  border: 1px solid black;
  background-color: white;
  margin-top: 40px;
  padding: 0 20px;
`;

export const WInput = styled.input`
  width: calc(100% - 40px);
  height: 45px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: whitesmoke;
  border: 1px solid rgb(170, 170, 170);
  margin-top: 20px;
  font-size: 12px;
`;

export const SubButton = styled.button`
  background-color: #3a54ff;
  height: 45px;
  width: 100%;
  margin-top: 20px;
  color: white;
  font-size: 18px;
  font-family: 나눔스퀘어;
`;

export const InforContainer = styled.div`
  background-color: white;
  width: 300px;
  height: 100%;
  min-height: ${MinH};
  padding: 0 40px;
  background-color: white;
  position: absolute;
  z-index: 300;
  right: 0;
  box-shadow: -5px 0px 10px rgb(200, 200, 200);
  transition: 0.5s;
`;

export const Line = styled.div`
width:100%;
height:1px;
background-color:rgb(200,200,200);
margin-top:30px;
`

export const PlacementDetail = styled.p`
font-family:나눔스퀘어;
margin-top:25px;
font-size:18px;
color:gray;
`