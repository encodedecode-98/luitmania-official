import React from 'react'
const items = ["HomePage" , "Services" , "Porfolio","Contact","About"]
const Links = () => {
  return (
    <div className="links">
        {items.map((item)=>{
            return <a href={`#${item}`}>{item}</a>
        })}
    </div>
  )
}

export default Links