
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md"
import "./Pics.css"
import React, { useState } from 'react'


function Pics() {
        const [data, setData ] = useState(0)
    const [slideImage, setImageSlide] = useState([
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRhXYz6nEDuOu62ZW8Jtino8FqK4P2jHo8WkvOxlwBFhE7KxahPetYoZRGLMDX18ReYCK1OW34OwDlBZt5zQKeqhKz-izcXdBzg.webp?r=b32",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS8lvW_8XfYxgwQWyQZyy_B-NvtRCUUlhTuz-Sbypa6tQzYX1T1105FjdIjSuIW0bYR47h-5QYkxtw9ziu1Pcdt9XQ-Eymm9K2ucRo8C865uJLGRfkU9qEG6wa7cAxoKWr-n.webp?r=04e",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT79Mi0iWWtYi-57TpyWlexVfLyGglHcQknKS_qF5RsRxldAflHZj1RiYT6895R-ssNAnKe-QpJV7de--OtapTkh6sGbuDOHCkq0XFA4_KVWvWDCn9_Ff9P-i2cGkBINRLBN.webp?r=09b",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTwx-qzAEBk_Gz9d9z_-EmEmJyEDjsMvUFtPIFpvGm69jEecKo7ZBeEqGXUuEtHKpiVKeOOk5H5eOJlEqZwdsjqbAB27AeSbS6Q.webp?r=083",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXAIgYm4j2k9hOmEuxkoVroj81ViNATnDfGyUmovIyzasDscGTWrr64sdzwnRm1QXSyVxrcvJ5cEn4Yno7W3P_cluyJI0Ax5EVNHOzkPmgv4ObpNvHaaTVHnIgIlcIHvYfj8.webp?r=632",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXkP0fbEQnghb9m7rZfpuQGiN5E4Mi92--Iefy8w7_38Ny5PmhARhFznX6UKh4DHIeXoijoCwvsP00swZQ-jTQxf9ACmscAPc_5cjDXWItBehJpudiuzcw-E5niDof_Ok_jO.webp?r=fb9",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYlY9h0yAvcW7sYbDIBuzLs63C0DpsOuLZKjMnFvGNpXz2WELuWXtGIXmjiWWYjZEoq-WF5neRZaBW9ow1JMYwXnXXYTErLmr9w.webp?r=d47",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABclm5sbJQUgrkFFBrPLhQn-0oXs_uQS8-0SFXt8Sza1I-vU66NlLOqilJTTUg-6Gn52OrKrI7n7GdBVffKEOsNDDFyuMnemGLds.webp?r=01e",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcwMiAXNKvtzgN1Kx06ht1pT-yTXiVSQy0BKogrxRHkSiGZlRtWZbq2ROt1kkWqfM2PWVvgDNFMw73KTzVFP0dnMIY1MsQEVJIeBdS5U2PG52vbiBsX9ajBuOg6ZrWR1H_X-.webp?r=df5",
      "https://occ-0-4616-32.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABd8ThhhZFczQuxhXg-s_mbY8I_nTg5ql8aqeKL3dGHDVWATazJ2WZw8joFUCT9fj6px3Uev34xyJFwrDo6J8L361vCM59aHJA6jGALni1U_pkGLwPamI59RMyriKxPkOcKEK.webp?r=d62",

    ])
    const AddNumber = () => {
        setData(data + 1)
    }
    const SubNumber = ()=>{
        if (data > 0){
            setData(data - 1);
        }else{
            setData(slideImage.length -1 ) 
        }
    }
  return (
    <>

      <section className="pics_parent">
        <h3 style={{alignItems:"flex-start"}}  className="img_txt">Trending Now</h3>
        <button className="btn2 left" onClick={SubNumber}><MdOutlineChevronLeft/>left</button>
<article className="images_row">

  <div className="img_container">
    <h1 className="number"> 1</h1>
     <img className="Article_img" src={slideImage[(data + 1) % slideImage.length]}  />
  </div>

  <div className="img_container">
    <h1 className="number"> 2</h1>
    <img className="Article_img" src={slideImage[(data + 2) % slideImage.length]}  />
  </div>

  <div className="img_container">
    <h1 className="number"> 3</h1>
    <img className="Article_img" src={slideImage[(data + 3) % slideImage.length]}  />
  </div>

  <div className="img_container">
    <h1 className="number"> 4</h1>
    <img className="Article_img" src={slideImage[(data +4 ) % slideImage.length]} />
  </div>

  <div className="img_container">
    <h1 className="number"> 5</h1>
    <img className="Article_img" src={slideImage[(data + 5) % slideImage.length]} />
  </div>

  </article>
      <button className="btn2 right" onClick={AddNumber}> <MdOutlineChevronRight/> right</button>
      
      </section>
    </>
  )
}

export default Pics
