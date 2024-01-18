import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image src='https://avatars.githubusercontent.com/u/79475151?s=400&u=fcbefdf1fb1927b75ceb437b514a6562014a9666&v=4' alt='profile picture'
          width='192' height= '192' quality= '95' />
        </div>
      </div>


    </section>
  )
}
