import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading';

export const Register = () => {

  const [loading, setLoading] = useState(false)

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [label, setLabel] = useState("");
 
  const [colorLabel, setColorLabel] = useState("")

  const [borderColorNome, setBorderColorNome] = useState("#97AEC3")
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
      nome,
      email,
      senha,
      foto:""
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
    
    fetch("http://localhost:5000/aluno/cadastro", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setPadding("2px")
        console.log(data.mensagem);

        if(data.mensagem){
          if(data.mensagem === "Aluno cadastrado com sucesso :)"){
            setVerifica(true)
            setBorderColorNome("#97AEC3")
            setBorderColorEmail("#97AEC3")
            setBorderColorSenha("#97AEC3")
            setLoading(false)

          }else{
            if(data.mensagem === "Erro! Alguns campos não foram definidos!"){
              if(nome==="" && email!=="" && senha!==""){
                setBorderColorNome("lightcoral")
                setBorderColorEmail("#97AEC3")
                setBorderColorSenha("#97AEC3")
              }
              if(nome!=="" && email==="" && senha!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorEmail("lightcoral")
                setBorderColorSenha("#97AEC3")
              }
              if(nome!=="" && email==="" && senha===""){
                setBorderColorNome("#97AEC3")
                setBorderColorEmail("lightcoral")
                setBorderColorSenha("lightcoral")
              }
              if(nome!=="" && email!=="" && senha===""){
                setBorderColorNome("#97AEC3")
                setBorderColorEmail("#97AEC3")
                setBorderColorSenha("lightcoral")
              }
              if(nome==="" && email!=="" && senha===""){
                setBorderColorNome("lightcoral")
                setBorderColorEmail("#97AEC3")
                setBorderColorSenha("lightcoral")
              }
              if(nome==="" && email==="" && senha!==""){
                setBorderColorNome("lightcoral")
                setBorderColorEmail("lightcoral")
                setBorderColorSenha("#97AEC3")
              }
              if(nome!=="" && email!=="" && senha!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorEmail("#97AEC3")
                setBorderColorSenha("#97AEC3")
              }
              
              if(nome==="" && email==="" && senha===""){
                setBorderColorNome("lightcoral")
                setBorderColorEmail("lightcoral")
                setBorderColorSenha("lightcoral")
              }
              
            }


            else{
              setBorderColorNome("#97AEC3")
              setBorderColorEmail("lightcoral")
              setBorderColorSenha("#97AEC3")
              
            }
          }
          setLabel(data.mensagem)
          setLoading(false)
        }
        else{
          setLabel("Erro inesperado!")
        }
      })
      .catch(error =>{if(error){ setLabel("Falha no servidor!")}})

      setVerifica(false)

  }

  return (
    <>
    
    <div className="containerPage">

      <form className="box" onSubmit={handleSubmit} >
        <img src={"https://cdn-icons-png.flaticon.com/512/3456/3456426.png"}  alt="Logo do site - Registro - Papel e caneta" className="imageLabel"/>
        <div className="div">
        <label className="title">Registre-se</label>
        </div>

        <div>
          <input
            type="text"
            placeholder="Nome completo"
            style={{borderColor: borderColorNome}}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
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
            <button type="submit">Registrar-se</button>
            {loading===true?<div className="containerLoading">
              <ReactLoading type={"spin"} color={"#528abe"} height={20} width={20} />
            </div>: null}
        </div>

        <p className="text">
          Já possui registro? <a style={{textDecoration:"none"}} href="/login">Logar</a>
        </p>

        <div className="divLabel">
          <p className="contentLabel" style={{backgroundColor: colorLabel, padding:padding}}>
            <label className="Label">{label}</label>
          </p>
        </div>

      </form>
    </div>
    </>
  );
};