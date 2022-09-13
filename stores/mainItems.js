export const useMain = defineStore('main', () => {
    const mainItems = [

        {
            id: 0,
            title: 'ONLINE<br> ГОЛОСОВАНИЕ',
            noteDescription: '3',
            description: '3',
            date: '21.05.2022',
        },
        {
            id: 1,
            title: 'ОПЛАТИТЬ<br> ЭЛЕКТРОЭНЕРГИЮ/<br>ЦЕЛЕВЫЕ<br> ВЗНОСЫ',
            noteDescription: '3',
            description: '3',
            date: '21.05.2022',
            link: '/ads'
        },
        {
            id: 2,
            title: 'ОТПРАВИТЬ<br> ЖАЛОБУ<br> ИЛИ<br> ПРЕДЛОЖЕНИЕ<br> В ПРАВЛЕНИЕ',
            noteDescription: '2',
            description: '',
            date: '20.05.2022',
        },
    ];

    function getMainItems() {
        return mainItems;
    }

    function getLastMainItem() {
        return mainItems[0];
    }

    function getMainItemById({id}) {
        return mainItems.find( item => item.id == id);
    }
  
    return {
        mainItems,
        getLastMainItem,
        getMainItemById,
        getMainItems
    };
});