import React from 'react'
import styles from './crudtool.module.scss';

type Props={
  text: string;
}

const Title: React.FC<Props> = ({text}) => {
  return (
    <h1 className={styles['tool-container__title']}>{text}</h1>
  )
}

export default Title