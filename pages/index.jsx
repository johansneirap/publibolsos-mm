import Link from 'next/link'
import { InfoCard } from '../components/home/InfoCard'
import { MainLayout } from '../components/layouts/MainLayout'
import circleBg from '../public/asstes/circle-bg.svg'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MainLayout>
      <div style={{
          position: 'absolute',
          // top: '50%',
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          zIndex: 0
        }}>
          <img src={ circleBg.src } alt="circle background" style={{ maxWidth: '100%'}}/>
        </div>
      <aside className='index-aside'>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}>Asesórate por expertos con más de 20 años en el rubro</motion.p>
        <motion.h1 
          className="title"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}>
            Confecciones de bolsos y mochilas a <span className='blue'>medida</span>
          </motion.h1>
          <br />
          <Link href="/contacto">
            <motion.button 
              className='main-button'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y:0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}>Conversemos</motion.button>
          </Link>
      </aside>
      <section className='infocard-container'>
          <InfoCard 
            fMotion={{
              initial: { y:50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 1.5, ease: "easeInOut", delay: 0.0 }
            }}
            title={ "50K+" } 
            legend={ "Productos confeccionados y entregados satisfactoriamente a lo largo del último año (2021)." }/>
        
        <InfoCard
          fMotion={{
            initial: { y:50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 }
          }} 
          title={ "20+" } 
          legend={ "Años de servicio en el rubro, con impactantes alianzas y espléndidos resultados que nuestros clientes avalan." }/>
        <InfoCard
          fMotion={{
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            transition: { duration: 1.5, ease: "easeInOut", delay: 0.4 },
            
          }} 
          title={ "9/10" } 
          legend={ "Clientes satisfechos con nuestro trabajo y sus resultados." }/>
      </section>
    </MainLayout>
  )
}