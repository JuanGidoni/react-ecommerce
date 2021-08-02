const Input = ({ id, type, text, className, name, min, max, onChange, onBlur, value }) => {
 return (
  type === "number" ? <input
   type={type}
   placeholder={text}
   name={name}
   className={className}
   onChange={onChange}
   min={min}
   onBlur={onBlur}
   max={max}
   value={value}
   id={id}
  /> : type === "date" ? <input
   type={type}
   name={name}
   className={className}
   onChange={onChange}
   onBlur={onBlur}
   value={value}
   id={id}
  /> : type === "checkbox" ? <input
   type={type}
   name={name}
   className={className}
   onChange={onChange}
   value={value}
   id={id}
  /> : <input
   type={type}
   placeholder={text}
   name={name}
   className={className}
   onChange={onChange}
   onBlur={onBlur}
   value={value}
   id={id}
  />
 )
}

export default Input
