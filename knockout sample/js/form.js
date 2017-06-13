function FormViewModel() {
    this.firstName=ko.observable('');
    this.lastName=ko.observable('');
    this.age=ko.observable();
    this.sex=ko.observable();
    this.sexOptions=['мужской', 'женский'];
    this.fullName=ko.computed(function() {
        return this.firstName()+' '+this.lastName();
    }, this);
    this.isAdmin=ko.observable();
    this.adminName=ko.observable('Администратор статей');

    this.notEmpty=ko.computed(function(){
        return !!this.age() || !!this.sex() || 
        !!this.firstName() || !!this.lastName() || !!this.isAdmin();
    }, this);
    this.save=function(){
        if (!this.notEmpty()) return;
        this.reset();
        event.preventDefault();
       alert('Hurray!'); 
    };
    this.reset=function() {
        this.firstName('');
        this.lastName('');
        this.age('');
        this.sex(null);
        this.isAdmin(false);
    };
};