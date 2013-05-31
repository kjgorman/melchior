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
            Events.applyNativeMapping(event)
            var element = event.srcElement, matches = false
            //todo -- make queries compose
            thus.queries.map(function (query) { matches |= query.matches(element) })
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
            parts = new QueryObject(),
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
        this.queries = []
    
        var matchById    = function (elem) { return this.query && elem.id == this.query },
            matchByClass = function (elem) { return this.query && elem.classList.contains(this.query) },
            matchByTag   = function (elem) { return this.query && elem.tagName == this.query.toUpperCase() }

        var matchThis = function (elem) {
            if(this.type !== undefined)
            switch (this.type) {
                case 0: return matchById.call(this, elem)
                case 1: return matchByClass.call(this, elem)
                case 2: return matchByTag.call(this, elem)
            }
            else return true
        }

        QueryObject.prototype.matches = function (elem) {
            var match = true, i = 0
            for(var len = this.queries.length; i < len; i++) {
                match &= this.queries[i].matches(elem)
            }
            return !!(matchThis.call(this, elem) & match)
        }

        QueryObject.prototype.push = function (query) {
            this.queries.push(query)
        }
    }

    return Query
}()