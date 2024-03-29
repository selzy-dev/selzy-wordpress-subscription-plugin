import commonMessage from './common'
import VueI18n from 'vue-i18n'
import Vue from "vue";

Vue.config.productionTip = false
Vue.use(VueI18n);

const i18n = new VueI18n({
    messages: commonMessage,
    locale: document.getElementById('wpselzy-form').getAttribute('data-lang')
});
export default {
    state: {
        commonSettings: {
            form: {
                title: {
                    value: null,
                    styles: {}
                },
                description: {
                    value: null,
                    styles: {}
                },
                button: {
                    value: i18n.t('subscribe'),
                    styles: {}
                },
                policyConf: {
                    value: null,
                    styles: {}
                },
                styles: {}
            },
            messages: {
                successText: i18n.t('message.successText'),
                validationErrorText: i18n.t('errors.validationErrorText'),
                serverErrorText: i18n.t('errors.serverErrorText'),
                minLengthErrorText: i18n.t('errors.minLengthErrorText'),
                maxLengthErrorText: i18n.t('errors.maxLengthErrorText'),
                minNumberErrorText: i18n.t('errors.minNumberErrorText'),
                maxNumberErrorText: i18n.t('errors.maxNumberErrorText'),
                regExpErrorText: '',
                requiredErrorText: i18n.t('errors.requiredErrorText'),
                emailErrorText: i18n.t('errors.emailErrorText')
            },
            settingsSend: {
                doubleOptin: 3
            }
        }
    },
    mutations: {
        editCommonSettingsMessages(state, { successText, validationErrorText, serverErrorText, minLengthErrorText, maxLengthErrorText, minNumberErrorText, maxNumberErrorText, regExpErrorText, requiredErrorText }) {
            if (successText) {
                state.commonSettings.messages.successText = successText
            }
            if (validationErrorText) {
                state.commonSettings.messages.validationErrorText = validationErrorText
            }
            if (serverErrorText) {
                state.commonSettings.messages.serverErrorText = serverErrorText
            }
            if (minLengthErrorText) {
                state.commonSettings.messages.minLengthErrorText = minLengthErrorText
            }
            if (maxLengthErrorText) {
                state.commonSettings.messages.maxLengthErrorText = maxLengthErrorText
            }
            if (minNumberErrorText) {
                state.commonSettings.messages.minNumberErrorText = minNumberErrorText
            }
            if (maxNumberErrorText) {
                state.commonSettings.messages.maxNumberErrorText = maxNumberErrorText
            }
            if (regExpErrorText) {
                state.commonSettings.messages.regExpErrorText = regExpErrorText
            }
            if (requiredErrorText) {
                state.commonSettings.messages.requiredErrorText = requiredErrorText
            }
        },
        editCommonSettingsTitle(state, value) {
            state.commonSettings.form.title.value = value
        },
        editCommonSettingsDescription(state, value) {
            state.commonSettings.form.description.value = value
        },
        editCommonSettingsButton(state, value) {
            state.commonSettings.form.button.value = value
        },
        editCommonSettingsPolicy(state, value) {
            state.commonSettings.form.policyConf.value = value
        },
        editCommonSettingsStyleByType(state, { type, styles }) {
            switch (type) {
                case 'title':
                    state.commonSettings.form.title.styles = {
                        ...state.commonSettings.form.title.styles,
                        ...styles
                    }
                    for (let key in state.commonSettings.form.title.styles) {
                        if (state.commonSettings.form.title.styles[key] === '') delete state.commonSettings.form.title.styles[key]
                    }
                    break
                case 'description':
                    state.commonSettings.form.description.styles = {
                        ...state.commonSettings.form.description.styles,
                        ...styles
                    }
                    for (let key in state.commonSettings.form.description.styles) {
                        if (state.commonSettings.form.description.styles[key] === '') delete state.commonSettings.form.description.styles[key]
                    }
                    break
                case 'policyConf':
                    state.commonSettings.form.policyConf.styles = {
                        ...state.commonSettings.form.policyConf.styles,
                        ...styles
                    }
                    for (let key in state.commonSettings.form.policyConf.styles) {
                        if (state.commonSettings.form.policyConf.styles[key] === '') delete state.commonSettings.form.policyConf.styles[key]
                    }
                    break
                case 'form':
                    state.commonSettings.form.styles = {
                        ...state.commonSettings.form.styles,
                        ...styles
                    }
                    for (let key in state.commonSettings.form.styles) {
                        if (state.commonSettings.form.styles[key] === '') delete state.commonSettings.form.styles[key]
                    }
                    break
                case 'button':
                    state.commonSettings.form.button.styles = {
                        ...state.commonSettings.form.button.styles,
                        ...styles
                    }
                    for (let key in state.commonSettings.form.button.styles) {
                        if (state.commonSettings.form.button.styles[key] === '') delete state.commonSettings.form.button.styles[key]
                    }
                    break
            }
        },
        setCommonSettings(state, commonSettings) {
            const patchedCommonSettings = {
                ...commonSettings,
                form: {
                    ...commonSettings.form,
                }
            }
            state.commonSettings = patchedCommonSettings
        },
        setDefaultCommonSettingsStyles(state) {
            //form
            state.commonSettings.form.styles.backgroundColor = '#ffffff'
            state.commonSettings.form.styles.borderWidth = '1px'
            state.commonSettings.form.styles.borderStyle = 'solid'
            state.commonSettings.form.styles.borderColor = '#e3e3e3'
            state.commonSettings.form.styles.padding = '20px 20px 20px 20px'
            state.commonSettings.form.styles.fontSize = '14px'
            state.commonSettings.form.styles.color = '#191919'

            //title
            state.commonSettings.form.title.styles.fontSize = '18px'
            state.commonSettings.form.title.styles.lineHeight = '1.5'
            state.commonSettings.form.title.styles.fontWeight = '700'
            state.commonSettings.form.title.styles.margin = '0 0 20px 0'
            state.commonSettings.form.title.styles.textAlign = 'left'
            state.commonSettings.form.title.styles.color = '#191919'
            state.commonSettings.form.title.styles.backgroundColor = '#ffffff'

            //description
            state.commonSettings.form.description.styles.fontSize = '16px'
            state.commonSettings.form.description.styles.lineHeight = '1.5'
            state.commonSettings.form.description.styles.fontWeight = '400'
            state.commonSettings.form.description.styles.margin = '0 0 20px 0'
            state.commonSettings.form.description.styles.textAlign = 'left'
            state.commonSettings.form.description.styles.color = '#191919'
            state.commonSettings.form.description.styles.backgroundColor = '#ffffff'

            //button
            state.commonSettings.form.button.styles.fontSize = '14px'
            state.commonSettings.form.button.styles.lineHeight = '1.5'
            state.commonSettings.form.button.styles.fontWeight = '400'
            state.commonSettings.form.button.styles.padding = '8px 16px 8px 16px'
            state.commonSettings.form.button.styles.borderStyle = 'none'
            state.commonSettings.form.button.styles.color = '#ffffff'
            state.commonSettings.form.button.styles.backgroundColor = '#3434e3'

            //policyConf
            state.commonSettings.form.policyConf.styles.fontSize = '16px'
            state.commonSettings.form.policyConf.styles.lineHeight = '1.5'
            state.commonSettings.form.policyConf.styles.fontWeight = '400'
            state.commonSettings.form.policyConf.styles.margin = '0 0 20px 0'
            state.commonSettings.form.policyConf.styles.textAlign = 'left'
            state.commonSettings.form.policyConf.styles.color = '#191919'
            state.commonSettings.form.policyConf.styles.backgroundColor = '#ffffff'
        },
        setCommonSettingsSettingsSendDoubleOptin(state, value) {
            state.commonSettings.settingsSend.doubleOptin = value
        }
    },
    actions: {
        editCommonSettingsMessages({ commit }, { successText, validationErrorText, serverErrorText, minLengthErrorText, maxLengthErrorText, minNumberErrorText, maxNumberErrorText, regExpErrorText, requiredErrorText }) {
            commit('editCommonSettingsMessages', { successText, validationErrorText, serverErrorText, minLengthErrorText, maxLengthErrorText, minNumberErrorText, maxNumberErrorText, regExpErrorText, requiredErrorText })
            commit('setCommonSettingsData')
        },
        editCommonSettingsTitleValue({ commit }, value) {
            commit('editCommonSettingsTitle', value)
            commit('setCommonSettingsData')
        },
        editCommonSettingsDescriptionValue({ commit }, value) {
            commit('editCommonSettingsDescription', value)
            commit('setCommonSettingsData')
        },
        editCommonSettingsButtonValue({ commit }, value) {
            commit('editCommonSettingsButton', value)
            commit('setCommonSettingsData')
        },
        // policyConf
        editCommonSettingsPolicyValue({ commit }, value) {
            commit('editCommonSettingsPolicy', value)
            commit('setCommonSettingsData')
        },
        editCommonSettingsStyleByType({ commit }, { type, styles }) {
            commit('editCommonSettingsStyleByType', { type, styles })
            commit('setCommonSettingsData')
        },
        setCommonSettings({ commit }, commonSettings) {
            commit('setCommonSettings', commonSettings)
            commit('setCommonSettingsData')
        },
        setDefaultCommonSettingsStyles({ commit }) {
            commit('setDefaultCommonSettingsStyles')
            commit('setCommonSettingsData')
        },
        setCommonSettingsSettingsSendDoubleOptin({ commit }, value) {
            commit('setCommonSettingsSettingsSendDoubleOptin', value)
            commit('setCommonSettingsData')
        }
    },
    getters: {
        commonSettings(state) {
            return state.commonSettings
        },
        commonSettingsMessages(state) {
            return state.commonSettings.messages
        },
        commonSettingsForm(state) {
            return state.commonSettings.form
        },
        commonSettingsFormTitle(state) {
            return state.commonSettings.form.title
        },
        commonSettingsFormDescription(state) {
            return state.commonSettings.form.description
        },
        commonSettingsFormButton(state) {
            return state.commonSettings.form.button
        },
        // policyConf
        commonSettingsFormPolicy(state) {
            return state.commonSettings.form.policyConf
        },
        commonSettingsSettingsSend(state) {
            return state.commonSettings.settingsSend
        },
        // delete 
        commonSettingsMeow(state) {
            return state.commonSettings
        },
    }
}