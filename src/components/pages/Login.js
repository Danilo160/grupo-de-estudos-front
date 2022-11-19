import React,{useState,useEffect} from "react";
import ReactLoading from 'react-loading';
//const userToken = window.localStorage.getItem("token")

export const Login = () => {
 

  useEffect(()=>{
/*     if(userToken!==""){
      window.location.href = "/profile"
    } */
    window.localStorage.setItem("token","")
  },[])
  

  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [label, setLabel] = useState("");

  const [colorLabel, setColorLabel] = useState("")

  const [borderColorEmail, setBorderColorEmail] = useState("#97AEC3")
  const [borderColorSenha, setBorderColorSenha] = useState("#97AEC3")


  const [verifica, setVerifica] = useState(false)
  const [padding, setPadding] = useState("")

  useEffect(() => {
    verifica === false ? setColorLabel("lightcoral"): setColorLabel("lightgreen")
  }, [verifica]);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true)
    
    var data = JSON.stringify({
      email,
      senha
  
    })

    var requestOptions = {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      redirect: 'follow'
    };
    
    fetch("http://localhost:5000/aluno/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
          
          setPadding("2px")
          if(email==="" && senha===""){
            setColorLabel("lightcoral")
            setBorderColorEmail("lightcoral")
            setBorderColorSenha("lightcoral")
            setLabel("Erro! Alguns campos não foram definidos!")
            setLoading(false)
          }else{
            if(email==="" && senha!==""){
              setColorLabel("lightcoral")
              setBorderColorEmail("lightcoral")
              setBorderColorSenha("#97AEC3")
              setLabel("Erro! Alguns campos não foram definidos!")
              setLoading(false)
            }else{
              if(email!=="" && senha===""){
                setColorLabel("lightcoral")
                setBorderColorEmail("#97AEC3")
                setBorderColorSenha("lightcoral")
                setLabel("Erro! Alguns campos não foram definidos!")
                setLoading(false)
              }            else{
                if(data.error==="Usuário não encontrado!"){
                  setColorLabel("lightcoral")
                  setBorderColorEmail("lightcoral")
                  setBorderColorSenha("#97AEC3")
                  setLabel(data.error)
                  setLoading(false)
                }else{
                  if(data.error==="Senha inválida!"){
                    setColorLabel("lightcoral")
                    setBorderColorEmail("#97AEC3")
                    setBorderColorSenha("lightcoral")
                    setLabel(data.error)
                    setLoading(false)
                  }else{
                    if(data.status==="ok"){
                      setColorLabel("lightgreen")
                      setBorderColorEmail("#97AEC3")
                      setBorderColorSenha("#97AEC3")
                      setLabel("Login Realizado com Sucesso!")
                      setLoading(false)
                      console.log(data.body)
                      console.log(data.data)
                      window.localStorage.setItem("token", data.data);
                      window.localStorage.setItem("id", data.body.id);
                      window.localStorage.setItem("nome", data.body.nome);
                      window.localStorage.setItem("email", data.body.email);
                      window.localStorage.setItem("foto", data.body.foto);
                      window.location.href="/profile"
                     }
                  }
                }
              }
            }
          }
          
      })
      .catch(error =>{if(error){ setLoading(false);setLabel("Falha no servidor!")}})
      setVerifica(false)


  }


  return (
    
    <div className="containerPage">
      <form className="box" onSubmit={handleSubmit} >

        <img src={"https://cdn-icons-png.flaticon.com/512/3829/3829933.png"}  alt="Logo do site - Login - Estudantes se formando" className="imageLabel"/>

        <div className="div">
        <label className="title">Entrar</label>
        </div>

        <div>
          <input
            type="email"
            className="loginUser"
            placeholder="Email"
            style={{borderColor: borderColorEmail}}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          
          <input
            type="password"
            placeholder="Senha"
            style={{borderColor: borderColorSenha}}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div>
            <button type="submit">Logar</button>
            {loading===true?<div className="containerLoading">
              <ReactLoading type={"spin"} color={"#528abe"} height={20} width={20} />
            </div>: null}
        </div>

        <p className="text">
          Não possui registro? <a  style={{textDecoration:"none"}} href="/register">Cadastrar conta</a>
        </p>

        <div className="divLabel">
          <p className="contentLabel" style={{backgroundColor: colorLabel, padding:padding}}>
            <label className="Label">{label}</label>
          </p>
        </div>
        
      </form>
    
    </div>
  );
};