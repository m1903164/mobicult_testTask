import CardView from '../../../views/settings/card/CardView.vue'
import AddEditCardView from '../../../views/settings/card/AddEditCardView.vue'

const prefix = '/settings'

export default  [
    {
        path: `${prefix}/card`,
        name: 'settingCard',
        component: CardView,
    },
    {
        path: `${prefix}/addCard`,
        name: 'settingsAddCard',
        component: AddEditCardView
    },
    {
        path: `${prefix}/editCard/:id`,
        name: 'settingsEditCard',
        component: AddEditCardView
    },
    {
        path: prefix, // Добавлен маршрут для "/settings"
        redirect: `${prefix}/card` // Перенаправление на "/settings/card"
    }
]