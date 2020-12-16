// import { VSnackbar, VBtn } from 'vuetify/lib';
import { VDialog, VCard, VCardTitle, VCardText, VDivider, VCardActions, VSpacer, VBtn } from 'vuetify/lib';
export default function install(Vue, config) {
    console.log(config)
    const messageBoxState = [{
        title: 'testTitle',
        message: 'messageTitle',
        callback: function () {
            console.log("callback")
        }
    }];
    const MessageBox = {
        props: {
            show: {
                type: Boolean,
                default: true
            },
            title: {
                default: 'info'
            },
            message: {
                default: 'message'
            }
        },
        created() {
            this.show()
        },
        methods: {
            close() {
                this.show = false
            },
            show() {

            }
        },
        render(h) {
            return h(VDialog, {
                props: {
                    persistent: true,
                    value: this.show,
                    width: 500
                }
            }, [
                h(VCard, [
                    h(VCardTitle, this.title),
                    h(VCardText, this.message),
                    h(VDivider),
                    h(VCardActions, [
                        h(VSpacer),
                        h(VBtn, {
                            props: {
                                color: "green darken-1",
                                text: true
                            },
                            on: {
                                click: this.close
                            }
                        }, "确认")
                    ])
                ])
            ])
        },
    }
    Vue.component("MessageBox", MessageBox)
    Vue.prototype.$messageBox = function (option) {
        console.log(option)
        messageBoxState.push({});
    }
}