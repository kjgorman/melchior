var Query = function () {
    "use strict";

    var Query = {}

    Query.hub = new QueryMediator()

    function QueryMediator() {
        this.queries = []
    }

    QueryMediator.prototype.addPattern = function (selector) {
        this.queries.push(selector)
        return this
    }

    QueryMediator.prototype.mediate = function (event, signal) {
        var thus = this
        document.addEventListener(event, function(event) {
            var element = event.srcElement, matches = false
            //todo -- make queries compose
            thus.queries.map(function (pattern) { pattern.map(function (sel) { matches |= sel.matches(element) }) })
            if (matches) {
                console.log("matched!")
                signal.push(event)
            }
        })
        return this
    }

    Query.matchesQuerySelector = function matchesQuerySelector(query, element) {
        var queryParts = parseQuery(query)
        for(var i = 0, len = queryParts.length; i < len; i++)
        if(queryParts[i].matches(element)) return true
        return false
    }
    
    Query.createSelectorOf = function createSelectorOf(queryString) {
        var separators = /([#\.]([^ #\.]+))/g,
            parts = [],
            tokens = queryString.split()
        for(var i = 0, len = tokens.length; i < len; i++) {
            var match
            if(/^\s*$/.test(tokens[i])) continue
            if(!(match = separators.exec(tokens[i]))) {
                parts.push(new QueryObject(2, tokens[i]))
                continue
            }
            do {
                parts.push(~match[1].indexOf("#") ? new QueryObject(0, match[2]) : new QueryObject(1, match[2]))
            } while ( (match = separators.exec(tokens[i])) !== null)
        }
        return parts   
    }
    
    var QueryObject = function QueryObject(type, query) {
        this.type = type
        this.query = query
        this.matchById = function (elem) { return this.query && elem.id == this.query }
        this.matchByClass = function (elem) { return this.query && elem.classList.contains(this.query) }
        this.matchByTag = function (elem) { return this.query && elem.tagName == this.query.toUpperCase() }
        QueryObject.prototype.matches = function (elem) {
            switch (this.type) {
                case 0: return this.matchById(elem)
                case 1: return this.matchByClass(elem)
                case 2: return this.matchByTag(elem)
                default: false
            }
        }
    }

    return Query
}()