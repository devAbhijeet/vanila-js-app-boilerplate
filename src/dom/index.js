//Credit ==> https://gist.github.com/jochemstoel/856d5b2735c53559372eb7b32c44e9a6

/**
 * Convenient shortcut 
 */
Object.defineProperty(window, 'define', {
    value: (property, ...meta) => meta.length == 2 ? Object.defineProperty(meta[0], property, meta[1]) : Object.defineProperty(window, property, meta[0]),
    writable: false,
    enumerable: true
})

/** 
 * now | single statement accessor that returns current time
 * @returns {number} 
 */
define('now', {
    get: Date.now
})

/**
 * This allows you to "forEach" a NodeList returned by querySelectorAll or $$
 * similar to jQuery.prototype.each
 * use: $$('li').each(callback)
 */
Object.defineProperty(NodeList.prototype, 'each', {
    value: function (fn) {
        return Array.from(this).forEach((node, index) => fn(node, index))
    }
})

/**
 * $ for document.querySelector
 * $$ for document.querySelectorall
 * with optional context just like jQuery (defaults to document)
 *  $('h2') // will return single _&lt;h2&gt;_ element
 * $$('h2') // will return array with all _&lt;h2&gt;_ elements
 */

window.$ = (query, ctx = document) => ctx.querySelector(query)
window.$$ = (query, ctx = document) => ctx.querySelectorAll(query)

/** 
 * single method to get/set/list attributes of HTMLElement. 
 * get argument id:     $('div').attr('id')
 * set argument id:     $('div').attr('id', 'post123')
 * list all arguments:  $('div').attr()  // Fuck yeah
 */

HTMLElement.prototype.$ = query => {
    return this.querySelector(query)
}

HTMLElement.prototype.$$ = query => {
    return this.querySelectorAll(query)
}

HTMLElement.prototype.attr = function (key, value) {
    if (!value) {
        if (!key) {
            return this.attributes
        }
        return this.getAttribute(key)
    }
    this.setAttribute(key, value)
    return this
}

HTMLElement.prototype.removeAttr = function (key) {
    this.removeAttribute(key)
    return this
}

HTMLElement.prototype.has = function(attribute) {
    return this.hasAttribute(attribute)
}

HTMLElement.prototype.html = function (string) {
    if (!string)
        return this.innerHTML
    this.innerHTML = string
    return this
}

HTMLElement.prototype.text = function (string) {
    if (!string)
        return this.innerText
    this.innerText = string
    return this
}

HTMLElement.prototype.append = function (child) {
    if (child instanceof HTMLElement) {
        this.appendChild(child)
        return this
    }
    this.append(child)
    return this
}

HTMLElement.prototype.prepend = function (sibling) {
    if (sibling instanceof HTMLElement) {
        this.parentNode.insertBefore(sibling, this)
        return this
    }
    this.parentNode.insertBefore(sibling, this)
    return this
}

HTMLElement.prototype.parent = function () {
    return this.parentElement
}

HTMLElement.prototype.on = function (event, callback, options) {
    this.addEventListener(event, callback, options)
    return this
}

HTMLElement.prototype.off = function (event, callback, options) {
    this.removeEventListener(event, callback, options)
    return this
}

HTMLElement.prototype.emit = function (event, args = null) {
    this.dispatchEvent(event, new CustomEvent(event, {detail: args }))
    return this
}
// nieuw!todo: testen
HTMLElement.prototype.data = function (key, value) {
    if (!value) {
        if (!key) {
            return this.dataset
        }
        return this.dataset[key]
    }
    this.dataset[key] = value
    return this
}

HTMLElement.prototype.remove = function() {
    this.parentNode.removeChild(this)
}