import React from 'react'
import { payments } from './footer-data'

//This component will be displaying payments related links. It will import the links from Footer-data File. then .map will be used to display each link.
const FooterPayments = () => {
  return (
    <div className='w-1/4 '>
        <h1 className='payments-title text-center p-4'>
            Paymnets Methods
        </h1>
        <div  className='footer-payments text-sm flex justify-between'>
        {
            payments.map(
                (payment, index) =>
                <div key={index} className='border border-yellow-400 py-4 px-2 rounded-md'>
                    {payment.name}
                </div>
            )
        }
        </div>
    </div>

  )
}

export default FooterPayments