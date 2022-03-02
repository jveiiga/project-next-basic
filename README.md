<h1 align="center">Project Next Basic - Projeto criado na maratona Rocketseat 🚀</h1>
<p align="center">
  <img alt="Logo do projeto" src="https://i.ytimg.com/vi/S5Qvi23VqaQ/maxresdefault.jpg" width="1200" height="350"/>
</p>

<h4 align="justify">A maratona Rocketseat é gratuita, voltada para profissionais, estudantes e para todo mundo que quer aprender mais sobre front-end e programação. O projeto é um esboço, criado com Nextjs para aprender e entender algumas de suas funcionalidades nativas e como manipulá-las.</h4>
 
## 💻 Linguagens e tecnologias utilizadas
<p align="left"> 
<a href="https://www.typescriptlang.org/docs/handbook/2/generics.html" target="_blank"><img src="https://appmasters.io/static/typescript-logo-26cc95f255ccb936d154b43614f61602.png" alt="typescript" width="40" height="40" max-width="100%"> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<a href="https://nextjs.org/" target="_blank"><img src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png" alt="next" width="40" height="40" max-width="100%"></a>   

## Finalidade dos estudos 
Entender a diferença entre:

Método client side render (Renderização lado cliente) 
  - Os dados são renderizados após o cliente já ter acessado a aplicação ou seja, geralmente é feito o uso do useState/useEffect para controle de estado
	   da aplicação e quando há uma nova modificação nos valores em tela a aplicação verifica no servidor e logo após carrega os dados atualizados.
	   No caso de Blogs ou sites que tem conteúdos que podem ser compartilhados, á uma pequena perda de dados na hora da verificação do conteúdo e, montagem do embedded (card), pois na hora da montagem do embedded (card) é que será feito pelo site que você deseja compartilhar o conteúdo, uma
 	   verificação que é chamada de crawler, o crawler acessa sua página e tenta buscar por informações para montar seu embedded (card), ainda neste 
	   modelo o site irá tentar buscar por informações para construir o embedded (card), mas o crawler não vai aguardar e o card retornará vazio.  

Método server side render (Renderização lado servidor) 
  - Casos de uso mais tradicionais são blog e sites onde o conteúdo pode ser compartilhado. Nesses casos a utilização desse serviço é feita pelos motivos
	   citados a cima.

Método Static Side Generation
- Os dados são armazenados em cache por um período de acordo com as configurações desenvolvidas em código, sendo assim, quando a primeira pessoa fizer a primeira requisição dos dados esse valor é guardado no browser e durante esse período todos que acessarem a aplicação viram o mesmo conteúdo, diminuindo drasticamente o número de requisições para o banco de dados da aplicação.  


On-demand Incremental Static Regeneration (New feature)
- Possibilita “forçar” um novo carregamento, independente do revalidação configurada. 

Middleware
- Possibilita “interceptar” as requisições do usuário. Podendo ser usado para interceptar um grupo de diretórios específicos.   

## Instalação
    - Clonar repositorio
    $ git clone https://github.com/jveiiga/project-next-basic && cd project-next-basic
## `npm run dev`
    Abra http: // localhost: 3000 para visualizá-lo no navegador.

## 👨‍🏫 Instrutor

- <a href="https://github.com/diego3g">Diego Fernandes</a> 

## 📚 Pesquisar/Aprender

  - Aprender sobre modelo SPA (Single Page Application);
  - Aprender sobre SSR (Server-Side Rendering) - Método de renderização lado servidor;
  - Aprender sobre ISR(Increment Static Regeneration) - Método de atualização automática com REVALIDATE;
  - Aprender sobre SSG(Static Site Generation) - Método de renderização onde o HTML é gerado de forma estatica no momento do build;
  
## 📂 Referencias
  <details>
    <summary>Decode #013</summary>
      - <a href="https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation">Next.js: Server-side Rendering vs. Static Generation</a> <br>
      - <a href="https://nextjs.org/learn/seo/crawling-and-indexing">Crawling and Indexing</a> <br>
      - <a href="https://www.toptal.com/react-hooks/stale-while-revalidate">Stale-while-revalidate</a> <br>
      - <a href="https://nextjs.org/blog/next-12-1">On-demand Incremental Static Regeneration (Beta)</a> <br>
      - <a href="https://nextjs.org/docs/middleware">Middleware</a> <br>
  </details>
