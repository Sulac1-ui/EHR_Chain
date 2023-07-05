import Head from 'next/head';
// import Images from 'next/image';
import { Card, Grid, Image } from 'semantic-ui-react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import bg from '../components/bg.png'
export default function Home() {
  return (
    <div>
      <Layout>
        <Grid>
          <Grid.Row>
            <Image
              fluid
              src='https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/357724079_800887168160602_3380583116345042903_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=fmwXd7svAkwAX-ix2tw&_nc_ht=scontent.fktm6-1.fna&oh=03_AdTzGhIHgkSJsQjKoFC0rith-miKBAabcWfLXVimFtEmdg&oe=64C805E5'
              size="auto"
              alt="Banner"
            ></Image>
          </Grid.Row>
          
        </Grid>
      </Layout>

      { <footer className={styles.footer}>
        <a>
        <Link href='https://www.facebook.com/asmit.aryal.12'>
        <h1 style={{backgroundColor:'#095B57' , color:'#ffff',padding:'20px', borderRadius:'10Spx' }}> About us </h1>
        </Link>
        </a>
      </footer> }
     </div>
    
  );
}
