function ArrayViewModel() {
    var newsHeadersArray=[
        "Срочная новость",
        "Обычная новость",
        "Никому не интересная новость"
    ],
        newsArray=[
            {
                title: 'Срочная новость',
                text: 'Внимание! Внимание!  Внимание!',
                isNew: true
            },
            {
               title: 'Обычная новость',
                text: 'Внимание! Внимание!',
                isNew: false
            },
            {
                title: 'Никому не интересная новость',
                text: 'Внимание!',
                isNew: false
            }
        ],
        self=this;

    this.newsHeaders=ko.observableArray(newsHeadersArray);
    this.news=ko.observableArray(newsArray);
    this.addNewsControl={
        newTitle: ko.observable(),
        newText: ko.observable(),
        newIsNew: ko.observable(),
        addItem: function(context) {
            var value={
                title: context.newTitle(),
                text: context.newText(),
                isNew: context.newIsNew()
            };

            self.news.push(value);
        },

        removeAll: function() {
            self.news.removeAll();
        }
    };

    this.removeItem=function(context, event) {
        self.news.remove(context);
    }
};

