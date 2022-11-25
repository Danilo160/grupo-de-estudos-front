import React, {useState,useEffect} from 'react';
import ReactLoading from 'react-loading';
import Modal from 'react-modal';
import { customStyles } from './ModalStyle';
//const userName = window.localStorage.getItem('nome')
const userId = window.localStorage.getItem("id");
const userToken = window.localStorage.getItem("token");

Modal.setAppElement("#root");

export const SearchGroupsResullt = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true)

    const [groupName, setGroupName] = useState("")
    const [groupDesc, setGroupDesc] = useState("")

    function openModal(nome, descricao){
       setGroupName(nome)
       setGroupDesc(descricao)
       setIsOpen(true)
    }

    function closeModal(){
      setIsOpen(false)
   }

    function getId(id){
      var idGroup = id;

      var data = JSON.stringify({
        membro:userId,
        token: userToken
      })

      var requestOptions = {
        method: 'PUT',
        body:data,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        redirect: 'follow'
      };
      
      fetch(`https://grupo-de-estudos-back.onrender.com/grupo/update-membro/id=${idGroup}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
           console.log(data)
           alert("Você entrou no GRUPO! Para ver detalhes, consulte a aba MEUS GRUPOS!")
           window.location.reload()
           
        }   
        
        ).catch(error =>{if(error){ alert("Não foi possível entrar no grupo! Falha no servidor!")}})

    }

    let allGroupsFilter = []
    let allGroups = props.dataSearch
    

    for(var i in allGroups){
      if (!(allGroups[i]["membros"].includes(userId))){
          allGroupsFilter.push(allGroups[i])
      }
    }

    useEffect(()=>{
      if(allGroups.length>0){
        setLoading(false)
      }
    },[allGroups.length])

    return(
      
     loading===true?<div className="containerLoading">
     <ReactLoading type={"spin"} color={"#528abe"} height={40} width={40} />
   </div> :

    <section className='py-4'>
    <div className='row'>

 
    {allGroupsFilter.length>0 ? allGroupsFilter.map((item,index)=>{
        return(
         
          <div key={index}>
            
            <div  className='groupResults'>
                <h5 style={{fontSize:"15px", color:"#305F86"}}>{item.nome}</h5>
                <img className='imageGroupResults' src='https://cdn-icons-png.flaticon.com/512/2995/2995433.png' alt='Imagem ilustrativa do grupo'/>
                {/* <h2 style={{fontSize:"10px", color:"#305F86"}}>{item.descricao}</h2> */}
                <button className='buttonGroupDesc' onClick={()=> openModal(item.nome,item.descricao)} >{"Ver descrição"}</button>
                <button className='buttonGroup' onClick={()=> getId(item._id)} >{"Entrar"}</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
          
                  >
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>
                      <img src='https://cdn-icons-png.flaticon.com/512/463/463612.png' onClick={closeModal} alt="close" width={30} height={30} style={{cursor:'pointer'}}/>
                    </div>

                    <h2 className='titleModal'>{groupName}</h2>

                    <form style={{marginTop:"50px", marginBottom:"50px", border:"none"}}>
                      <div><p className='textModal'><b>Descrição: </b>{groupDesc}</p></div>
                    </form>
                  </Modal>

            </div>


          </div>
        
        )
      }): <img className='imageGroupResults' src='https://cdn-icons-png.flaticon.com/512/7486/7486831.png' alt='Imagem ilustrativa do grupo'/> }
      </div>
      </section>
      );
}