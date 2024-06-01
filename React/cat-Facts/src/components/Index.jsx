import React,{useEffect, useState} from 'react'
import { catFactsFunction } from '../functions/funciones'
import { catImgFunction } from '../functions/funciones'

const IndexApp = () => {

  const [CatFacts, setCatFacts] = useState(null)
    useEffect(()=>{
    catFactsFunction(setCatFacts)
  },[])

    const [CatImg, setCatImg] = useState(null)
      useEffect(()=>{
      catImgFunction(setCatImg)
    },[])

    const handleClick = () => {
      catFactsFunction(setCatFacts)
      catImgFunction(setCatImg)
    }

  return (
    <>
    <div className='container'>
      {CatFacts != null ? (
      <div className='texto-cat-facts esta'>{CatFacts}</div>
    ) : ('NOT cats')}

    {CatImg != null ? (
      <div className='imagen-gato esta'><img src={CatImg} alt='Imagen Gato'/></div>
    ) : ('NOT cats img')}
    <br></br>
    <button className='esta' type="button" onClick={handleClick}> Change Fact
      </button>
      </div>
    </>    
  )
}

export default IndexApp