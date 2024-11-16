import { useEffect, useState } from "react"
import { BsListNested } from "react-icons/bs"
import { NavLink } from "react-router-dom"


export default function LeftDiv() {
    const [categories , setCategories] = useState([])

    useEffect(()=>{
     fetch("https://openapi.programming-hero.com/api/news/categories")
     .then(res=>res.json())
     .then(data=>setCategories(data.data.news_category))
     .catch(error=>alert(error.message))
    },[])
  return (
    <div>
        <h3 className="font-bold">All Category ({categories.length})</h3>
        <div className="flex flex-col gap-3 mt-5">
            {
                categories.map(category=><NavLink to={`/category/${category.category_id}`} className=" btn">{category.category_name}</NavLink>)
            }
        </div>
    </div>
  )
}
