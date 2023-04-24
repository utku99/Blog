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
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, sunt accusantium dolore, praesentium ducimus asperiores consequuntur velit adipisci quos optio provident repellendus minima dicta quod nulla blanditiis ipsam. Dolorem officia omnis veritatis vitae itaque sit velit ullam blanditiis, neque provident commodi ipsa eligendi repellat quam incidunt magnam rerum quis nostrum quasi nemo. Nemo fugiat quisquam, quae odit recusandae suscipit animi laudantium voluptates nulla quas. Quasi animi labore, similique debitis dolorem reiciendis incidunt deserunt rerum dolore? Fuga blanditiis ipsam, nihil in quos sapiente, perferendis dolorem similique omnis aperiam nemo voluptatem hic, harum illum esse? Quidem voluptatibus quia nisi reprehenderit consequatur. Omnis amet, id vero pariatur tempore molestiae nihil iure rem tenetur doloribus, nisi laborum veritatis nesciunt facilis esse. Vel debitis, officiis recusandae qui labore maiores sed doloribus quo doloremque, reiciendis quos aliquam. Voluptas quam necessitatibus delectus nulla odio, exercitationem error recusandae nobis a voluptate repudiandae, id dicta rem quia, accusantium sunt.
              </p>
              <p>Yazar: Anonim</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
