import { VDialog, VCard, VCardTitle, VCardText, VDivider, VCardActions, VSpacer, VBtn } from 'vuetify/lib';
export default function install(Vue, config) {
    config = config || {}
    const messageType = ['info', 'success', 'warn', 'error']
    const messageColor = {
        info: 'green darken-1',
        success: 'green darken-1',
        warn: 'orange darken-1',
        error: 'red darken-1'
    }
    const globalState = Vue.observable({ queue: [] });
    let globalMessageBoxId = 0;
    const MessageBox = {
        props: {
            intervalTime: {
                type: Number,
                default: config && config.intervalTime || 300
            },
            width: {
                type: Number,
                default: config && config.width || 300
            }
        },
        data() {
            return {
                show: false,
                color: 'green darken-1',
                title: '消息',
                message: '消息',
                showCancel: false,
                okText: '确定',
                cancelText: '取消',
            }
        },
        created() {
            this.w()
        },
        methods: {
            ok() {
                if (this.item && this.item.ok) {
                    this.item.ok()
                }
                this.close(this, "ok")
            },
            cancel() {
                if (this.item && this.item.cancel) {
                    this.item.cancel()
                }
                this.close(this, "cancel")
            },
            close(obj, btn) {
                this.show = false
                if (this.item) {
                    const index = globalState.queue.findIndex((element) => element.id === this.item.id);
                    if (index > -1) {
                        globalState.queue.splice(index, 1);
                    }
                }
                if (this.item.callback) {
                    this.item.callback(obj, btn)
                }
                this.item = null
                var next = this.next()
                if (next) {
                    this.$nextTick(() => {
                        setTimeout(() => {
                            this.nextShow(next)
                        }, this.item.intervalTime || this.intervalTime)
                    })
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
                this.okText = newVal.okText || this.okText
                this.cancelText = newVal.cancelText || this.cancelText
                this.showCancel = newVal.showCancel || false
                this.item = newVal
                if (messageColor[newVal.type]) {
                    this.color = messageColor[newVal.type]
                }
                this.show = true
            }
        },
        render(h) {
            return h(VDialog, {
                props: {
                    persistent: true,
                    value: this.show,
                    width: this.width,
                    noClickAnimation: false
                }
            }, [
                h(VCard, [
                    h(VCardTitle, this.title),
                    h(VCardText, this.message),
                    h(VDivider),
                    h(VCardActions, [
                        h(VSpacer),
                        this.showCancel ?
                            h(VBtn, {
                                props: {
                                    color: this.color,
                                    text: true
                                },
                                on: {
                                    click: this.cancel
                                }
                            }, this.cancelText) : '',
                        h(VBtn, {
                            props: {
                                color: this.color,
                                text: true
                            },
                            on: {
                                click: this.ok
                            }
                        }, this.okText)
                    ])
                ])
            ])
        },
    }
    Vue.component("MessageBox", MessageBox)
    const messageBox = function (option) {
        option = Vue.util.extend({
            id: ++globalMessageBoxId,
            shown: false,
            type: 'info',
            callback: option.cb
        }, option)
        globalState.queue.push(option);
    }
    Vue.$messageBox = Vue.prototype.$messageBox = messageBox
    messageType.forEach((item) => {
        Vue.$messageBox[item] = Vue.prototype.$messageBox[item] = function (option) {
            option.type = item
            messageBox(option)
        }
    })
}