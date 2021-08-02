const Container = ({ className, fluid, children }) => {
 return (
  <div className={fluid ? `container-fluid ${className}` : `container ${className}`}>
   {children}
  </div>
 )
}

export default Container
