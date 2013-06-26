!function() {
    var inp = document.getElementById("inp")

    inp.addEventListener("input", function(e) {
        var out = document.getElementById("js-quick")
        out.innerHTML = quicksort(parse(inp.value))
    })

    function quicksort(values) {
        if(values.length === 0) return values
        var pivot = values.shift(), lesser = [], greater = []
        values.map(function(v) {
            if(v < pivot) lesser.push(v)
            else greater.push(v)
        })
        return quicksort(lesser).concat([pivot]).concat(quicksort(greater))
    }

    function parse(value) {
        var parts = value.split(","), i = 0, out = [], current
        for(; i < parts.length; i++) {
            if(!isNaN((current = parseInt(parts[i], 10))))
                out.push(current)
        }
        return out
    }
}()