import React, { useRef } from 'react'

const FormProduit = ({nbProduit,add,libelleRef,prixRef,fileRef,formRef}) => {

return (
<form ref={formRef}>
        Libellé <input type="text" name='libelle' ref={libelleRef}  />
        Prix : <input type="text" name='prix'  ref={prixRef} />
        Photo : <input type="file" id='chemin' name='chemin' ref={fileRef} />
        id du dernier produit : {nbProduit}

        <button onClick={add}>Ajouter</button>

</form>  )
}

export default FormProduit
