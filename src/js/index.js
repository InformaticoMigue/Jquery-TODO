$(document).ready(function() {
    $("#datepicker").datepicker();
    const tasks = [];
    const buttonAdd = $("#addTask")
    const form = $("#form")

    buttonAdd.click(function(event) {
        event.preventDefault();
        tasks.push(
            {
                name: $(this).attr("name")
                
            }
        )
        console.log(tasks);
    })
})