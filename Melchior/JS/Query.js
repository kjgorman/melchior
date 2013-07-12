var Query = function () {
    "use strict";

    var Query = {}

    Query.hub = new QueryMediator()

    function QueryMediator() {
        this.queries = {}
    }

    QueryMediator.prototype.addPatternForEvent = function (selector, event) {
        if(this.queries[event] !== undefined)
            this.queries[event].push(selector)
        else {
            this.queries[event] = [selector]
        }
        return this
    }

    QueryMediator.prototype.mediate = function (eventName, signal, key, element) {
        var thus = this, elem = element || document
        elem.addEventListener(eventName, function(event) {
            Events.applyNativeMapping(event)
            var element = event.srcElement, matches = false
            //todo -- make queries compose
            matches = thus.queries[eventName] && thus.queries[eventName].reduce(function (matches, query) {
                return matches |= (query.hasOwnProperty('matches') || query.matches(element))
            }, matches)
            console.log(eventName, key, element, matches)
            if (matches) {
                if(key !== undefined) signal.push(Dom.get(element, key))
                else signal.push(event)
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