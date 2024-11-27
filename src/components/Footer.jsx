import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import Image from './Image';
import Logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <div className='flex justify-around items-center py-6 mt-12  text-black border-t border-black'>

      <div className='flex flex-col gap-1 items-center '>
        <div className='flex justify-center items-center gap-2'>
          <Image src={Logo} className={"w-24 h-24"}/>       
          <h5 className='text-xl font-spicyRice'>ÖğreniLand</h5>
        </div>
        
        <p className='text-sm '>@copyright 2024, Tüm Hakları Saklıdır</p>
      </div>

      <div className='flex flex-col items-center gap-3'>
        <h6 className='text-xl font-semibold'>Sosyal Medya</h6>
        <div className='flex justify-center items-center gap-3'>
          <FacebookRoundedIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }} className='cursor-pointer'/>
          <InstagramIcon sx={{ fontSize:{ xs:15, sm:20, md:25} }} className='cursor-pointer  hover:text-[#]'/>       
          <XIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }} className='cursor-pointer  hover:text-[#]'/>
        </div>
      </div>

      <div className='flex flex-col items-center gap-3'>
        <h6 className='text-xl font-semibold'>Bize Ulaşın</h6>
        <div className='flex justify-center items-center gap-2'>
          <EmailIcon sx={{ fontSize:{ xs:15, sm:20, md:20} }} className='cursor-pointer  hover:text-[#]'/>
          <p className='text-sm cursor-pointer'>info@gmail.com</p>
        </div>
        
      </div>

    </div>
  )
}

export default Footer
