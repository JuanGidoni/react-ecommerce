import React from 'react'
import Button from '../../Atoms/Button'
import Heading from '../../Atoms/Heading'
import Parragraph from '../../Atoms/Parragraph'

const ShowcaseContainer = ({categoryName}) => {
 return (
  <div className="showcase-container">
   <div className="showcase-content">
     <div className={`category category-${categoryName}`}>
      <Heading 
      type="h1"
      className=""
      text="Notebooks"
      />
      <Parragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere consectetur, saepe delectus iusto magni! Molestias vel quaerat neque dignissimos."/>
     <Button type="button" className="btn btn-primary" text="View more" />
     </div>
   </div>
  </div>
 )
}

export default ShowcaseContainer
