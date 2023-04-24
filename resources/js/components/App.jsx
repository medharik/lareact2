import { Produits } from './Produits';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
// import  ReactDOM  from 'react-dom'
import { createRoot } from 'react-dom/client';
import FormProduit from './FormProduit';
import { Input } from 'postcss';

const App = () => {
    const URL="http://localhost/lareact2/public/api/produit";
    const libelleRef = useRef()
    const prixRef = useRef()
const [nbProduit, setNbProduit] = useState(0)
const [mc, setmc] = useState("")
const [produits, setProduits] = useState([])
    const add =(e)=>{
            e.preventDefault()
            console.log({libelle:libelleRef.current.value,prix:prixRef.current.value});
    axios.post(URL,{libelle:libelleRef.current.value,prix:prixRef.current.value}).then(r=> {
        setNbProduit(r.data.id);
        console.log('data',r.data.id)
    } ).catch(e=>console.log('erreur',e))

    }
    const all=()=>{

        axios.get(URL).then(r=> {
            setProduits(r.data.data);
            console.log('tous les produits',r.data,'produits',produits);


    });
}
    const rech=()=>{

    if(mc===''){
        return produits;
    }else{
        return produits.filter(e=> e.libelle.toLowerCase().includes(mc.toLowerCase()));
    }
}
    useEffect(()=>{
               all()

    },[nbProduit])
    useEffect(()=>{

    },[mc]);
  return (

<div>

<div className='text-center p-5'><FormProduit nbProduit={nbProduit} add={add} libelleRef={libelleRef} prixRef={prixRef}/>
<br />
MC : <input type='search' value={mc}  onChange={(e)=>setmc(e.target.value)}   />
{mc}
{rech().length} Produits
</div>
<Produits   produits={(rech())}   />
</div>
  )



}
export default App
if(document.getElementById('crud_produit')){
const root=createRoot(document.getElementById('crud_produit'));
root.render(<App/>)
    // const root = createRoot( document.getElementById('hello')); // createRoot(container!) if you use TypeScript
    // root.render(<Hello />);

}
