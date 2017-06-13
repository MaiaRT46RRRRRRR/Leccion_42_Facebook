window.fbAsyncInit =()=> {
  FB.init({
    appId   :'1703097543329515',//Tu APP ID
    cookie  : true, //habilita las cookies para que el server puede  accerder
    xfbml   :true ,//parsea los  plugins sociales  en la  pagination
    version :'v2.9' //usa version 2.8
  });

};
function loginHandler(response){
  if (response.status ==='connected'){
    state.status ="Conectado" ;
    FB.api('/me?fields=email,name' ,user =>{
      state.user =user ;
      state.doRender();
    });
  } else if(response.status==='not_authorized'){
    state.user =null ;
    state.status ="Aplicación no autorizada";
    state.doRender();
  }
}
function doLogin(){
  FB.login(loginHandler,{scope :'email'});
}
