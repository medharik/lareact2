import React from "react";
export function Produits({
  produits
}) {

    const prodColumn=['id','libelle','prix'];
  return <table className='table table-stripped'>
    <thead>
        <tr>
           {
            prodColumn.map((c,index) => {
                return (
                    <th key={index+1}>{c}</th>

                )
            })
           }
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {produits.map((p, index) => {
        return <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.libelle}</td>
                    <td>{p.prix}</td>
                    <td>Actions</td>
                    </tr>;
      })}
    </tbody>
  </table>;
}
