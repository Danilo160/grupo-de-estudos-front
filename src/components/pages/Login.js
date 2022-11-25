import React,{useState,useEffect} from "react";
import ReactLoading from 'react-loading';
import Modal from "react-modal"
import {customStyles} from '../Resultado/ModalStyle'
//const userToken = window.localStorage.getItem("token")

Modal.setAppElement("#root");

export const Login = () => {
 

  useEffect(()=>{
/*     if(userToken!==""){
      window.location.href = "/profile"
    } */
    window.localStorage.setItem("token","")
  },[])
  

  const [loading, setLoading] = useState(false)

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    
  }

  function closeModal() {
    setIsOpen(false);
    setBorderColorEmailV("#97AEC3")
    setBorderColorNovaSenha("#97AEC3")
    setLabelV("")
    setColorLabelV("")
    setPaddingV("")
  }

  const [emailV, setEmailV] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [labelV, setLabelV] = useState("");

  const [colorLabelV, setColorLabelV] = useState("")
  const [borderColorEmailV, setBorderColorEmailV] = useState("#97AEC3")
  const [borderColorNovaSenha, setBorderColorNovaSenha] = useState("#97AEC3")

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [label, setLabel] = useState("");



  const [colorLabel, setColorLabel] = useState("")
  const [borderColorEmail, setBorderColorEmail] = useState("#97AEC3")
  const [borderColorSenha, setBorderColorSenha] = useState("#97AEC3")


  const [verifica, setVerifica] = useState(false)
  const [padding, setPadding] = useState("")

  const [verificaV, setVerificaV] = useState(false)
  const [paddingV, setPaddingV] = useState("")

  useEffect(() => {
    verifica === false ? setColorLabel("lightcoral"): setColorLabel("lightgreen")
  }, [verifica]);

  useEffect(() => {
    verificaV === false ? setColorLabelV("lightcoral"): setColorLabelV("lightgreen")
  }, [verificaV]);

  const newPassword = (e) =>{
    e.preventDefault();
    setLoading(true)

    var data = JSON.stringify({
      email: emailV,
      senha: novaSenha
  
    })

    var requestOptions = {
      method: 'PUT',
      body: data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      redirect: 'follow'
    };
    
    fetch(`https://grupo-de-estudos-back.onrender.com/aluno/update-password/`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setPaddingV("2px")
        if(emailV==="" && novaSenha===""){
          setColorLabelV("lightcoral")
          setBorderColorEmailV("lightcoral")
          setBorderColorNovaSenha("lightcoral")
          setLabelV("Erro! Alguns campos não foram definidos!")
          setLoading(false)
        }else{
          if(emailV==="" && novaSenha!==""){
            setColorLabelV("lightcoral")
            setBorderColorEmailV("lightcoral")
            setBorderColorNovaSenha("#97AEC3")
            setLabelV("Erro! Alguns campos não foram definidos!")
            setLoading(false)
          }else{
            if(emailV!=="" && novaSenha===""){
              setColorLabelV("lightcoral")
              setBorderColorEmailV("#97AEC3")
              setBorderColorNovaSenha("lightcoral")
              setLabelV("Erro! Alguns campos não foram definidos!")
              setLoading(false)
            }else{
              if(data.mensagem==="Falha ao atualizar senha! Email não encontrado!"){
                setColorLabelV("lightcoral")
                setBorderColorEmailV("lightcoral")
                setBorderColorNovaSenha("#97AEC3")
                setLabelV(data.mensagem)
                setLoading(false)  
              }else{
                if(data.mensagem==="Senha atualizada com sucesso!"){
                  setColorLabelV("#97AEC3")
                  setBorderColorEmailV("#97AEC3")
                  setBorderColorNovaSenha("#97AEC3")
                  setLabelV(data.mensagem)
                  setColorLabelV("lightgreen")
                  setLoading(false)
                  window.location.reload()      
                }    
              }
            }  
          }
        }
      }   
        
    )
    .catch(error =>{if(error){ setLoading(false);setLabelV("Falha no servidor!")}})
    setVerificaV(false)

  }
  
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
    
    fetch("https://grupo-de-estudos-back.onrender.com/aluno/login", requestOptions)
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
          <span onClick={openModal} className='linkModal'> Esqueceu a senha?</span>
        </p>

        <p className="text">
          Não possui registro? <a  style={{textDecoration:"none"}} className='linkModal' href="/register">Cadastrar conta</a>
          
        </p>

        


        <div className="divLabel">
          <p className="contentLabel" style={{backgroundColor: colorLabel, padding:padding}}>
            <label className="Label">{label}</label>
          </p>
        </div>
        
      </form>

      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"

        >
          <div style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
            <img src='https://cdn-icons-png.flaticon.com/512/463/463612.png' onClick={closeModal} alt="close" width={30} height={30} style={{cursor:'pointer'}}/>
          </div>

          <h2 className='titleModal'>{"Esqueceu a senha?"}</h2>

          <form style={{marginTop:"50px", marginBottom:"50px", border:"none"}} onSubmit={newPassword}>
            <div>
              <input
                type="email"
                className="loginUser"
                placeholder="Email"
                style={{borderColor: borderColorEmailV}}
                onChange={(e) => setEmailV(e.target.value)}
              />
            </div>

            <div>
              
              <input
                type="password"
                placeholder="Nova senha"
                style={{borderColor: borderColorNovaSenha}}
                onChange={(e) => setNovaSenha(e.target.value)}
              />
            </div>

            {loading===true?<div className="containerLoading">
              <ReactLoading type={"spin"} color={"#528abe"} height={20} width={20} />
            </div>: null}

            <div className="divLabel">
              <p className="contentLabel" style={{backgroundColor: colorLabelV, padding:paddingV}}>
                <label className="Label">{labelV}</label>
              </p>
            </div>

            <div><button title='Resetar senha' className="buttonResetPass" >
            <span style={{fontSize:"15px"}}>Resetar senha</span>
            </button></div>


            
          </form>
      </Modal>
    
    </div>
  );
};