import { Link } from "react-router-dom";


const Article = ({ article }) => {
  return (
    <div className="card border rounded-lg overflow-hidden mt-5">
      <div className="flex items-center p-4 bg-[#F3F3F3]">
        <img
          src={article.author.img}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">{article.author.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(article.author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <img src={article.thumbnail_url} alt="Article" className="w-full h-[300px] object-fit mb-2 rounded-md" />
        <p className="text-sm text-gray-600 mb-4">
          {new Date(article.published_date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          <br />
          <span className="text-xs text-gray-400">
            {article.tags ? article.tags.join(', ') : ''}
          </span>
        </p>
        <p className="text-sm">{article.details}</p>
        <Link to={`/news/${article._id}`} className="text-red-500 cursor-pointer mt-2">Read More</Link>
      </div>
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < article.rating.stars ? 'currentColor' : 'none'}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-5 w-5 ${index < article.rating.stars ? 'text-yellow-500' : 'text-gray-300'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.222 6.839a1 1 0 00.95.69h7.219c.969 0 1.371 1.24.588 1.81l-5.833 4.24a1 1 0 00-.363 1.118l2.222 6.839c.3.921-.755 1.688-1.54 1.118l-5.833-4.24a1 1 0 00-1.176 0l-5.833 4.24c-.784.57-1.84-.197-1.54-1.118l2.222-6.839a1 1 0 00-.363-1.118l-5.833-4.24c-.784-.57-.381-1.81.588-1.81h7.219a1 1 0 00.95-.69l2.222-6.839z"
              />
            </svg>
          ))}
          <span className="text-sm ml-2">{article.rating.stars}</span>
        </div>
        <div className="text-gray-500 text-sm flex items-center">
          <svg
            className="w-5 h-5 mr-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 4.318c2.833-1.75 6.5-1.75 9.333 0C22.955 5.222 24 6.796 24 8.546c0 2.625-3.333 5.482-9 10.142-5.667-4.66-9-7.517-9-10.142 0-1.75 1.045-3.324 2.667-4.228 2.833-1.75 6.5-1.75 9.333 0z"
              clipRule="evenodd"
            />
          </svg>
          {article.total_view}
        </div>
      </div>
    </div>
  );
};

export default Article;
