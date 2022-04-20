import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
        width: '60%',
        height: '100%',
        padding: '20px',
        gap: '50px',
        marginTop: '50px',
      }}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elite</p>
        <h1 className="title">
            Confecciones de bolsos y mochilas a medida <Link href="/about">About</Link>
          </h1>
        <button className='main-button'>Conversemos!</button>
      </div>
      <div style={{
        border: '1px solid #ccc',
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '100px',
        paddingLeft: '50px',
        paddingRight: '50px',
      }}>
        <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas!</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam!</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam!</div>
      </div>
    </MainLayout>
  )
}
