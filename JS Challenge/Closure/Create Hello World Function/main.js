// https://leetcode.com/problems/create-hello-world-function/editorial/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=j9yDnOOo
/**
 * @return {Function}
 */
const createHelloWorld = function () {
    return () => "Hello World";
};



const f = createHelloWorld();
console.log(f({}, null, 42));
