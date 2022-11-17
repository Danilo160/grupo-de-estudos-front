import React, {useState } from "react";
import Navbar from "../Navbar/Navbar"

const userName = window.localStorage.getItem("nome");
const userId = window.localStorage.getItem("id");
const userPhoto = window.localStorage.getItem("foto");
const userEmail = window.localStorage.getItem("email");
const userToken = window.localStorage.getItem("token")

var photo;
if (userPhoto===""){
  photo = userPhoto
}else{
  if(userPhoto===null){
    photo = ""
  }else{
    photo = "data:image/png;base64," + userPhoto
  }
  
}

export const Profile = () => {

  const noProfile = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"


  const [image, setImage] = useState(photo)


  let base64String = ""
  
  function imageUploaded() {
      var file = document.querySelector(
          'input[type=file]')['files'][0];

      var reader = new FileReader();

      reader.onload = function () {
          base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
          console.log(base64String);

          
      var data = JSON.stringify({
        foto: base64String,
        token: userToken
      })
  
      var requestOptions = {
        method: 'PUT',
        body: data,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        redirect: 'follow'
      };
      
      fetch(`http://localhost:5000/aluno/update-photo/id=${userId}`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
           console.log(data)
           window.localStorage.setItem("foto",data.foto);
           window.location.reload();
        })
        .catch(error =>{if(error){console.log(data)}})
      }
      reader.readAsDataURL(file);
  }

  const changePhoto = (e) => {
        if(e.target.files[0].size >=5000000){
          alert("Tamanho da imagem atingiu o limite!")
        }else{
          setImage(URL.createObjectURL(e.target.files[0]))
          imageUploaded()
        }
  
  }

  const select = () => {
    document.getElementById("fileImage").click();
  }

  const deletePhoto = () => {
    if(userPhoto===""){
      alert("Não há foto!")
    }else{
    var data = JSON.stringify({
      foto: "",
      token: userToken
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
    
    fetch(`http://localhost:5000/aluno/update-photo/id=${userId}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
         console.log(data)
         window.localStorage.setItem("foto",data.foto);
         window.location.reload();
      })
      .catch(error =>{if(error){console.log(error);}})
    }
  }

  const exit = (e) =>{
    e.preventDefault()
    window.localStorage.setItem("token", "")
    window.location.href="/login"
  }


  return (
  
    <>
    <Navbar/>
      <div className="containerPage">
      
      <form className="boxProfile"  >

      
        <input type="file" id="fileImage" accept="image/*" className="inputImage" onChange={changePhoto}/>

        <p className="titleProfile">{"Meu perfil"}</p>
        
        {image===""?<img src={noProfile} style={{opacity: 0.5}} id="userPhoto" alt="Foto de perfil" className="userPhoto" onClick={select}/>:
        <img src={image} id="userPhoto" onClick={select} alt="Foto de perfil" className="userPhoto"/>}


        <div className="buttonRemovePhoto" onClick={deletePhoto}><p>Remover foto</p></div>

        <div>
          <p className="textProfile">{userName}</p>
          <p className="textProfile">{userEmail}</p>
        </div>

        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/4400/4400483.png" width={30} height={30} alt="exit" title="Encerrar sessão" onClick={exit} style={{cursor:"pointer", marginTop:"10px"}}/>
        </div>

 
      </form>

      </div>

    
    </>
  );
};