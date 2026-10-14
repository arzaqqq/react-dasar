import React from 'react'
import { useState, useEffect, useRef } from 'react'

// Mengubah nama fungsi agar tidak menggunakan reserved word 'ref'
export default function RefComponent() {
    // 1. Perbaikan: Gunakan array [ ] untuk useState
    const [counter, setCounter] = useState(0);
    const rerender = useRef(0);

    // 2. Perbaikan: Tambahkan 'counter' ke dependency array agar log berjalan setiap counter berubah
    useEffect(() => {
        console.log("Nilai saat ini:", rerender.current, counter);
    }, [counter]); 

    const addCounter = () => {
        setCounter(counter + 1);
    }

    const addRerender = () => {
        // 3. Perbaikan: Gunakan '+=' agar nilai tersimpan
        rerender.current += 4;
        
        // Catatan: Karena useRef tidak memicu re-render, 
        // nilai di layar tidak akan langsung berubah saat tombol ini diklik.
        // Kamu perlu memicu re-render (misal dengan addCounter) agar perubahan terlihat di UI.
    }

    const cekValue = () => {
        console.log("Cek Value:", counter, rerender.current);
    }

    return (
        <div>
            <h1>useState</h1>
            <p>{counter}</p>  
            
            <h1>useRef</h1>
            {/* Nilai ini hanya akan terupdate di layar jika komponen di-render ulang */}
            <p>{rerender.current}</p>

            <button onClick={addCounter}>
                Add Counter
            </button>
            <button onClick={addRerender}>
                Add Rerender
            </button>
            
            {/* Tombol untuk cek value di console */}
            <button onClick={cekValue}>
                Cek Value
            </button>
        </div>
    )
}