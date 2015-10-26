import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['page-header'],
    showSocailBar: false,
    socialAccounts: [
        {
            name: "Facebook",
            icon: "facebook",
            url: "https://www.facebook.com/vipulgarg261"
        },
        {
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/vipul_261"
        },
        {
            name: "Git Hub",
            icon: "github",
            url: "https://github.com/vipul261"
        }
    ],
    actions:{
        toggleSocial(){
            this.set('showSocailBar', (event.type !== 'mouseout'));
        }
    }
});
