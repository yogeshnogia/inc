$(document).ready(function() {

    var founders = $('#founders');
    var stage = $('#stage');
    var employees = $('#employees');

    $.ajax({
        url: "companies.json",
        type: "GET",
        complete: function(x, y) {
            data = $.parseJSON(x.responseText);
            $.each(data.companies, function(key, value) {
                var $this = $(this);
                var trow = $('.trow');
                var tbody = $('.tbody');
                var companyName = $('.company-name');
                var html = "";

                $(tbody).each(function() {
                    html += "<tr><td class='company'><h4>" + value.name + "</h4><p>" + value.description + "</p></td>";
                    html += "<td class='location'>" + value.location + "</td>";
                    html += "<td class='market'>";
                    for (var i = 0; i < value.market.length; i++) {
                        html += "<p>" + value.market[i] + "</p>";
                    }
                    html += "</td>";
                    html += "<td class='website'><a href ='http://" + value.website + "'>" + value.website + "</td>";
                    html += "<td class='employees hide'>" + value.employees + "</td>";
                    html += "<td class='stage hide'>" + value.stage + "</td>";
                    html += "<td class='founders hide'>";

                    for (var j = 0; j < value.founders.length; j++) {
                        html += "<p>" + value.founders[j] + "</p>";
                    }

                    html += "</td><tr>";
                    tbody.append(html);
                });


            });
        }
    });


    $(founders).change(function() {
        if (this.checked) {
            console.log('Founder On');
            var foundersClass = $('.founders');
            foundersClass.attr('class', 'founders display');
        } else {
            console.log('Founder Off');
            var foundersClass = $('.founders');
            foundersClass.attr('class', 'founders hide');
        }
    });

    $(stage).change(function() {
        if (this.checked) {
            console.log('Stage On');
            var stageClass = $('.stage');
            stageClass.attr('class', 'stage display');
        } else {
            console.log('Stage Off');
            var stageClass = $('.stage');
            stageClass.attr('class', 'stage hide');
        }
    });

    $(employees).change(function() {
        if (this.checked) {
            console.log('Employees On');
            var employeesClass = $('.employees');
            employeesClass.attr('class', 'employees display');
        } else {
            console.log('Employees Off');
            var employeesClass = $('.employees');
            employeesClass.attr('class', 'employees hide');
        }
    });

    // Scroll horizontally

    var left = $('.glyphicon-arrow-left');
    var right = $('.glyphicon-arrow-right');
    var main = $('.main');
    var rl = 50;
    var xx = 50;
    var table = $('.table-responsive');


    right.on('click', function() {

        $(table).scrollLeft(xx);
        xx += 50;
        if (xx > 750) {
            xx = 750;
        }
        rl = xx;
    });


    left.on('click', function() {
        rl -= 50;
        $(table).scrollLeft(rl);
        if (rl <= 0) {
            rl = 0;
        }
        xx = rl;
    });

});