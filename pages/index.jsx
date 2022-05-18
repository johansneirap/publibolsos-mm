import Link from 'next/link'
import { InfoCard } from '../components/home/InfoCard'
import { MainLayout } from '../components/layouts/MainLayout'
import circleBg from '../public/asstes/circle-bg.svg'

export default function Home() {
  return (
    <MainLayout>
      <div style={{
          position: 'absolute',
          // top: '50%',
          top: 0,
          right: 0,
          transform: 'translate(-50%, -50%)',
          zIndex: 0
        }}>
          <img src={ circleBg.src } alt="circle background" style={{ maxWidth: '100%'}}/>
        </div>
      <aside className='index-aside'>
        <p>Asesórate por expertos con más de 20 años en el rubro</p>
        <h1 className="title">
            Confecciones de bolsos y mochilas a <span className='blue'>medida</span> 
            {/* <Link href="/about">About</Link> */}
          </h1>
          <br />
          <Link href="/contacto">
            <button className='main-button'>Conversemos</button>
          </Link>
      </aside>
      <section className='infocard-container'>
        <InfoCard 
          title={ "50K+" } 
          legend={ "Productos confeccionados y entregados satisfactoriamente a lo largo del último año (2021)." }/>
        <InfoCard 
          title={ "20+" } 
          legend={ "Años de servicio en el rubro, con impactantes alianzas y espléndidos resultados que nuestros clientes avalan." }/>
        <InfoCard 
          title={ "9/10" } 
          legend={ "Clientes satisfechos con nuestro trabajo y sus resultados." }/>
      </section>
    </MainLayout>
  )
}
