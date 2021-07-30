const Heading = ({ type, className, text }) => {

 const h1 = <h1 className={className}>{text}</h1>;
 const h2 = <h2 className={className}>{text}</h2>;
 const h3 = <h3 className={className}>{text}</h3>;
 const h4 = <h4 className={className}>{text}</h4>;
 const h5 = <h5 className={className}>{text}</h5>;

 return (
  type === "h1" ? h1
   : type === "h2" ? h2
    : type === "h3" ? h3
     : type === "h4" ? h4
      : h5
 )
}

export default Heading
