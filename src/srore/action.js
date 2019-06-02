import {
    GET_USERINFO
} from './mutation-types'
export default {
    async getUserInfo(
        {commit , state }
    ){

        // this.$api.article.

        commit(GET_USERINFO, 'res')
    }
}
