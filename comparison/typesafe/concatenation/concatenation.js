!function () {

    var output = document.getElementById("js-output")

    function StringToString () {
        return "hello " + "world"
    }

    function IntToString () {
        return 5 + " + 5"
    }

    function ObjectToString () {
        return {hello: "world"} + " well"
    }

    function ListToObject () {
        return [] + {}
    }

    function IntToObject () {
        return 1 + {}
    }

    function IntToList () {
        return 1 + []
    }

    function ObjectToList () {
        return {} + []
    }

    function ListToString () {
        return [] + " a list!"
    }

    function ObjectToString () {
        return {} + " an object!"
    }

    function OverriddenObjectToString () {
        return {toString : function () { return "[I'm an object with implicit toString invocation]" }} + "<<>>"
    }

    function appendConcatenation(func) {
        var toAppend = "<div>", fragment = document.createElement("div")
        toAppend += "<div class='label'>"+func[0]+"</div>"
        toAppend += "<div class='concat'>"+func[1]()+"</div>"
        toAppend += "</div>"
        fragment.innerHTML = toAppend
        output.appendChild(fragment.firstChild)
    }

    function outputter () {

        var concatenations = [["String and string", StringToString],
                              ["Int and string", IntToString],
                              ["Object and string", ObjectToString],
                              ["List and object", ListToObject],
                              ["List to object", IntToObject],
                              ["Int and list", IntToList],
                              ["Object and list",ObjectToList],
                              ["List and string", ListToString],
                              ["Object and string",ObjectToString],
                              ["Overridden toString and String", OverriddenObjectToString]]

        for(var i = 0, len = concatenations.length; i < len; i++) {
            appendConcatenation(concatenations[i])
        }
    }

    outputter()

}()