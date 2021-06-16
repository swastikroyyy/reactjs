import React from "react";
//import { useSelector, useDispatch } from "react-redux";
//import { incNum, decNum } from "./actions/Act";
import Headerss from "./components/Headerss";
import Addcont from "./components/Addcont";
import Cont from "./components/Cont";



//import logo from './logo.svg';
import "./App.css";
/*import Counter from "./components/Counter";
import Cprops from "./components/Cprops";
import Dish from "./components/Dish";
import Ebind from "./components/Ebind";
/import Booklist from "./components/Booklist";
import Form1 from "./components/Form1";
import Frm2 from "./components/frm2";
import Rout from "./components/Rout";
import LifeA from "./components/LifeA";
import Refscc from "./components/Refscc";
//import Nestedcom from "./components/Nestedcom";
import Fmf from "./components/Fmf";

import Fclick from "./components/Fclick";
import Cclick from "./components/Cclick";
import Cbind from "./components/Cbind";
import Pcom from "./components/Pcom";
import Cren from "./components/Cren";
import Lmap from "./components/Lmap";
import Ikey from "./components/Ikey";
import Cmap from "./components/Cmap";
import Cstate from "./components/Cstate";


//import Hola from "./components/Hola";
//import Hello from "./components/Hello";
//import Props from "./components/Props";*/
const App = () => {
  const contacts = [
    {
      id: "1",
      name: "swas",
      password: "12344"

    },
    {
      id: "2",
      name: "swastik",
      password: "1234465"

    }
  ];
  // const myState = useSelector((state) => state.cn);
  // const dispatch = useDispatch();
  /*const [users, setUsers] = useState([
    { name: "Swastik", msg: "hey,how r u all?" },
    { name: "Sam", msg: "Good to see u back" },
    { name: "Subh", msg: "nice pics dear" }
  ]);*/
  /*const fname = 'Swastik';
  const lname = 'Roy';
  const age = 25;
  const stream = 'MCA';
  const fullname = (fname, lname) => `${fname} ${lname}`;
  const ydetails = 'Enter your details';
  const details = <input placeholder={ydetails} autoComplete />;

  const mArr = [1, 3, 5, 7];
  const myArr = [
    {
      title: 'pubg',
      description: 'kjhgfsdkhgjkhdgfhb  ljnrtejvnn,ktervkmuhber rewtlbbkhnterbhjvgbhjm fj khbesgrbh kgv  frkhe bkhetsrv jbhgmsvjhgbm erskbhbjhvbhjte'
    },
    {
      title: 'Coc',
      description: 'kjhgfsdkhgjkhdgfhb  ljnrtejvnn,ktervkmuhber rewtlbbkhnterbhjvgbhjm fj khbesgrbh kgv  frkhe bkhetsrv jbhgmsvjhgbm erskbhbjhvbhjte'
    },
    {
      title: 'GTA',
      description: 'kjhgfsdkhgjkhdgfhb  ljnrtejvnn,ktervkmuhber rewtlbbkhnterbhjvgbhjm fj khbesgrbh kgv  frkhe bkhetsrv jbhgmsvjhgbm erskbhbjhvbhjte'
    },

  ]
  const blog = myArr.map((item, pos) => {
    console.log(item);
    

  return (
    <div className="blog" key={pos}>
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    </div>
  )
})*/

  return (
    /*<div className="app">

      <Counter />
      <Dish name="Swastik" msg="hey,how r u all?" />
      <Props name="jkhbdf" msg="levenfbjjfsdbbbbbbbbbbbbbbbbbbbbbbbbb" >
        <p>heolllo today is june</p>
        <a href="">click here</a> </Props>
      <Cprops name="sunny" msg="yahooooohhhh">
        <p>heolllo today is fcvjhjjh</p>
        <a href="">click here</a>
      </Cprops>
     <Nestedcom />
     <Booklist />
     <Ebind />
      <Fclick />


      <Cclick />
      <Cbind rol="02" />
      <Pcom />
      <Cren />
      <Lmap />
      <Ikey />
      <Cmap />
      <Cstate />

      <Rout />
      <Refscc />
      <Form1 />
      <Frm2 />
      <Rout />
      <LifeA />
      <Fmf />


    </div>*/
    /* <div className="app">
       <h1>Inc/Dec</h1>
       <div className="qu"></div>
       <button className="qum" title="dec" onClick={() => dispatch(decNum())}><span> - </span></button>
       <input name="quen" type="text" value={myState} />
       <button className="qup" title="inc" onClick={() => dispatch(incNum())}><span> + </span></button>*/

    <div className="app">
      <Headerss />
      <Addcont />
      <Cont contacts={contacts} />

    </div>

  );
}

export default App;
