export default ({
    methods: {
        showMessage(group='universal', type='warn', title='Error', text='Что то пошло не так') {
            this.$notify({
                group: group,
                type: type,
                title: title,
                text: text
            });
        }
    }
});
