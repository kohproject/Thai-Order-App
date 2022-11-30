<template>
  <div class="wrapper__signup-modal">
   
    <div class="modal-content">
      <h3>my modal header</h3>
      
       <CloseModal closemodaltype="signup" editType="false"/>

      <ul :class="['list__tab-login-toggle',(toggleBool) ? 'login-list' : 'sign-list']">
          <li><a href="javascript:void(0)"  @click="setSwitch('login')">login</a></li>
          <li><a href="javascript:void(0)" @click="setSwitch('signup')">signup</a></li>
      </ul>
      <div :class="['form-group',(toggleBool ==true) ? 'login' : 'sign']">
        <section class="sect__login">
          <ol class="list__form">
                <li class="li__form-wrap">
          
              <label for="login_username" id="lab_username">email     <span class="sp__error">error</span></label
              ><input id="login_username" class="inp-login" v-model="userNewlogin.email" type="email" />
            </li>
              <li class="li__form-wrap">
              
              <label for="login_password" id="lab_password">password <span class="sp__error">error</span></label
              ><input id="login_password" class="inp-login" v-model="userNewlogin.password" type="password" />
            </li>
            <li class="li__btn-wrap" style="padding-top:50px">
                <BaseButton @click="setUserObj" :clBool="getBtnStatus()" label="Submit" bg="blue" cartIcon="none" />
            </li>
          </ol>
         
        </section>
        <section class="sect__signup">
          <ol class="list__form">
            <li class="li__form-wrap">
              <ul class="flex-wide50">
                <li
                  v-for="itm in userObj.user[0].names"
                  :key="itm.name"
                  :class="['li__form-wrap', { active: itm.actStatus }]">
                  <label :for="'inp_' + itm.type">{{ itm.label }}</label>
                  <input
                    :id="'inp_' + itm.type"
                    class="inp-login"
                    @click="setFormAct($event, itm)"
                    :name="'inp_' + itm.type"
                    :type="itm.type"
                    v-model="itm.value"
                    />
                </li>
              </ul>
            </li>

            <li
              v-for="itm in userObj.user[1].creds"
              :key="itm.name" :class="['li__form-wrap', { active: itm.actStatus }]">
              <label :for="'inp_' + itm.type">{{ itm.label }}</label>
              <input
                :id="'inp_' + itm.type"
                class="inp-login"
               @click="setFormAct($event, itm)"
                :name="'inp_' + itm.type"
                :type="itm.type"
                v-model="itm.value"
              />
            </li>

            <li class="li__form-wrap">
              <p class="txt__promo">
                <InputForm
                  inpVal="false"
                  inpId="promoEmails"
                  inptype="checkbox"
                  inpclass="chx inp-login"
                />
                I want to receive promotional emails
              </p>
            </li>
            <li class="li__btn-wrap">
              <BaseButton @click="setUserObj" :clBool="getBtnStatus()" label="Sign Up" bg="blue" cartIcon="none" />
            </li>
          </ol>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { ref,computed} from "vue";
import { useStore } from "vuex";
import InputForm from "@/components/common/InputForm.vue";
import CloseModal from "@/components/common/CloseModal.vue";
import BaseButton from "@/components/common/BaseButton.vue";
export default {
  name: "ModalSignup",
  setup(props,{emit}) {
    const store = useStore();
    const toggleBool = ref(props.loginBool);
    const userObj = computed(() => store.getters['GETLOGINUSER']);
    //const sType = ref(props.switchType);
    let liStatus = false;

    const userNewlogin = ref({email:"junk@junk.com",password:"junktest"});
    const addhover = (evt) => { liStatus = evt.type === "click" ? true : false};
    const setSwitch = (type) =>{ toggleBool.value = (type ==='login') ? true : false};

    const setFormAct = (evt, _itm) => {
        console.log(evt.target);
        console.log(_itm);
  
      //  _itm.actStatus = true;
      // if (evt.currentTarget.value == "") {
      //   _itm.actStatus = false;
      // }

      return;
    };

    const getBtnStatus = () =>{
      console.log(userObj);
      return true;
    };

    const setUserObj =  () =>{
       store.dispatch('LOGINUSER',userNewlogin.value);
       let $bool = computed(() => store.getters['GETREGISTEREDUSER']);
       let boolVal = $bool.value.registered;
    
       if(boolVal){
         store.dispatch('RESETSIGNUP', null);
       }
       emit('upLogin',boolVal);
    };

    const setBody = () => {
      store.commit("SETBODYMODAL");
    };


    return {
      userNewlogin,
      liStatus,
      userObj,
      toggleBool,
      getBtnStatus,
      setUserObj,
      setSwitch,
      setFormAct,
      addhover,
      setBody,
    };
  },
  components: {
    InputForm,
    CloseModal,
    BaseButton,
  },
};
</script>
<style lang="scss" scoped>
.hid {
  display: none;
}
ul.list__tab-login-toggle{
    height:40px;
    clear:both;
    background:#eee;
    position: relative;
    margin-bottom:-2px;
    z-index: 99;
    left:50%;
    width:calc(100% - 50px);
    transform:translateX(-50%);
    >li{
        >a{
            display:flex;
            margin-top:4px;
            align-items:center;
            justify-content:center;
            height:36px;
            width:140px;
            padding:5px 20px;
            color:#777;
            background:#ddd;
        }
    }
}


ul.list__tab-login-toggle.sign-list >li:nth-child(2),
ul.list__tab-login-toggle.login-list >li:nth-child(1){
    >a{
      background:#fff;
      border-left:solid 1px #ccc;
      border-top:solid 1px #ccc;
      border-right:solid 1px #ccc;
      margin-left:4px;
      transform:scale(1.05);
    }
   }


.wrapper__signup-modal,
.wrapper__full-modal {
  height: 0px;
  width: 0px;
  overflow: hidden;
  display: block;
  background: #fff;
  position: fixed;
  top: 100%;
  left: 50%;
  background: #eee;
  transform: translate(-50%, -50%);
  transition: transform .3s cubic-bezier(0.48, 0.05, 0, 1.49);

  .modal-content {
    overflow-y: auto;
    min-width: calc(99% + 20px);
    padding-top: 60px;
    padding-bottom: 60px;
    height: 100%;
    max-height: 85vh;
    border-top: solid 4px #4e95a7;
    text-align: left;
    .form-group {
     position: relative;
     width:100%;
     height:100%;
    
      > section {
        border-radius: 4px;
        border: solid 1px #ccc;
        background: #fff;
        padding-top: 10px;
        padding-bottom: 10px;
      
        width: calc(100% - 50px);
        position: absolute;
        left:50%;
        z-index: 9;
        display: block;
        min-height:360px;
        transform: translateX(-50%);
        transition:transform .3s ease-in-out,opacity .1s ease;
        ol.list__form {
          max-width: 440px;
          margin-top:12px;
          margin-left: auto;
          margin-right: auto;
          > li {
            position: relative;
            min-height: 75px;
            width: 100%;
            clear: both;
            padding-left: 20px;

            ul.flex-wide50 {
              clear: both;
              min-height:50px;
            

              > li.li__form-wrap {
                width: 49.9%;
                position: relative;
                input.inp-login{
                  left:0px;
                }
                label {
                  width: 95%;
                }
              }
            }


          
            p.txt__promo {
              font: normal 11px verdana;
              display:flex;align-items: flex-start;
              align-items: center;
              input{
                margin-right:8px;
              }
            }
            label {
              font: normal 13px verdana;
              display: block;
              position: absolute;
              width: 90%;
              height: 45px;
              background: #fff;
              top: 12px;
              color: #999;
             
            }
            input[type=text],
            input[type=email],
            input[type=password],
            input[type=phone] {
              display: inline-block;
              outline: none;
              position: absolute;
              top: 30px;
              width: 90%;
              max-width: 400px;
              height: 40px;
               background:#eee;
               border:solid 2px #eee;
            
              left:20px;
              text-indent: 4px;
              z-index:2;
            }
          }

          li.li__form-wrap {
            > label {
              &:after {
                content: "";
                display: block;
                opacity: 0;
                position: absolute;
                height: 1px;
                width: 0px;
                border-top: dashed 1px #666;
                left: 50%;
                top: 43px;
                z-index: 3;
                transform: translateX(-50%);
              }
            }
           
          }
          li.li__form-wrap.active {
            input[type="text"],
            input[type="email"],
            input[type="password"],
            input[type="phone"] {
           
              text-indent: 20px;
            }
            label {
              color: #999;
              font: normal 11px verdana;
              padding-top: 3px;
              z-index: 0;
              background: #fffffc;
              transition: background 0.3s ease-in-out, font 0.2s ease;
              &:after {
                width: 100%;
                opacity: 1;
                transition: all 0.1s ease;
              }
            }
          }
           li.li__btn-wrap{
              height:auto;
              padding:0px 20px 20px 20px;
          }
        }
      }
    }

    .form-group.login{
        >section.sect__signup{
            opacity:0;
            transform:translateX(150%);
        }
        >section.sect__login{
          opacity:1;
            transform:translateX(-50%);
        }
    }
    .form-group.sign{
             >section.sect__signup{
               opacity:1;
            transform:translateX(-50%);
        }
        >section.sect__login{
          opacity:0;
            transform:translateX(-150%);
        }
    }

  }
}


.wrapper__signup-modal{
  display:none;
}

body.open-modal.modal-signup{
  .wrapper__signup-modal{
    display: block;
    min-width: 330px;
    max-width: 90vw;
    overflow: hidden;
    border: solid 20px #fff;
    width: 40%;
    height: 90vh;
    z-index:9999;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    h3{
      text-align:center;
      width:99%;
      margin:0px;
    }
  }
}

</style>