import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date } = props;
        return (
          
                <div className="card  p-4 bg-slate-200 my-2 mx-1 rounded-lg">

                    <img src={!imageUrl ? 
                        "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} 
                        className=" " alt="..." />
                    <div className="card-body">
                        <h5 className=" text-xl font-extrabold">{title}  </h5>
                        <p className="text-md font-semibold">{description}</p>
                        <p className="text-sm font-extrabold mb-5"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className=" border-2 bg-blue-400 hover:bg-blue-500 p-2 rounded-lg ">Read More</a>
                    </div>
                </div>
       
        )
     
}

export default NewsItem