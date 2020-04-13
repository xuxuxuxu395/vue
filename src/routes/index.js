import goods from '../pages/goods.vue';
import shops from '../pages/shops.vue';
import comments from '../pages/comments.vue';
export default [
    {path:"/goods",component:goods},
    {path:"/shops",component:shops},
    {path:"/comments",component:comments},
    {path:"/",redirect:"/goods"}

]