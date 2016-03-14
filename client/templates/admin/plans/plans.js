Template.editplan.helpers({
    'checkValue' : function(val1, val2){
        if(val1 == val2){
			return "selected";
		}
    }
});

Template.addplan.events({
    'submit .add-plan-form' : function(){
        var plan_name = event.target.plan_name.value;
        var plan_label = event.target.plan_label.value;
        var days = event.target.days.value;
        var description = event.target.description.value;
        var is_default = event.target.is_default.value;
        var price = event.target.price.value;
        
        Plans.insert{
            plan_name: plan_name,
            plan_label: plan_label,
            days: days,
            price: price,
            description: description,
            is_default: is_default
        }
        
        toastr.success('Plan Added');
        Router.go('/admin/plans');
        
        return false;
    }
})

Template.listplan.events({
    'click .delete-plan' : function(){
        if (confirm("Are you sure?")) {
            Plans.remove(this._id);
            toastr.success('Plan Deleted');
            return false;
        }
        return false;   
    }
})