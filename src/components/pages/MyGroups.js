import React,{useRef,useState,useEffect} from "react";
import Navbar from "../Navbar/Navbar"
import {Busca} from "../Busca/Busca"
import {MyGroupsResullt} from "../Resultado/MyGroupsResult";
import Modal from "react-modal"
import {customStyles} from '../Resultado/ModalStyle'
const userId = window.localStorage.getItem("id");
const userToken = window.localStorage.getItem("token");

Modal.setAppElement("#root");
export const MyGroups = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [meta, setMeta] = useState("")
  const [data_encontros, setDataEncontros] = useState("")
  const [material, setMaterial] = useState("")
  const [label, setLabel] = useState("");

  const [dataGroup, setDataGroup] = useState([])
  const [dataSearch, setDataSearch] = useState([])

 
 
  const [colorLabel, setColorLabel] = useState("")

  const [borderColorNome, setBorderColorNome] = useState("#97AEC3")
  const [borderColorDescricao, setBorderColorDescricao] = useState("#97AEC3")
  const [borderColorMeta, setBorderColorMeta] = useState("#97AEC3")
  const [borderColorDataEncontros, setBorderColorDataEncontros] = useState("#97AEC3")
  const [borderColorMaterial, setBorderColorMaterial] = useState("#97AEC3")


  const [verifica, setVerifica] = useState(false)
  const [padding, setPadding] = useState("")



  useEffect(() => {
    verifica === false ? setColorLabel("lightcoral"): setColorLabel("lightgreen")
  }, [verifica]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    
    var data = JSON.stringify({
      nome,
      descricao,
      meta,
      data_encontros,
      material,
      membro:[userId],
      token: userToken
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
    
    fetch("https://grupo-de-estudos-back.onrender.com/grupo/cadastro", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setPadding("2px")
        console.log(data.mensagem);

        if(data.mensagem){
          if(data.mensagem === "Grupo criado com sucesso :D"){
            setVerifica(true)
            setBorderColorNome("#97AEC3")
            setBorderColorDescricao("#97AEC3")
            setBorderColorMeta("#97AEC3")
            setBorderColorDataEncontros("#97AEC3")
            setBorderColorMaterial("#97AEC3")
            window.location.reload()

          }else{
            if(data.mensagem === "Erro! Alguns campos não foram definidos!"){
              if(nome==="" && descricao!=="" && meta!=="" && data_encontros!=="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("#97AEC3")
              }
              if(nome!=="" && descricao==="" && meta!=="" && data_encontros!=="" && material!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("#97AEC3")
              }
              if(nome!=="" && descricao!=="" && meta==="" && data_encontros!=="" && material!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("#97AEC3")
              }
              if(nome!=="" && descricao!=="" && meta!=="" && data_encontros==="" && material!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }
              if(nome!=="" && descricao!=="" && meta!=="" && data_encontros!=="" && material===""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("lightcoral")
              }
              if(nome==="" && descricao==="" && meta==="" && data_encontros==="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }
              if(nome!=="" && descricao==="" && meta==="" && data_encontros==="" && material===""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }
              
              if(nome==="" && descricao!=="" && meta==="" && data_encontros==="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }

              if(nome==="" && descricao==="" && meta!=="" && data_encontros==="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }

              if(nome==="" && descricao==="" && meta==="" && data_encontros!=="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("lightcoral")
              }

              if(nome==="" && descricao==="" && meta==="" && data_encontros==="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome==="" && descricao==="" && meta==="" && data_encontros!=="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome==="" && descricao==="" && meta!=="" && data_encontros!=="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome!=="" && descricao!=="" && meta!=="" && data_encontros==="" && material===""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }

              if(nome!=="" && descricao!=="" && meta==="" && data_encontros==="" && material===""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }

              if(nome!=="" && descricao==="" && meta!=="" && data_encontros==="" && material===""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }

              if(nome!=="" && descricao==="" && meta==="" && data_encontros!=="" && material===""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("lightcoral")
              }

              if(nome!=="" && descricao==="" && meta==="" && data_encontros==="" && material!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome!=="" && descricao==="" && meta==="" && data_encontros!=="" && material!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome!=="" && descricao==="" && meta!=="" && data_encontros==="" && material!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome!=="" && descricao!=="" && meta==="" && data_encontros!=="" && material===""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("lightcoral")
              }

              if(nome!=="" && descricao!=="" && meta==="" && data_encontros==="" && material!==""){
                setBorderColorNome("#97AEC3")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome==="" && descricao==="" && meta!=="" && data_encontros!=="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("lightcoral")
              }

              if(nome==="" && descricao!=="" && meta!=="" && data_encontros!=="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("lightcoral")
              }

              if(nome==="" && descricao!=="" && meta!=="" && data_encontros==="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("lightcoral")
              }

              if(nome==="" && descricao!=="" && meta!=="" && data_encontros==="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome==="" && descricao==="" && meta!=="" && data_encontros==="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("lightcoral")
                setBorderColorMeta("#97AEC3")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome==="" && descricao!=="" && meta==="" && data_encontros!=="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome==="" && descricao!=="" && meta==="" && data_encontros==="" && material!==""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("lightcoral")
                setBorderColorMaterial("#97AEC3")
              }

              if(nome==="" && descricao!=="" && meta==="" && data_encontros!=="" && material===""){
                setBorderColorNome("lightcoral")
                setBorderColorDescricao("#97AEC3")
                setBorderColorMeta("lightcoral")
                setBorderColorDataEncontros("#97AEC3")
                setBorderColorMaterial("lightcoral")
              }
              
            }


            else{
              setBorderColorNome("lightcoral")
              setBorderColorDescricao("#97AEC3")
              setBorderColorMeta("#97AEC3")
              setBorderColorDataEncontros("#97AEC3")
              setBorderColorMaterial("#97AEC3")
            }
          }
          setLabel(data.mensagem)
        }
        else{
          setLabel("Erro inesperado!")
        }
      })
      .catch(error =>{if(error){ setLabel("Falha no servidor!")}})

      setVerifica(false)

  }

  function convertToBase64() {
    var selectedFile = document.getElementById("filePDF").files;

    if (selectedFile.length > 0) {
        var fileToLoad = selectedFile[0];
        var fileReader = new FileReader();
        var base64;
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            console.log(base64);
            setMaterial(base64)
        };
        fileReader.readAsDataURL(fileToLoad);
    }else{
      setMaterial("")
    }
}

  const changeFile = () => {
    convertToBase64()

 }

  function openModal() {
    setIsOpen(true);
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  const inputref = useRef();
  const [filter, setFilter] = useState('');

  const searchText = (e) =>{
    setFilter(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      inputref.current.blur();
    }
  }

  useEffect(() => {

    var requestOptions = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        'x-access-token': userToken
      },
      redirect: 'follow'
    };
    
    fetch("https://grupo-de-estudos-back.onrender.com/grupos-de-estudos", requestOptions)
      .then((res) => res.json())
      .then((data) => {
         //console.log(data)
         setDataGroup(data)
         
      }).catch(error =>{if(error){ alert("Não foi possível resgatar grupos! Falha no servidor!")}})

  }, []);

  useEffect(()=>{
    const data = dataGroup.filter(item=>{
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase().trim())
        )
    })
    setDataSearch(data)
    
  }, [filter,dataGroup])



  return (
  
    <>
      <Navbar/>
      <div>
      <h1 className="titleSearchGroups">Meus grupos</h1>
      <div style={{textAlign:"center",marginBottom:"10px"}}><img src="https://cdn-icons-png.flaticon.com/512/992/992482.png" alt= "cadastrar grupo" title="Cadastrar grupo" width={30} height={30} style={{cursor:"pointer"}} onClick={openModal}/></div>
      <Busca searchText={searchText} filter={filter} handleKeyPress={handleKeyPress} inputref={inputref}/>
      <MyGroupsResullt dataSearch={dataSearch}/>
      <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
          
                  >
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                      <img src='https://cdn-icons-png.flaticon.com/512/463/463612.png' onClick={closeModal} alt="close" width={30} height={30} style={{cursor:'pointer'}}/>
                    </div>

                    <h2 className='titleModal'>Cadastrar novo grupo</h2>

                    <form style={{marginTop:"50px", marginBottom:"50px", border:"none"}} onSubmit={handleSubmit}>
                        <div>
                          <input
                            type="text"
                            className="loginUser"
                            placeholder="Nome do grupo"
                            style={{borderColor: borderColorNome}}
                            onChange={(e) => setNome(e.target.value)}
                          />
                        </div>

                        <div>
                          
                          <input
                            type="text"
                            placeholder="Descrição"
                            style={{borderColor: borderColorDescricao}}
                            onChange={(e) => setDescricao(e.target.value)}
                          />
                        </div>

                        <div>
                          
                          <input
                            type="text"
                            placeholder="Meta"
                            style={{borderColor: borderColorMeta}}
                            onChange={(e) => setMeta(e.target.value)}
                          />
                        </div>

                        <div>
                          
                          <select
                              name="opcoes" id="select" value={data_encontros} style={{borderColor: borderColorDataEncontros}} onChange={(e) => setDataEncontros(e.target.value)}>
                              <option value="">Selecione uma opção de encontro semanal</option>
                              <option value="Segunda-feira">Segunda-feira</option>
                              <option value="Terça-feira">Terça-feira</option>
                              <option value="Quarta-feira">Quarta-feira</option>
                              <option value="Quinta-feira">Quinta-feira</option>
                              <option value="Sexta-feira">Sexta-feira</option>
                          </select>
                        </div>

                        <div>
                          
                          <input
                            id="filePDF"
                            type="file"
                            placeholder="Selecione o material de estudo"
                            accept="application/pdf"
                            style={{borderColor: borderColorMaterial}}
                            onChange={changeFile}
                          />
                        </div>

                        <div>
                          
                          <button title="Cadastrar grupo">Cadastrar grupo</button>
                        </div>


                        <div className="divLabel">
                          <p className="contentLabel" style={{backgroundColor: colorLabel, padding:padding, width:"500px"}}>
                            <label className="Label">{label}</label>
                          </p>
                        </div>
                      
                    </form>
                  </Modal>

      
    </div>
    
    </>
  );
};