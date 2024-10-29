import React from 'react'


type ModalCardLinks = {
  link_card: {
    link:string;
    link_title:string;
  };
};
const LinkCard:React.FC<ModalCardLinks>  = ({link_card}) => {
  const openLink = (url:string) => {
    window.open(url, '_blank');
  };
  
  return (
    <div onClick={()=>openLink(link_card.link)} className='py-2 px-4 bg-pink-300 font-semibold cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition'>
      {link_card.link_title}
    </div>
  )
}

export default LinkCard
