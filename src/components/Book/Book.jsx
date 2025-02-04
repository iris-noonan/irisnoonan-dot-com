import { useState } from "react"

const Book = ({book}) => {
  const [logoSrc, setLogoSrc] = useState('');
  import(`../../assets/book-${book}.jpg`).then((module) => {
    setLogoSrc(module.default);
  });
  return (
    <div>
      <div  style={{
        backgroundImage: `linear-gradient(to right, rgb(60, 13, 20) 3px, rgba(255, 255, 255, 0.5) 5px, rgba(255, 255, 255, 0.25) 7px, rgba(255, 255, 255, 0.25) 10px, transparent 12px, transparent 16px, rgba(255, 255, 255, 0.25) 17px, transparent 22px), url(${logoSrc})`,
        backgroundSize: "cover",
        boxShadow: "0 0 5px -1px black, inset -1px 1px 2px rgba(255, 255, 255, 0.5)",
        margin: "auto",
        borderRadius: "5px",
        width: "200px",
        height: "300px",
      }} />
    </div>
  )
}

export default Book