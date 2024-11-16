import { useLoaderData } from "react-router-dom"
import Article from "./Article";

export default function Category() {
    const data = useLoaderData()
    const news = data.data
  return (
    <div>
        <h3 className="font-bold">Dragon News Home</h3>
        <div className="space-y-5">
            {
                news.map(article=><Article article={article}></Article>)
            }
        </div>
    </div>
  );
};
  

