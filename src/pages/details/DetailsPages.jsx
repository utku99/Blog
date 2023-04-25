import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

import img from "../../assets/images/det.png"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let a = blog.find((item) => item.id === parseInt(id))
    if (a) {
      setBlogs(a)
    }
  }, [id])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={img} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>{blogs.desc}</p>
              <p>Yazar: Anonim</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
