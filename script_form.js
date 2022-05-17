$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function(){

        let form = document.forms["msform"];

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        if (this.dataset.id == 1) {
            let requested_amount = form['requested_amount'];
            let email = form['email'];
            var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            let home_phone = form['home_phone'];
            let best_time_to_call = form['best_time_to_call'];
            let ssn = form['ssn'];
            let first_name = form['first_name'];
            let last_name = form['last_name'];
            let birth_date = form['birth_date'];
            // let birth_day = form['birth_day'];
            // let birth_year = form['birth_year'];
            let zip = form['zip'];

            if (requested_amount.value == "") {
                $("#requested_amount ~ .msg").html("Required this field.")
                return false;
            }
            else{
                $("#requested_amount ~ .msg").empty("")
            }
            if (!email.value.match(validRegex)) {
                $("#email ~ .msg").html("InValid email address.")
                email.focus();
                return false;
            }
            else{
                $("#email ~ .msg").empty("")
            }
            if (home_phone.value == "") {
                $("#home_phone ~ .msg").html("Required this field.")
                home_phone.focus();
                return false;
            }
            else{
                $("#home_phone ~ .msg").empty("")
            }
            if (best_time_to_call.value == "") {
                $("#best_time_to_call ~ .msg").html("Required this field.")
                best_time_to_call.focus();
                return false;
            }
            else{
                $("#best_time_to_call ~ .msg").empty("")
            }
            if (ssn.value == "") {
                $("#ssn ~ .msg").html("Required this field.")
                ssn.focus();
                return false;
            }
            else{
                $("#ssn ~ .msg").empty("")
            }

            if (first_name.value == "") {
                $("#first_name ~ .msg").html("Required this field.")
                first_name.focus();
                return false;
            }
            else{
                $("#first_name ~ .msg").empty("")
            }

            if (last_name.value == "") {
                $("#last_name ~ .msg").html("Required this field.")
                last_name.focus();
                return false;
            }
            else{
                $("#last_name ~ .msg").empty("")
            }

            

            if (birth_date.value == "") {
                $("#birth_date ~ .msg").html("Required this field.")
                birth_date.focus();
                return false;
            }
            else{
                $("#birth_date ~ .msg").empty("")
            }

            
            if (zip.value == "") {
                $("#zip ~ .msg").html("Required this field.")
                zip.focus();
                return false;
            }
            else{
                $("#zip ~ .msg").empty("")
            }
        }
        if (this.dataset.id == 2) {
            let state = form['state'];
            let city = form['city'];
            let address = form['address'];
            let address_length_months = form['address_length_months'];
            let own_home = form['own_home'];
            let income_type = form['income_type'];
            let employed_months = form['employed_months'];
            let active_military = form['active_military'];
            let job_title = form['job_title'];
            let employer = form['employer'];
            let work_phone = form['work_phone'];
            let monthly_income = form['monthly_income'];
            let direct_deposit = form['direct_deposit'];
            let pay_frequency = form['pay_frequency'];
            let pay_date1 = form['pay_date1'];
            


            if (state.value == "") {
                $("#state ~ .msg").html("Required this field.")
                state.focus();
                return false;
            }
            else{
                $("#state ~ .msg").empty("")
            }

            if (city.value == "") {
                $("#city ~ .msg").html("Required this field.")
                city.focus();
                return false;
            }
            else{
                $("#city ~ .msg").empty("")
            }

            if (address.value == "") {
                $("#address ~ .msg").html("Required this field.")
                address.focus();
                return false;
            }
            else{
                $("#address ~ .msg").empty("")
            }

            if (address_length_months.value == "") {
                $("#address_length_months ~ .msg").html("Required this field.")
                address_length_months.focus();
                return false;
            }
            else{
                $("#address_length_months ~ .msg").empty("")
            }

            if (income_type.value == "") {
                $("#income_type ~ .msg").html("Required this field.")
                income_type.focus();
                return false;
            }
            else{
                $("#income_type ~ .msg").empty("")
            }

            if (employed_months.value == "") {
                $("#employed_months ~ .msg").html("Required this field.")
                employed_months.focus();
                return false;
            }
            else{
                $("#employed_months ~ .msg").empty("")
            }

            if (job_title.value == "") {
                $("#job_title ~ .msg").html("Required this field.")
                job_title.focus();
                return false;
            }
            else{
                $("#job_title ~ .msg").empty("")
            }

            if (employer.value == "") {
                $("#employer ~ .msg").html("Required this field.")
                employer.focus();
                return false;
            }
            else{
                $("#employer ~ .msg").empty("")
            }

            if (work_phone.value == "") {
                $("#work_phone ~ .msg").html("Required this field.")
                work_phone.focus();
                return false;
            }
            else{
                $("#work_phone ~ .msg").empty("")
            }

            if (monthly_income.value == "") {
                $("#monthly_income ~ .msg").html("Required this field.")
                monthly_income.focus();
                return false;
            }
            else{
                $("#monthly_income ~ .msg").empty("")
            }

            if (direct_deposit.value == "") {
                $("#direct_deposit ~ .msg").html("Required this field.")
                direct_deposit.focus();
                return false;
            }
            else{
                $("#direct_deposit ~ .msg").empty("")
            }

            if (pay_frequency.value == "") {
                $("#pay_frequency ~ .msg").html("Required this field.")
                pay_frequency.focus();
                return false;
            }
            else{
                $("#pay_frequency ~ .msg").empty("")
            }

            if (pay_date1.value == "") {
                $("#pay_date1 ~ .msg").html("Required this field.")
                pay_date1.focus();
                return false;
            }
            else{
                $("#pay_date1 ~ .msg").empty("")
            }

        }
        if (this.dataset.id == 3) {
            let bank_aba = form['bank_aba'];
            let bank_account_number = form['bank_account_number'];
            let bank_name = form['bank_name'];
            let bank_phone = form['bank_phone'];
            let bank_account_length_months = form['bank_account_length_months'];
            let drivers_license_numbera = form['drivers_license_numbera'];
            let drivers_license_state = form['drivers_license_state'];
            let credit_score = form['credit_score'];
            let ss_number = form['ss_number'];

            if (bank_aba.value == "") {
                $("#bank_aba ~ .msg").html("Required this field.")
                bank_aba.focus();
                return false;
            }
            else{
                $("#bank_aba ~ .msg").empty("")
            }

            if (bank_account_number.value == "") {
                $("#bank_account_number ~ .msg").html("Required this field.")
                bank_account_number.focus();
                return false;
            }
            else{
                $("#bank_account_number ~ .msg").empty("")
            }

            if (bank_name.value == "") {
                $("#bank_name ~ .msg").html("Required this field.")
                bank_name.focus();
                return false;
            }
            else{
                $("#bank_name ~ .msg").empty("")
            }

            if (bank_phone.value == "") {
                $("#bank_phone ~ .msg").html("Required this field.")
                bank_phone.focus();
                return false;
            }
            else{
                $("#bank_phone ~ .msg").empty("")
            }

            if (bank_account_length_months.value == "") {
                $("#bank_account_length_months ~ .msg").html("Required this field.")
                bank_account_length_months.focus();
                return false;
            }
            else{
                $("#bank_account_length_months ~ .msg").empty("")
            }

            if (drivers_license_numbera.value == "") {
                $("#drivers_license_numbera ~ .msg").html("Required this field.")
                drivers_license_numbera.focus();
                return false;
            }
            else{
                $("#drivers_license_numbera ~ .msg").empty("")
            }

            if (drivers_license_state.value == "") {
                $("#drivers_license_state ~ .msg").html("Required this field.")
                drivers_license_state.focus();
                return false;
            }
            else{
                $("#drivers_license_state ~ .msg").empty("")
            }

            if (credit_score.value == "") {
                $("#credit_score ~ .msg").html("Required this field.")
                credit_score.focus();
                return false;
            }
            else{
                $("#credit_score ~ .msg").empty("")
            }

            if (ss_number.value == "") {
                $("#ss_number ~ .msg").html("Required this field.")
                ss_number.focus();
                return false;
            }
            else{
                $("#ss_number ~ .msg").empty("")
            }
            
            
            
        }
        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function(){

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;
                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width",percent+"%")
        $(".progress-bar").html(percent+"%")
    }


    // Function for form Data to JSON Object
    function jsonData(targetForm){
      var arr = $(targetForm).serializeArray();
      var obj = {};
      for(var a= 0; a < arr.length; a++){
        if(arr[a].value == ""){
          return false;
        }
        obj[arr[a].name] = arr[a].value;
      }
      var json_string = JSON.stringify(obj);
      return json_string;
    }

    $("#msform").submit(function(e){
        // console.log(formData)
        e.preventDefault();
        var formData = jsonData("#msform");
        // console.log(own_home.value)
        var query = "best_time_to_call="+best_time_to_call.value+"&birth_date="+birth_date.value+"&credit_score="+credit_score.value+"&drivers_license_numbera="+drivers_license_numbera.value+"&drivers_license_state="+drivers_license_state.value+"&email="+email.value+"&first_name="+first_name.value+"&last_name="+last_name.value+"&home_phone="+home_phone.value+"&own_home="+own_home.value+"&requested_amount="+requested_amount.value+"&ssn="+ssn.value+"&address="+address.value+"&address_length_months="+address_length_months.value+"&city="+city.value+"&state="+state.value+"&zip="+zip.value+"&bank_aba="+bank_aba.value+"&bank_account_length_months="+bank_account_length_months.value+"&bank_account_number="+bank_account_number.value+"&bank_account_type="+bank_account_type.value+"&bank_name="+bank_name.value+"&bank_phone="+bank_phone.value+"&direct_deposit="+direct_deposit.value+"&active_military="+active_military.value+"&employed_months="+employed_months.value+"&employer="+employer.value+"&income_type="+income_type.value+"&job_title="+job_title.value+"&monthly_income="+monthly_income.value+"&pay_date1="+pay_date1.value+"&pay_frequency="+pay_frequency.value+"&work_phone="+work_phone.value
            
        $.ajax({
            url : 'https://getyouradvance.com/ajax.php?'+query,
            type : "POST",
            // data : formData,
            success : function(data){
                // if(data.status == true){
                    alert('thanks');
                  // $("#msform").trigger("reset");
                  
                // }
              }
        });
    // return false;
    })
});