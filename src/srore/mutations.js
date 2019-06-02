import{
    RETSET_NAME
} from './mutation-types.js'

export default {
    //修改用户名
    [RETSET_NAME](state,username) {
        state.login = true;
    },

    SHOWLOADING(state) {
        state.LOADING = true
    },
    hideLoading(state) {
        state.LOADING = false
    }
}
