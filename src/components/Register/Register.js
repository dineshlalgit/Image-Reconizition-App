import React from 'react';

const Sign = ({onRouteChange}) => {
 return(
    <article class="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw10 shadow-5 center">     
      <main class="pa4 black-80">
    <form class="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Atm Register</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="Name">Card No</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="Name" maxlength="18"  />
      </div>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Amount</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email-address" />
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Pin</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="pass" maxlength="4" id="password" />
      </div>
    </fieldset>
    <div class="">
      <input onClick={()=>onRouteChange('home')} class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Withdrawl" />
    </div>
    <div class="lh-copy mt3">
    </div>
  </form>
</main>
     
   
    </article> 
    )
}
export default Sign;