import React from 'react'
import {useState, useEffect} from 'react'




export default function state() {
    const [kawan, setKawan] = useState(0);
    const [jumlah, setJumlah] = useState('');

    const kurangikawan = () => {
    if(kawan > 0) {
    setKawan(prev => prev - 1);
    
    }
}

    useEffect(() =>{
    // alert("kawan bertambah")
    if(kawan < 2) {
        setJumlah('sedikit');
    } else if (kawan < 6) {
        setJumlah('lumayan');
    } else {
        setJumlah('udah banyak ya');
    }
    }, [kawan])



  return (
    <div>
      <h1>{kawan}</h1>
      <p>{jumlah}</p>
      <button onClick={() => setKawan(kawan + 1)}>Tambah</button>
      <button onClick={kurangikawan}>Kurang</button>
    </div>
  )
}
