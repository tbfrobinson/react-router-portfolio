export default function Blog(props) { /*console.log(props);*/ const blogs = props.posts.map((p, i) => { return (<div key={`bog.${i}`} style={{fontSize:'2px',}}><h2>{p.title}</h2><h3>Written By: {p.author}</h3><p>{p.content}</p><hr/></div>)});return ( <>blog posts: <div style={{height:'20vh'}}>{blogs}</div></>)}