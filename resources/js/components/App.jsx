import { Produits } from './Produits';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
// import  ReactDOM  from 'react-dom'
import { createRoot } from 'react-dom/client';
import FormProduit from './FormProduit';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App = () => {
    const url_base="http://localhost/lareact2/public";
    const URL=url_base+"/api/produit";
    const libelleRef = useRef()
    const prixRef = useRef()
    const fileRef = useRef()
    const formRef = useRef()
    const [load, setload] = useState(false)
const [nbProduit, setNbProduit] = useState(0)
const [mc, setmc] = useState("")
const [produits, setProduits] = useState([])
const [progress, setprogress] = useState(0)
    const add =(e)=>{
        e.preventDefault()
        const form=new FormData( formRef.current  );
// form.append('libelle',libelleRef.current.value);
// form.append('prix',prixRef.current.value);
// form.append('chemin',fileRef.current.files[0]);

// console.log('fornss',form.getAll('chemin'),formRef.current)
// console.log('fileref',fileRef.current.files[0]);
            e.preventDefault()
setprogress(e.loader)

            const options= {
                // headers: {
                //   'Content-Type': 'multipart/form-data'
                // }
            }
    setload(true)
    axios.post(URL,form,options).then(r=> {
        setNbProduit(r.data.id);
        console.log('data',r.data,'files')
        setload(false)

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

<div className='text-center p-5'>
{load? "chargement en cours....":""}
{progress}%

    <FormProduit formRef={formRef} fileRef={fileRef} nbProduit={nbProduit} add={add} libelleRef={libelleRef} prixRef={prixRef}/>
<br />
MC : <input type='search' value={mc}  onChange={(e)=>setmc(e.target.value)}   />
{mc}
{rech().length} Produits
</div>
<Produits   produits={(rech())}  URL={url_base}  />
<BrowserRouter>
<Routes>
        <Route path='/new' Component={    <FormProduit formRef={formRef} fileRef={fileRef} nbProduit={nbProduit} add={add} libelleRef={libelleRef} prixRef={prixRef}/>
}>

        </Route>

</Routes>
</BrowserRouter>
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
