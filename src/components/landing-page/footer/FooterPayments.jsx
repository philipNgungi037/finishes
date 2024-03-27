import React from 'react'
import { payments } from './footer-data'

//This component will be displaying payments related links. It will import the links from Footer-data File. then .map will be used to display each link.
const FooterPayments = () => {
  return (
    <div className='w-full xs:w-3/4 sm:w-1/2 lg:w-1/4 text-xs lg:text-sm '>
        <h1 className='payments-title text-center p-1 lg:p-4'>
            Paymnets Methods
        </h1>
        <div  className='footer-payments flex justify-between'>
        {
            payments.map(
                (payment, index) =>
                <div key={index} className='border border-yellow-400 py-1 lg:py-4 px-1 lg:px-2 rounded-md text-justify'>
                    {payment.name}
                </div>
            )
        }
        </div>
    </div>

  )
}

export default FooterPayments