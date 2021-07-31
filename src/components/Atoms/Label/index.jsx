const Label = ({ idFor, className, text }) => {
 return (
  <label htmlFor={idFor} className={className}>
   {text}
  </label>
 )
}

export default Label
