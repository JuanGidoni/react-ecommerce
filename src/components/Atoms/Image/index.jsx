const Image = ({ url, info, className }) => {
 return (
  <img src={url} alt={info} title={info} className={className} />
 )
}

export default Image
