import React from 'react'
import Image from 'next/image';
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/postCard'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {/* <Image src="/post.png" alt="" fill className={styles.img}/> */}
        </div>
        <span></span>
      </div>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      
    </div>
  )
}

export default BlogPage