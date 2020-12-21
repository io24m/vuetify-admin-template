import { VDialog, VCard, VCardTitle, VCardText, VDivider, VCardActions, VSpacer, VBtn } from 'vuetify/lib';
export default function install(Vue, config) {
    console.log(config)
    const globalState = Vue.observable({ queue: [] });
    let globalMessageBoxId = 0;
    const MessageBox = {
        props: {
            intervalTime: {
                type: Number,
                default: 300
            }
        },
        data() {
            return {
                show: false,
                title: 'info',
                message: 'message'
            }
        },
        created() {
            this.w()
        },
        methods: {
            close() {
                this.show = false
                if (this.item) {
                    const index = globalState.queue.findIndex((element) => element.id === this.item.id);
                    if (index > -1) {
                        globalState.queue.splice(index, 1);
                    }
                }
                if (this.item.callback) {
                    this.item.callback()
                }
                this.item = null
                var next = this.next()
                if (next) {
                    setTimeout(() => {
                        this.nextShow(next)
                    }, this.intervalTime)
                    return
                }
                this.w()
            },
            next() {
                if (globalState.queue.length > 0) {
                    console.log(globalState.queue[0])
                    return globalState.queue[0]
                }
                return null
            },
            w() {
                var me = this;
                const unwatch = this.$watch(function () {
                    return globalState.queue;
                }, function (newVal) {
                    newVal = globalState.queue.find((element) => element.shown === false)
                    if (!newVal) {
                        return
                    }
                    if (unwatch) {
                        unwatch();
                    }
                    me.nextShow(newVal)
                })
            },
            nextShow(newVal) {
                newVal.shown = true
                this.title = newVal.title
                this.message = newVal.message
                this.item = newVal
                this.show = true
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
    Vue.$messageBox = Vue.prototype.$messageBox = function (option) {
        globalState.queue.push({
            id: ++globalMessageBoxId,
            shown: false,
            title: option.title,
            message: option.message,
            callback: option.cb
        });
    }
}