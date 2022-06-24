import Head from 'next/head';
import Button from '@mui/material/Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (<>
    <Head>
      <title>Nextailmui</title>
      {/* meta tags here */}
    </Head>
    <div className='grid h-screen w-screen content-center text-center'>
      <h1 className={`text-3xl font-bold underline text-paper text-primary ${styles.test}`}>NextJS + TailWind CSS + Material UI</h1>
      <Button className='w-36 bg-blue-500 mx-auto my-3' variant='contained' onClick={()=>{alert('Everything is working !')}}><ThumbUpIcon/></Button>
    </div>
  </>
  )
}
