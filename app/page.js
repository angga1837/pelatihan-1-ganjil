
/*export default function Home() {
  return <div className="bg-[blue] hover:bg-[white] ">
    Hello world
    </div>
    
}*/
/*function Display({NIM ,children, className}){
  return <div className={`text-gray-700 text-[70px] ${className}`} >NIM: {NIM} {children} </div>
}

export default function page() {
  const nimnim = [9193, 9186, 9097, 9193];
  return(
    <div className="bg-amber-500"> 
      {
        nimnim.map(function(value, index){
          return <Display key={JSON.stringify(value, index)} NIM={value}>
            {index}
          </Display>
        })
      }
    </div>
  );
}*/


/*export default function page(){
  return <div className="bg-[red]">
    JANGGA 
    <Display NIM="25/561570/TK/63456"/> 
    <Display NIM="25/578900/KH/77689"/>
    <Display NIM="25/577899/TK/10212">
      <Display NIM="NONe" className={"bg-amber-100"} />
    </Display>
    </div>
}*/

//usestate
/*"use client";
import { useState } from "react";

export default function page(){
  const [Data, SetData] = useState(2);

  const handleClick = () => {
    SetData(Data+1);
  };
  return (
    <div className="w-full h-screen flex justify-center align-middle items-center flex-col">
      <button onClick={handleClick} className="bg-[blue]">
        klik aku {" "}
      </button>
      <div>data adalah {Data}</div> 
    </div>
  );
}*/

//useeffect
/*"use client";
import { useEffect, useState } from "react";

export default function page(){
  const [Data, SetData] = useState("LOADING.....");
  useEffect(() => {
    console.log("UseEffect lagi dimakai");
    SetData("Data masuk");
  }, []);//kalau kosong, fungsi cuman sekali
  return <div>Data berisi {Data}</div>;
}*/

//useRef
/*"use client";
import { useEffect, useRef } from "react";
export default function page(){
  const divRef = useRef(null);

  useEffect(() => {
    console.log(divRef);
  }, []);
  return(
    <div ref={divRef} className="w-full">
      EAA {JSON.stringify(divRef.current)}
    </div>
  );
}*/

//memanggil API dengan Axios
/*"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Page(){
  useEffect(() => {
    const init = async () => {
      console.log("1. Memulai request API....."); //mulai reques API, tapi jangan ditunggu
      const dataPromise = axios.get("https://be-express-pi.vercel.app/"); //memngembalikan sebauah janji kalau data akan ada nanti
      console.log("2. ini pasti lebih cepat dari hasil API", dataPromise); // langsung jalan karena tidak ada await pada kode sebelumnya
      const respone = await dataPromise; //menunggu janji
      console.log("3 Request API selesai.");
      console.log(respone);
    };
    init();
  },[]);
  return <></>;
}*/

//tes
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page(){
  const [Data, SetData] = useState(0);

  const handleClick = () => {
    SetData(Data+1);
  };
  useEffect(() => {
    const init = async () => {
      console.log("1. Memulai request API....."); //mulai reques API, tapi jangan ditunggu
      const dataPromise = axios.get("https://be-express-pi.vercel.app/"); //memngembalikan sebauah janji kalau data akan ada nanti
      console.log("2. ini pasti lebih cepat dari hasil API", dataPromise); // langsung jalan karena tidak ada await pada kode sebelumnya
      const respone = await dataPromise; //menunggu janji
      console.log("3 Request API selesai.");
      console.log(respone);
    };
    init();
  },[]);

  return (
    <div className="w-full h-screen flex justify-center align-middle items-center flex-col">
      <button onClick={handleClick} className="bg-[blue]">
        klik aku {" "}
      </button>
      <div>data adalah {Data}</div> 
    </div>
  );
};


