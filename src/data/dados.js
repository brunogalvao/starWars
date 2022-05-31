export async function getStaticProps(context) {
    const id = context.params.id;
    console.log(`Gerou! ${id}`);
    // const dadosDaAPI = await fetch(`https://fakeapi-omariosouto.vercel.app/api/posts/${id}`)
    const dadosDaAPI = await fetch(`https://pp-api-desafio.herokuapp.com/agents/items/${id}`)
      .then((res) => res.json());
  
    // console.log('dados da API', dadosDaAPI.posts.length);
  
    const post = dadosDaAPI;
  
    // const post = dados.posts.find((currentPost) => {
    //   if(currentPost.id === id) {
    //     return true;
    //   }
    //   return false;
    // })
  
  
    return {
      props: {
        id: post.id,
        title: post.title,
        date: post.date,
        content: post.content,
      },
      revalidate: 60,
    }
  }


// export async function getServerSideProps() {

//     const cli = 'https://pp-api-desafio.herokuapp.com/agents'

//     const cliR = await fetch(cli)
//         .then(resp => {
//             return resp.json();
//         })
//         .then((resp) => {
//             return resp
//         })

//     return {
//         props: {
//             cliR,
//         }
//     }
// }

// export default function Home({ cliR }) {

//     // console.log(cliR.items.length)

//     const [value, setValue] = useState();

//     function optValue() {
//         {
//             cliR.items.slice(0, value).map(({ name, department, role, image, status, branch, agent_id, inactivestatus }) => (
//                 <li key={agent_id} id={agent_id}>
//                     <Organizacao
//                         img={image}
//                         nome={name}
//                         cargo={role}
//                         departamento={department}
//                         status={status || inactivestatus}
//                         unidade={branch}></Organizacao>
//                 </li>
//             ))
//         }

//         return

//     }

//     // valeu = 10;

//     // console.log(value);

//     // useEffect(() => {

//     //     const valeu = "4";

//     // }, [value])



//     return (
//         <div className="main">

//             <h1>Organização</h1>

//             <div className="content">

//                 <nav>
//                     <li>Colaboradores</li>
//                     <li>Cargo</li>
//                 </nav>

//                 <div className="lista">
//                     <div>
//                         <select
//                             value={value}
//                             onChange={(e) => {
//                                 // setValue(e.target.value);

//                                 // let valeu = +e.target.value;

//                                 // console.log(e.target.value);

//                                 const valeu = +e.target.value;

//                                 console.log(valeu);
//                             }}>
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                         </select>

//                         {/* <button onClick={optValue}>submit</button> */}
//                     </div>

//                     <ul>
//                         <li>
//                             <div>nome</div>
//                             <div>departamento</div>
//                             <div>cargo</div>
//                             <div>função</div>
//                             <div>status</div>
//                         </li>
//                         <li>{optValue()}</li>
//                         {cliR.items.slice( 0, 4 ).map(({ name, department, role, image, status, branch, agent_id, inactivestatus }) => (
//                             <li key={agent_id} id={agent_id}>
//                                 <Organizacao
//                                     img={image}
//                                     nome={name}
//                                     cargo={role}
//                                     departamento={department}
//                                     status={status || inactivestatus}
//                                     unidade={branch}></Organizacao>
//                             </li>
//                         ))}
//                     </ul>

//                 </div>
//             </div>

//         </div>
//     )
// }
