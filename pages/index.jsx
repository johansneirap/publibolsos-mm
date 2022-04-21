import Link from 'next/link'
import { InfoCard } from '../components/home/InfoCard'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <aside className='index-aside'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elite</p>
        <h1 className="title">
            Confecciones de bolsos y mochilas a medida <Link href="/about">About</Link>
          </h1>
        <button className='main-button'>Conversemos</button>
      </aside>
      <section className='infocard-container'>
        <InfoCard 
          title={ "50K+" } 
          legend={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam!" }/>
        <InfoCard 
          title={ "15+" } 
          legend={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam!" }/>
        <InfoCard 
          title={ "9/10" } 
          legend={ "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam!" }/>
      </section>
    </MainLayout>
  )
}
