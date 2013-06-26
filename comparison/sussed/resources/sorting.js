!function() {
    var inp = document.getElementById("inp")

    inp.addEventListener("input", function(e) {
        var qout = document.getElementById("js-quick")
        qout.innerHTML = quicksort(parse(inp.value))
        var mout = document.getElementById("js-merge")
        mout.innerHTML = mergesort(parse(inp.value))
        var hout = document.getElementById("js-heap")
        hout.innerHTML = heapsort(parse(inp.value))
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

    function merge(a, b) { //mmm... imperative
        var results = []
        while(a.length > 0 || b.length > 0) {
            if(a.length > 0 && b.length > 0) {
                if(a[0] < b[0]) {
                    results.push(a[0])
                    a.shift()
                } else {
                    results.push(b[0])
                    b.shift()
                }
            } else if (a.length > 0) {
                results.push(a[0])
                a.shift()
            } else {
                results.push(b[0])
                b.shift()
            }
        }
        return results
    }

    function mergesort(values) {
        if(values.length <= 1) return values
        var left = values.slice(0, values.length/2)
        var right = values.slice(values.length/2)
        left = mergesort(left)
        right = mergesort(right)
        return merge(left, right)
    }

    function heapsort(values) {
        heapify(values)
        var end = values.length-1
        while(end > 0) {
            swap(values, end, 0)
            end -= 1
            siftDown(values, 0, end)
        }
        return values
    }

    function heapify(values) {
        var start = Math.floor((values.length-1)/2)
        while(start >= 0) {
            siftDown(values, start, values.length-1)
            start -= 1
        }
    }
    function siftDown(values, start, end) {
        var root = start
        while(root*2+1 <= end) {
            var child = root * 2 + 1
              , i = root
            if(values[i] < values[child]) i = child
            if(child+1 <= end && values[i] < values[child+1]) i = child+1
            if(i != root) {
                swap(values, root, i)
                root = i
            } else return
        }
    }

    function swap(values, i, j) {
        var t = values[i]
        values[i] = values[j]
        values[j] = t
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