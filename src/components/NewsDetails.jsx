import { Link, useLoaderData } from "react-router-dom"
import Header from "./Header";
import RightDiv from "./RightDiv";
import { AiFillStar } from "react-icons/ai";


export default function NewsDetails() {
    const news = useLoaderData()
    const newsDetail= news.data[0];
  return (
    <div>
        <Header></Header>
        <div className="w-11/12 mx-auto grid grid-cols-12 gap-10 mt-5">
          <div className="col-span-9 border">
          <div className="p-6 bg-white space-y-4">
            <div className="flex items-center space-x-4">
                <img className="w-12 h-12 rounded-full" src={newsDetail.author.img} alt={newsDetail.author.name} />
                <div>
                    <div className="text-xl font-medium text-black">{newsDetail.author.name}</div>
                    <p className="text-gray-500">{new Date(newsDetail.author.published_date).toLocaleDateString()}</p>
                </div>
            </div>
            <img className="w-full h-[300px] object-fit rounded-md" src={newsDetail.image_url} alt={newsDetail.title} />
            <div>
                <h2 className="text-2xl font-bold">{newsDetail.title}</h2>
                <p className="text-gray-500">{newsDetail.details}</p>
            </div>
            <div className="flex items-center">
                <AiFillStar className="text-yellow-500" />
                <span className="ml-2">{newsDetail.rating.number} ({newsDetail.rating.badge})</span>
            </div>
            <div className="text-gray-500 text-sm">
                Views: {newsDetail.total_view}
            </div>
            {newsDetail.others_info.is_todays_pick && (
                <div className="badge badge-primary">Today's Pick</div>
            )}
            {newsDetail.others_info.is_trending && (
                <div className="badge badge-secondary">Trending</div>
            )}
        </div>
       <div className="ml-5 mb-5">
       <Link to={`/category/${newsDetail.category_id}`} className="btn bg-[#D72050] font-bold text-white">All news in this category</Link>
       </div>
          </div>
          <div className="col-span-3">
             <RightDiv></RightDiv>
          </div>
        </div>
    </div>
  )
}
