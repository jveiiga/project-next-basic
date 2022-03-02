import { GetServerSideProps, GetStaticProps } from 'next';
// import { useEffect, useState } from "react"

export default function Home({ repositories, date }) {
  
  // método client side render 
  // useEffect(() => {
  //   fetch('https://api.github.com/users/jveiiga/repos')
  //     .then(response => response.json())
  //     .then((data) => {
  //         const repositoryNames = data.map((item: { name: any; }) => item.name);
  //         setRepositories(repositoryNames);
  //     })
  // }, [])

  // método server side render
  // export const getServerSideProps: GetServerSideProps = async () => {
  //   const response = await fetch('https://api.github.com/users/jveiiga/repos');
  
  //   const data = await response.json();
  //   const repositoryNames = data.map((item) => item.name);
        
  //   return {
  //     props: {
  //       repositories: repositoryNames
  //     }
  //   }
  //   }
  
  return (
    <>
      <h1>{date}</h1>
      <ul>
          {repositories.map((repo: {} | null | undefined) => (
            <li key={repo}>{repo}</li>
            ))}    
      </ul>
    </>
  )
}

  export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://api.github.com/users/jveiiga/repos');
  
    const data = await response.json();
    const repositoryNames = data.map((item: { name: any; }) => item.name);
        
    return {
      props: {
        repositories: repositoryNames,
        date: new Date().toISOString(),
      },
      revalidate: 60 * 60 * 4, // 4 hours
      };
    };






 
