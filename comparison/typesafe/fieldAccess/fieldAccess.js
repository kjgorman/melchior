!function () {

    var anObject = {
        x:5,
        y:"6",
        z:[7]
    }

    function RetrieveValue (obj, value) {
        return obj[value]
    }

    function AppendFieldAccess (func, description) {
        var toAppend = "<div>"
          , appendee = document.getElementById("js-output")
          , fragment = document.createElement("div")

        toAppend += "<div class='label'>"+description+"</div>"
        toAppend += "<div class='field'>"+func()+"</div>"
        toAppend += "</div>"
        fragment.innerHTML = toAppend
        appendee.appendChild(fragment.firstChild)
    }

    function main () {
        AppendFieldAccess(function () {
            return RetrieveValue(anObject, "x")
        }, "Simple access")

        AppendFieldAccess(function () {
            return RetrieveValue(anObject, "a")
        }, "Missing field")

        AppendFieldAccess(function () {
            return RetrieveValue(anObject, "__proto__")
        }, "'Hidden' member")

        AppendFieldAccess(function () {
            return RetrieveValue(anObject, "a")*5
        }, "Operation on undefined")

        AppendFieldAccess(function () {
            return RetrieveValue(anObject, "z")*5
        }, "Ill-typed operation")

        AppendFieldAccess(function () {
            try {
                RetrieveValue(anObject, "w")[0]
            } catch (e) {
                return e
            }
        }, "An outright error")
    }

    main ()
} ()