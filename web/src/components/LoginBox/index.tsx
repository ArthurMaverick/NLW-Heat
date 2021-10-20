import { useContext } from 'react'
import {VscGithubInverted} from 'react-icons/vsc'
import { AuthContext } from '../../context/auth'
import styles from './styles.module.scss'


export function Loginbox () {
  const {signInUrl} = useContext(AuthContext) 
  
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre é compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
      <VscGithubInverted size="24"/>
        Entrar com github
      </a>
    </div>
  )
}