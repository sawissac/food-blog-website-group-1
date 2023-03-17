import React from 'react'
import styles from './crudtool.module.scss'
import FormInput from './FormInput'
import Button from './Button'
import PostList from './PostList'
import { mockData } from '../../mock-data'
import ContentUpdater from './ContentUpdater'
import Title from './Title'

const CRUDTool = () => {
  const data = mockData.blogData;
  return (
    <section className={styles['tool-container']}>
      <div className={styles['tool-container__inner']}>
        <Title text='General'/>
        <FormInput name='user-name' placeHolder='Username' type='text' />
        <Button value='Rename' />
        <Title text='Main Banner'/>
        <FormInput name='user-name' placeHolder='Main Banner' type='number' />
        <Button value='SET' />
        <PostList mockdata={data}/>
        <ContentUpdater />
      </div>
    </section>
  )
}

export default CRUDTool