import React, { useRef } from 'react'

const FormProduit = ({nbProduit,add,libelleRef,prixRef}) => {

return (
<form>
        Libellé <input type="text" ref={libelleRef}  />
        Prix : <input type="text"  ref={prixRef} />
        id du dernier produit : {nbProduit}

        <button onClick={add}>Ajouter</button>

</form>  )
}

export default FormProduit
